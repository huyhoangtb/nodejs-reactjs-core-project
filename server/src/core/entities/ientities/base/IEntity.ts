import {Document, Schema} from 'mongoose';

export default interface IEntity extends Document  {
    _id: {
        type: Schema.Types.ObjectId,
        require: true
    };
    iid: number;
    name: string;
    code: string;
    status: number,
    createdDate: Date;
    updatedDate: Date;
}
