import {Document} from "mongoose";

export interface IRead<T> {
    findAll: () => Promise<Document[]>;
    findById: (id: String) => Promise<T>;
    findByIid: (id: Number) => Promise<T>;
    findOne(cond?: Object): Promise<T>;
    find(cond: Object, options: Object): Promise<Document[]>;
}
