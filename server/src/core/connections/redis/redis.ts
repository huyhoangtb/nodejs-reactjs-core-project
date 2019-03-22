import RedisConfigs from "./RedisConfigs";

var redis = require('redis');

export default class RedisClient {
    public static initConnection() {

        const redisClient = redis.createClient({host: RedisConfigs.HOST, port: RedisConfigs.PORT});
        redisClient.on('ready', function () {
            console.log("Redis is ready");
        });

        redisClient.on('error', function () {
            console.log("Error in Redis");
        });
        return redisClient;
    }
}
