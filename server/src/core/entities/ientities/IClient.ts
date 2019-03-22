import * as mongoose from 'mongoose';

export default interface IClient extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId,
    clientId: string,
    clientSecret: string,
    redirectUris: [string],
    domains: [string]
}
