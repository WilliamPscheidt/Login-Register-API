const jwt = require('jsonwebtoken')

class Token {
    constructor() {
        this.tokenPassword = "F%J$qxLFn1S&!!8O1c7T*8Unhx%gGQS%AQZq*#FDvP4r#bE%Ey"
    }

    async signToken(object, expires) {
        return await jwt.sign(object, this.tokenPassword, {
            expiresIn: expires,
        });
    }

    async verifyToken(token) {
        await jwt.verify(token, this.tokenPassword, (err, decoded) => {
            if(err) {
                return false
            }

            if(decoded) {
                return true
            }
        })
    }
}

module.exports = Token