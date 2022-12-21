const redis = require('redis')

class Cache {
    constructor() {
        this.redisClient = redis.createClient();

        this.redisClient.on("error", (error) => console.error(`Error : ${error}`));
      
        this.redisClient.connect();
    }

    async get (key) {
        return await this.redisClient.get(key)
    }

    async set (value, key) {
        return await this.redisClient.set(value, key)
    }
}

module.exports = Cache