const Cryptography = require("../../aplication/adapters/cryptogaphy")
const Token = require("../../aplication/adapters/token")
const DatabaseAdapter = require('../../aplication/adapters/database-server')
const Cache = require('../../aplication/adapters/cache')

const crypto = new Cryptography()
const token = new Token()
const database = new DatabaseAdapter()
const cache = new Cache()

const registerRoute = async (req, res) => {
    const { email, password } = req.body

    if (await cache.get(email)) {
        return res.status(200).send({ "error": "User already registered", "cache": true})
    } else {
        const queryResult = await database.query("SELECT * FROM users WHERE email=?", [email])

        if (queryResult[0]) {
            cache.set(email, email)
            return res.status(200).send({ "error": "User already registered", "cache": false })
        }
    }

    const hashedPassword = await crypto.encryptPassword(password)
    const tokenResponse = await token.signToken({ email: email }, 3000)

    try {
        await database.query("INSERT INTO `users`(`email`, `password`) VALUES (?, ?)", [email, hashedPassword])
        res.status(200).send({ "success": "User registered", "Token": tokenResponse })
    } catch {
        res.status(400).send({ "error": "Error in database" })
    } 
}

module.exports = registerRoute