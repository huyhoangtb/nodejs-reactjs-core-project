import * as mongoose from 'mongoose';
import IUser from "../ientities/IUser";
import {SchemaCode} from './Schema';

const schemma = {
    ...SchemaCode,
    avatar: String,
    phone: String,
    address: String
};

/**
 * MongooseSchema
 * @type {"mongoose".Schema}
 * @private
 */
var _schema: mongoose.Schema = new mongoose.Schema(schemma);

/**
 * Mongoose.Model
 * @type {Model<IUser>}
 * @private
 */
export default mongoose.model<IUser>('user', _schema, 'user', true);


