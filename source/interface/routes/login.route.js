const DatabaseAdapter = require('../../aplication/adapters/database-server')
const database = new DatabaseAdapter()

const loginRoute = async (req, res) => {
    const { email, password } = req.body

    await database.query("SELECT * FROM users WHERE email='" + email + "'")
        .then((result) => {
            if (result[0].email == email) {
                res.status(200).send({ "Ok": "Ok" })
            } else {
                res.status(400).send({"error": "This user doesen't is registered"})
            }
        }).catch(() => {
            res.status(400).send({"error": "We have any error in your request, try again"})
        })
}

module.exports = loginRoute
