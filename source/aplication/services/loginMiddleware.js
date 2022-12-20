const LoginDataValidation = require("../useCases/loginDataValidation")

const loginMiddleware = async (req, res, next) => {
    const { email, password } = req.body
    
    try {
        await LoginDataValidation(email, password)
    } catch (error) {
        res.status(400).send({"error": error })
        return
    }

    next()
  }

module.exports = loginMiddleware