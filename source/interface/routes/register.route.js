const sendResponse = require("../../aplication/utils/sendResponseInRoutes")
const registerDataValidation = require("../../aplication/useCases/registerDataValidation")
const Cryptography = require("../../aplication/adapters/cryptogaphy")
const Token = require("../../aplication/adapters/token")

const crypto = new Cryptography()
const token = new Token()

const registerRoute = async (req, res, database) => {
    const {email, password, repeatPassword} = req.body

    try {
        await registerDataValidation(email, password, repeatPassword)
    } catch (error) {
        sendResponse(res, {"Error": error}, 200)
        return
    }

    const userAlreadyExists = await database.select("SELECT * FROM users WHERE email='" + email + "'")
    .then((result) => {
        if(result[0]) {
            sendResponse(res, {"Error": "User already registered"}, 200)
        } else {
            return false
        }
    }).catch(() => {
        sendResponse(res, {"Error": "Error in database query"}, 200)
    })

    if (userAlreadyExists == false) {
        const hashedPassword = await crypto.encryptPassword(password)
        const tokenResponse = await token.signToken({email: email}, 3000)
        await database.insert("INSERT INTO `users`(`email`, `password`) VALUES ('"+email+"','"+hashedPassword+"')")
        .then((success) => {
            sendResponse(res, {"Success": "User registered", "Token": tokenResponse}, 200)
        }).catch((error) => {
            sendResponse(res, {"error": "Error in database"}, 200)
        })
    }
}

module.exports = registerRoute