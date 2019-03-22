import * as mongoose from 'mongoose';

export default interface IEmbededUser extends mongoose.Document {
    _id: string;
    iid: number,
    username: string;
    password: string;
    repassword: string;
    oldPassword: string;
    recaptcha: string;
    email: string;
    displayName: string;
    avatar: string;
    status: number;
    created: Date;
    updated: Date;
}
