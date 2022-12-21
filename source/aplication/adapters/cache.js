const redis = require('redis')

class Cache {
    constructor() {
        this.redisClient = redis.createClient();

        this.redisClient.on("error", (error) => console.error(`Error : ${error}`));
      
        this.redisClient.connect();
    }

    get (key) {
        return this.redisClient.get(key)
    }

    set (value, key) {
        return this.redisClient.set(value, key)
    }
}

module.exports = Cache