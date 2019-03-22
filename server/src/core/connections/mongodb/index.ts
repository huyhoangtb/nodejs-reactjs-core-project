// import Oauth2ServerRepository from "../../repository/Oauth2ServerRepository";

var mongoose = require('mongoose');

var initAutoIncrement = null;
var uri = 'mongodb://localhost:27017/platform';

mongoose.set('useFindAndModify', false);

class MongoDB {

    makeConnection() {

        var db = mongoose.connection;

        db.on('connecting', function () {
            console.log('connecting to MongoDB...');
        });

        db.on('error', function (error: any) {
            console.error('Error in MongoDb connection: ' + error);
            mongoose.disconnect();
        });
        db.on('connected', function () {
            console.log('MongoDB connected!');
        });
        db.once('open', function () {
            console.log('MongoDB connection opened!');
        });
        db.on('reconnected', function () {
            console.log('MongoDB reconnected!');
        });
        db.on('disconnected', function () {
            console.log('MongoDB disconnected!');
        });

        mongoose.connect(uri, {autoReconnect: true, useNewUrlParser: true});
    }


}

export default MongoDB;
