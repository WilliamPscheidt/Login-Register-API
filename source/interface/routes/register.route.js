const Cryptography = require("../../aplication/adapters/cryptogaphy")
const Token = require("../../aplication/adapters/token")
const DatabaseAdapter = require('../../aplication/adapters/database-server')

const crypto = new Cryptography()
const token = new Token()
const database = new DatabaseAdapter()

const registerRoute = async (req, res) => {
    const {email, password} = req.body

    const userAlreadyExists = await database.query("SELECT * FROM users WHERE email=?",[email])
    .then((result) => {
        if(result[0]) {
            res.status(200).send({"error": "User already registered"})
        } else {
            return false
        }
    }).catch(() => {
        res.status(400).send({"error": "Error in database query"})
    })

    if (userAlreadyExists == false) {
        const hashedPassword = await crypto.encryptPassword(password)
        const tokenResponse = await token.signToken({email: email}, 3000)
        await database.query("INSERT INTO `users`(`email`, `password`) VALUES (?, ?)",[email, hashedPassword])
        .then(() => {
            res.status(200).send({"success": "User registered", "Token": tokenResponse})
        }).catch(() => {
            res.status(400).send({"error": "Error in database"})
        })
    }
}

module.exports = registerRoute