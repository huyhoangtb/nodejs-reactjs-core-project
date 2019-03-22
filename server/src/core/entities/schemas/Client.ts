import * as mongoose from 'mongoose';
import IClient from "../ientities/IClient";
import Translate from "../../i18n";

const schemma = {
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    clientId: {
        type: String,
        required: [true, Translate.use('clientId is required!!')]
    },
    clientSecret: {
        type: String,
        required: [true, Translate.use('clientSecret is required!!')]
    },
    redirectUris: [String],
    domains: [String]
}

/**
 * MongooseSchema
 * @type {"mongoose".Schema}
 * @private
 */
var _schema: mongoose.Schema = new mongoose.Schema(schemma);

/**
 * Mongoose.Model
 * @type {Model<IClient>}
 * @private
 */
export default mongoose.model<IClient>('client', _schema, 'client', true);


