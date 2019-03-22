import * as mongoose from 'mongoose';

export default interface IFile extends mongoose.Document {
    _id: String,
    iid: number,
    filename: String,
    size: number,
    url: String
}
