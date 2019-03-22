import * as mongoose from 'mongoose';
import IUser from "../ientities/IUser";
import {SchemaCode} from './Schema';
import Translate from "../../i18n";

const schemma = {
    ...SchemaCode,
    domain: {
        type: String,
        required: [true, Translate.use('domain is required!!')]
    },
    orgIid: {
        type: Number,
        required: [true, Translate.use('organization is required!!')]
    },
    favicon: String
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
export default mongoose.model<IUser>('domain', _schema, 'domain', true);


