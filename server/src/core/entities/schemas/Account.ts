import * as mongoose from 'mongoose';
import IAccount from "../ientities/IAccount";
import Translate from "../../i18n";
import {SchemaWithRoleAndPermission} from './Schema';
const autoIncrement = require('../plugins/Couter');

const schemma = {
    ...SchemaWithRoleAndPermission,

    userIid: {
        type: Number,
        required: [true, Translate.use('logins is required!!')]
    },
    logins: {
        type: String,
        required: [true, Translate.use('logins is required!!')]
    },
    password: {
        type: String,
        required: [true, Translate.use('password is required!!')]
    }
};
const collectionName = 'account';

/**
 * MongooseSchema
 * @type {"mongoose".Schema}
 * @private
 */
const _schema: mongoose.Schema = new mongoose.Schema(schemma);

_schema.plugin(autoIncrement.plugin, {model: collectionName, field: 'iid'});
/**
 * Mongoose.Model
 * @type {Model<IAccount>}
 * @private
 */
export default mongoose.model<IAccount>(collectionName, _schema, collectionName, true);


