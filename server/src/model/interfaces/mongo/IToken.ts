import * as mongoose from 'mongoose';
import IEmbededUser from "./IEmbededUser";

export default interface IToken extends mongoose.Document {
    _id: String,
    accessToken: String,
    expires: Date,
    clientId: String,
    user: IEmbededUser
}
