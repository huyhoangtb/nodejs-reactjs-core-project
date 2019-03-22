import * as mongoose from 'mongoose';
import IEmbededUser from "../interfaces/mongo/IEmbededUser";
import IToken from "../interfaces/mongo/IToken";


/**
 * MongooseSchema
 * @type {"mongoose".Schema}
 * @private
 */
var _schema: mongoose.Schema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    accessToken: String,
    expires: Date,
    clientId: String,
    user: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            require: true
        },
        iid: {
            type: Number
        },
        displayName: {
            type: String
        },
        email: {
            type: String
        },
        avatar: {
            type: String
        },
        roles: {
            type: Array,
        },
        status: Number,
        enable2FaStatus: Number,
    },
}).pre('save', function (next) {
    const user = <IEmbededUser> this.user;
    user.password = '';
    this.user = user;
    next();
});

_schema.index({"expires": 1}, {expireAfterSeconds: 0});

/**
 * Mongoose.Model
 * @type {Model<IToken>}
 * @private
 */
export default mongoose.model<IToken>('Token', _schema, 'Tokens', true);


