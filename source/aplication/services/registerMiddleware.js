const registerDataValidation = require("../useCases/registerDataValidation")
const sendResponse = require("../utils/sendResponseInRoutes")

const registerMiddleWare = async (req, res, next) => {
    const {email, password, repeatPassword} = req.body
    
    try {
      await registerDataValidation(email, password, repeatPassword)
    } catch (error) {
      sendResponse(res, { "Error": error }, 200)
      return
    }

    next()
  }

module.exports = registerMiddleWare