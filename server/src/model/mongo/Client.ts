import * as mongoose from 'mongoose';
import IClient from "../../core/entities/ientities/IClient";

/**
 * MongooseSchema
 * @type {"mongoose".Schema}
 * @private
 */
var _schema: mongoose.Schema = new mongoose.Schema(IClient);

/**
 * Mongoose.Model
 * @type {Model<IClient>}
 * @private
 */
export default mongoose.model<IClient>('Client', _schema, 'Clients', true);


