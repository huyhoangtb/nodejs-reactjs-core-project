import * as mongoose from 'mongoose';
import IToken from "../ientities/IToken";
import Translate from "../../i18n";

const schemma = {
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    accessToken: {
        type: String,
        required: [true, Translate.use('accessToken is required!!')]
    },
    expires: {
        type: Date,
        required: [true, Translate.use('expires is required!!')]
    },
    clientId: {
        type: String,
        required: [true, Translate.use('clientId is required!!')]
    },
    userIid: {
        type: Number,
        required: [true, Translate.use('userIid is required!!')]
    }
}

/**
 * MongooseSchema
 * @type {"mongoose".Schema}
 * @private
 */
var _schema: mongoose.Schema = new mongoose.Schema(schemma);

/**
 * Mongoose.Model
 * @type {Model<IToken>}
 * @private
 */
export default mongoose.model<IToken>('token', _schema, 'token', true);


