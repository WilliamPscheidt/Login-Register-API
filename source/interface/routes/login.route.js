const sendResponse = require("../../aplication/utils/sendResponseInRoutes")
const LoginDataValidation = require("../../aplication/useCases/loginDataValidation")

const loginRoute = async (req, res, database) => {
    const { email, password } = req.body

    try {
        await LoginDataValidation(email, password)
    } catch (error) {
        sendResponse(res, { "error": error }, 400)
        return
    }

    await database.select("SELECT * FROM users WHERE email='" + email + "'")
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
