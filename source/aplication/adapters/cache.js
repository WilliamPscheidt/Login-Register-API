const redis = require('redis')

class Cache {
    constructor() {
        this.redisClient = redis.createClient();

        this.redisClient.on("error", (error) => console.error(`[-] Redis error : ${error}`));
        this.redisClient.on("connect", (connect) => console.error(`[+] Redis online`));
      
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