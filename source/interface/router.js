const router = () => {
  const HttpServerAdapter = require('../aplication/adapters/http-server')
  const DatabaseAdapter = require('../aplication/adapters/database-server')

  const configurations = require("../aplication/configurations/configurations.json")

  const statusRoute = require("./routes/status.route")
  const loginRoute = require("./routes/login.route")
  const registerRoute = require("./routes/register.route")

  const httpServer = new HttpServerAdapter();
  const database = new DatabaseAdapter(configurations.database_connection)

  httpServer.get('/api/status', (req, res) => { statusRoute(res) })
  httpServer.post('/account/login', async (req, res) => { loginRoute(req, res, database) })
  httpServer.post('/account/register', async (req, res) => { registerRoute(req, res, database) })

  httpServer.start()
}

module.exports = router