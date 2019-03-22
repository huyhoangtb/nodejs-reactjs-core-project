import * as mongoose from 'mongoose';
import IClient from "../ientities/IClient";
import Translate from "../../i18n";
import ICouter from "../ientities/ICouter";

const schemma = {
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    entity: {type: String, require: true},
    field: {type: String, require: true},
    count: {type: Number, default: 0}
}

/**
 * MongooseSchema
 * @type {"mongoose".Schema}
 * @private
 */
var _schema: mongoose.Schema = new mongoose.Schema(schemma);

_schema.index({field: 1, model: 1}, {unique: true, required: true, index: -1});

/**
 * Mongoose.Model
 * @type {Model<IClient>}
 * @private
 */
export default mongoose.model<ICouter>('counter', _schema, 'counter', true);


