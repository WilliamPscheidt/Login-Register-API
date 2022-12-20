const LoginDataValidation = require("../useCases/loginDataValidation")
const sendResponse = require("../utils/sendResponseInRoutes")

const loginMiddleware = async (req, res, next) => {
    const { email, password } = req.body
    
    try {
        await LoginDataValidation(email, password)
    } catch (error) {
        sendResponse(res, { "error": error }, 400)
        return
    }

    next()
  }

module.exports = loginMiddleware