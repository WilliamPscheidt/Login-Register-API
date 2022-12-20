const registerDataValidation = require("../useCases/registerDataValidation")

const registerMiddleWare = async (req, res, next) => {
    const {email, password, repeatPassword} = req.body
    
    try {
      await registerDataValidation(email, password, repeatPassword)
    } catch (error) {
      res.status(400).send({"Error": error })
      return
    }

    next()
  }

module.exports = registerMiddleWare