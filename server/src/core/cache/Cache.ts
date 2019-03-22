import RedisClient from "../database/redis/redis";

export default class Cache {
    public static cache(document) {
        RedisClient.initConnection().set('rrrrrrrrrrrrrrrrr', document);
    }
}
