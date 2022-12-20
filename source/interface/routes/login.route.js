const sendResponse = require("../../aplication/utils/sendResponseInRoutes")
const LoginDataValidation = require("../../aplication/useCases/loginDataValidation")
const DatabaseAdapter = require('../../aplication/adapters/database-server')

const database = new DatabaseAdapter()

const loginRoute = async (req, res) => {
    const { email, password } = req.body

    console.log("Oi")

    await database.query("SELECT * FROM users WHERE email='" + email + "'")
        .then((result) => {
            if (result[0].email == email) {
                sendResponse(res, { "Ok": "Ok" }, 400)
            } else {
                sendResponse(res, { "error": "This user doesen't is registered" }, 400)
            }
        }).catch(() => {
            sendResponse(res, { "error": "We have any error in your request, try again" }, 400)
        })
}

module.exports = loginRoute
