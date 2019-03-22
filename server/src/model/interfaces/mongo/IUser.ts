import * as mongoose from 'mongoose';

export default interface IUser extends mongoose.Document {
    id: string;
    username: string;
    password: string;
    fullName: string;
    birthday: Date;
    email: string;
    displayName: string;
    oldPassword: string;
    repassword: string;
    recaptcha: string;
    avatar: string;
    roles: Array<string>,
    status: number;
    enable2FaStatus: number;
    created: Date;
    updated: Date;
    createUserId: number;
}
