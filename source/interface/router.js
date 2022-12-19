const router = () => {
  const HttpServerAdapter = require('../aplication/adapters/http-server')
  const DatabaseAdapter = require('../aplication/adapters/database-server')

  const configurations = require("../aplication/configurations/configurations.json")

  const statusRoute = require("./routes/status.route")
  const loginRoute = require("./routes/login.route")

  const httpServer = new HttpServerAdapter();
  const database = new DatabaseAdapter(configurations.database_connection)

  httpServer.get('/status', (req, res) => { statusRoute(res) })
  httpServer.post('/login', async (req, res) => { loginRoute(req, res, database) })

  httpServer.start()
}

module.exports = router