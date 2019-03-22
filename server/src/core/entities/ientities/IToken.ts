import * as mongoose from 'mongoose';
import Account from "../schemas/Account";
import IClient from "./IClient";
import IUser from "./IUser";

export default interface IToken extends mongoose.Document {
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    accessToken: string,
    accessTokenExpiresOn: Date,
    clientId: string,
    client : IClient,
    refreshToken : { type: String },
    refreshTokenExpiresOn : { type: Date },
    user : IUser,
    userId: number
}
