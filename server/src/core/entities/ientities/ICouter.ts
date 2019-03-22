import * as mongoose from 'mongoose';

export default interface ICouter extends mongoose.Document {
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    entity: string,
    field: string,
    count: number
}
