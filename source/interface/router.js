const router = () => {
  const HttpServerAdapter = require('../aplication/adapters/http-server')
  const DatabaseAdapter = require('../aplication/adapters/database-server')

  const sendResponse = require("../aplication/utils/sendResponseInRoutes")

  const LoginDataValidation = require("../aplication/useCases/loginDataValidation")

  const httpServer = new HttpServerAdapter();

  const Database = new DatabaseAdapter({
    host: "localhost",
    user: "root",
    password: "",
    database: "cars-center"
  });

  httpServer.get('/status', (req, res) => {
    sendResponse(res, {"ok": "API running"}, 200)
  })

  httpServer.post('/login', async (req, res) => {
    const {email, password} = req.body
  
    try {
      await LoginDataValidation(email, password)
    } catch (error) {
      sendResponse(res, {"error": error}, 400)
      return
    }
    
    await Database.select("SELECT * FROM users WHERE email='"+email+"'")
      .then((result) => {
        if(result[0].email == email) {
          sendResponse(res, {"Ok": "Ok"}, 400)
        } else {
          sendResponse(res, {"error": "This user doesen't is registered"}, 400)
        }
      }).catch(() => {
        sendResponse(res, {"error": "We have any error in your request, try again"}, 400)
      })
  })

  httpServer.start()
}

module.exports = router