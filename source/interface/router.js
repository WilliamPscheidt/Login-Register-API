const router = () => {
  const HttpServerAdapter = require('../aplication/adapters/http-server')

  const statusRoute = require("./routes/status.route")
  const loginRoute = require("./routes/login.route")
  const registerRoute = require("./routes/register.route")

  const registerMiddleWare = require("../aplication/services/registerMiddleware")
  const loginMiddleware = require("../aplication/services/loginMiddleware")

  const httpServer = new HttpServerAdapter();

  httpServer.get('/api/status', statusRoute)

  httpServer.use('/account/login', loginMiddleware)
  httpServer.post('/account/login', loginRoute)

  httpServer.use('/account/register', registerMiddleWare)
  httpServer.post('/account/register', registerRoute)

  httpServer.start()
}

module.exports = router