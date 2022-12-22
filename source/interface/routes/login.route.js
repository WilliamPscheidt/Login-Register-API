const DatabaseAdapter = require('../../aplication/adapters/database-server')
const CryptographAdapter = require('../../aplication/adapters/cryptogaphy')
const TokenAdapter = require('../../aplication/adapters/token')

const database = new DatabaseAdapter()
const crypto = new CryptographAdapter()
const token = new TokenAdapter()

const loginRoute = async (req, res) => {
    const { email, password } = req.body

    await database.query("SELECT * FROM users WHERE email='" + email + "'")
        .then(async (result) => {
            if (result[0].email == email) {
                if(comparePassword = await crypto.comparePasswordAndHash(password, result[0].password)) {
                    const generatedToken = await token.signToken({"email": email}, 3000)
                    res.status(400).send({"success": "Login success", "token": generatedToken})
                } else {
                    res.status(400).send({"error": "Invalid data provided"})
                }
            } else {
                res.status(400).send({"error": "This user is not registered"})
            }
        }).catch(() => {
            res.status(400).send({"error": "We have any error in your request, try again"})
        })
}

module.exports = loginRoute
