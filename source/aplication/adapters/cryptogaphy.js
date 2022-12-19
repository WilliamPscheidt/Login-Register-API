const bcrypt = require('bcrypt')

class Cryptography {
    constructor() {
        this.saltRounds = 10
    }

    async encryptPassword(password) {
        const encryptedPassword = await bcrypt.hash(password, this.saltRounds);
        return encryptedPassword
    }

    async comparePasswordAndHash(password, hash) {
        const comparePasswordAndHash = await bcrypt.compare(password, hash);
        return comparePasswordAndHash
    }
}

module.exports = Cryptography