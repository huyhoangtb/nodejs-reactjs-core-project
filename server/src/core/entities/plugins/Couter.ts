// Module Scope
import Counter from "../schemas/Counter";
import ICouter from "../ientities/ICouter";

var mongoose = require('mongoose'),
    extend = require('extend');


// The function to use when invoking the plugin on a custom schema.
exports.plugin = function (schema: any, options: object) {

    // Default settings and plugin scope variables.
    let settings = {
            model: null, // The model to configure the plugin for.
            field: '_id', // The field the plugin should track.
            startAt: 0, // The number the count should start at.
            incrementBy: 1, // The number by which to increment the count each time.
            unique: true // Should we create a unique index for the field
        },
        fields: Object = {}, // A hash of fields to add properties to in Mongoose.
        ready: boolean = false; // True if the counter collection has been updated and the document is ready to be saved.

    switch (typeof(options)) {
        // If string, the user chose to pass in just the model name.
        case 'string':
            settings.model = options;
            break;
        // If object, the user passed in a hash of options.
        case 'object':
            extend(settings, options);
            break;
    }

    if (settings.model == null)
        throw new Error("model must be set");

    // Add properties for field in schema.
    fields[settings.field] = {
        type: Number,
        require: true
    };
    if (settings.field !== '_id')
        fields[settings.field].unique = settings.unique
    schema.add(fields);

    // Find the counter for this model and the relevant field.
    Counter.findOne(
        {model: settings.model, field: settings.field},
        function (err, counter) {
            if (!counter) {
                // If no counter exists then create one and save it.
                counter = new Counter({
                    model: settings.model,
                    field: settings.field,
                    count: settings.startAt - settings.incrementBy
                });
                counter.save(function () {
                    ready = true;
                });
            }
            else {
                ready = true;
            }
        }
    );

    // Declare a function to get the next counter for the model/schema.
    var nextCount = function (callback: Function) {
        Counter.findOne({
            model: settings.model,
            field: settings.field
        }, function (err: any, counter: ICouter) {
            if (err) return callback(err);
            callback(null, counter === null ? settings.startAt : counter.count + settings.incrementBy);
        });
    };
    // Add nextCount as both a method on documents and a static on the schema for convenience.
    schema.method('nextCount', nextCount);
    schema.static('nextCount', nextCount);

    // Declare a function to reset counter at the start value - increment value.
    var resetCount = function (callback: Function) {
        Counter.findOneAndUpdate(
            {model: settings.model, field: settings.field},
            {count: settings.startAt - settings.incrementBy},
            {new: true}, // new: true specifies that the callback should get the updated counter.
            function (err) {
                if (err) return callback(err);
                callback(null, settings.startAt);
            }
        );
    };
    // Add resetCount as both a method on documents and a static on the schema for convenience.
    schema.method('resetCount', resetCount);
    schema.static('resetCount', resetCount);

    schema.pre('save', function (next: Function) {
        var doc = this;

        if (doc.isNew) {
            (function save() {
                if (ready) {
                    if (typeof doc[settings.field] === 'number') {
                        Counter.findOneAndUpdate(
                            {model: settings.model, field: settings.field, count: {$lt: doc[settings.field]}},
                            {count: doc[settings.field]},
                            function (err) {
                                if (err) return next(err);
                                next();
                            }
                        );
                    } else {
                        Counter.findOneAndUpdate(
                            {model: settings.model, field: settings.field},
                            {$inc: {count: settings.incrementBy}},
                            {new: true},
                            function (err, updatedCounter: ICouter): void {
                                if (err) return next(err);
                                doc[settings.field] = updatedCounter.count;
                                next();
                            }
                        );
                    }
                } else {
                    setTimeout(save, 5);
                }

            })();
        }  else {
            next();
        }

    });
};
