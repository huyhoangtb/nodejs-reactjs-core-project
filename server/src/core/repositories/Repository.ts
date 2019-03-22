import {IRead} from "./interfaces/IRead";
import {IWrite} from "./interfaces/IWrite";
import {Document, Model, Types} from 'mongoose';

export class Repository<T extends Document> implements IRead<T>, IWrite<T> {
    private _model: Model<Document>;

    constructor(schemaModel: Model<Document>) {
        this._model = schemaModel;
    }

    /**
     * new a document by Iid
     *
     * @param {T} item
     * @returns {Promise<"mongoose".Document>}
     */
    create(item: T): Promise<Document> {
        return this._model.create(item);
    }

    /**
     * delete a document by id
     *
     * @param {string} _id
     * @returns {Promise<void>}
     */
    deleteById(_id: string): Promise<void> {
        const condition = {_id: this.toObjectId(_id)};
        const query = this._model.remove(condition);
        return query.exec();
    }

    /**
     * update a document by id
     *
     * @param {"mongoose".Types.ObjectId} _id
     * @param {T} item
     * @returns {Promise<T extends "mongoose".Document>}
     */
    async updateById(_id: Types.ObjectId, item: T): Promise<T> {
        return await this._model.update({_id: _id}, item);
    }

    /**
     * delete a document by Iid
     *
     * @param {Number} iid
     * @returns {Promise<void>}
     */
    deleteByIid(iid: Number): Promise<void> {
        const query = this._model.remove({iid});
        return query.exec();
    }

    /**
     * update document by Iid
     *
     * @param {Number} iid
     * @param {T} item
     * @returns {Promise<T extends "mongoose".Document>}
     */
    async updateByIid(iid: Number, item: T): Promise<T> {
        return await this._model.update({iid}, item);
    }

    /**
     * find all documents
     *
     * @returns {Promise<"mongoose".Document[]>}
     */
    async findAll() : Promise<Document[]> {
        const r =  this._model.find({});
        return await r.exec();

    }

    /**
     * find a document by id
     *
     * @param {String} _id
     * @returns {Promise<any>}
     */
    async findById(_id: String): Promise<any> {
        const r = this._model.findById(_id);
        return await r.exec();
    };

    /**
     * find a document by iid
     *
     * @param {Number} iid
     * @returns {Promise<any>}
     */
    async findByIid(iid: Number): Promise<any> {
        const r = this._model.findOne({iid});
        return await r.exec();
    };

    /**
     * find a document by conditions
     *
     * @param {Object} cond
     * @returns {Promise<any>}
     */
    async findOne(cond?: Object): Promise<any> {
        const r = this._model.findOne(cond);
        return await r.exec();
    };

    /**
     * find documents by conditions
     *
     * @param {Object} cond
     * @returns {Promise<"mongoose".Document[]>}
     */
    async find(cond?: Object): Promise<Document[]> {
        const r = this._model.find(cond);
        return await r.exec();
    };

    toObjectId(_id: string): Types.ObjectId {
        return Types.ObjectId.createFromHexString(_id);
    }
}
