import * as mongoose from 'mongoose';
import IUser from "../interfaces/mongo/IUser";
import MongoDB from "../../core/connections/mongodb/index";

export const Status = {
    ACTIVE: 1,
    INACTIVE: 0,
    CLOSE: -1
}


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
    iid: {
        type: Number
    },
    displayName: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    avatar: {
        type: String
    },
    status: Number,
    totalBuyingTrans: Number,
    totalSuccessBuyingTrans: Number,
    totalSellingTrans: Number,
    totalSuccessSellingTrans: Number,
    enable2FaStatus: Number,
    twoFaSecret: {
        ascii: String,
        hex: String,
        base32: String,
        otpauth_url: String,
    },
    roles: Array,
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
}).pre('save', function (next) {
    this.updated = new Date();

    if (!this.created) {
        this.created = new Date();
    }
    next();
}).post('save', function (doc, next) {
    console.log('post', doc);
    // next();
});
//     .post('create', function (next) {
//     console.log(next, this);
//     Cache.cache(this);
//     next();
// });

// _schema.addPostCreate(function (user, cb) {

const autoIncrement = MongoDB.getAutoIncrement() || {plugin: Object};

_schema.plugin(autoIncrement.plugin, {model: 'User', field: 'iid'});

/**
 * Mongoose.Model
 * @type {Model<IUser>}
 * @private
 */
export default mongoose.model<IUser>('User', _schema, 'User', true);


