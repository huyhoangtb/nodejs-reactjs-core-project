import IEntity from "./ientities/base/IEntity";
import * as mongoose from "mongoose";

export default class EntityPermissionRole {
    permissions: [number];
    roles: [number];

    protected _entity: IEntity;

    constructor(entity: IEntity) {
        this._entity = entity;
    }

    set _id(value: { type: mongoose.Schema.Types.ObjectId, require: true }) {
        this._entity._id = value;
    }

    set iid(value: number) {
        this._entity.iid = value;
    }

    set name(value: string) {
        this._entity.name = value;
    }

    set code(value: string) {
        this._entity.code = value;
    }

    set status(value: number) {
        this._entity.status = value;
    }

    set createdDate(value: Date) {
        this._entity.createdDate = value;
    }

    set updatedDate(value: Date) {
        this._entity.updatedDate = value;
    }

    get _id(): { type: mongoose.Schema.Types.ObjectId, require: true } {
        return this._entity._id;
    }

    get iid(): number {
        return this._entity.iid;
    }

    get name(): string {
        return this._entity.name;
    }

    get code(): string {
        return this._entity.code;
    }

    get status(): number {
        return this._entity.status;
    }

    get createdDate(): Date {
        return this._entity.createdDate;
    }

    get updatedDate(): Date {
        return this._entity.updatedDate;
    }
}
