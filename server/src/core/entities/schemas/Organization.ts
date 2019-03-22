import * as mongoose from 'mongoose';
import IAccount from "../ientities/IAccount";
import {SchemaCodeWithRoleAndPermission} from './Schema';
import Translate from "../../i18n";

const schemma = {
    ...SchemaCodeWithRoleAndPermission,
    path: {
        type: String,
        required: [true, Translate.use('path is required!!')]
    },
    avatar: String,
    children: [Number]
}

/**
 * MongooseSchema
 * @type {"mongoose".Schema}
 * @private
 */
var _schema: mongoose.Schema = new mongoose.Schema(schemma);

/**
 * Mongoose.Model
 * @type {Model<IAccount>}
 * @private
 */
export default mongoose.model<IAccount>('account', _schema, 'account', true);


