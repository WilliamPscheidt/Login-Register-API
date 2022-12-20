const sendResponse = require("../../aplication/utils/sendResponseInRoutes")

const statusRoute = (req, res) => {
    sendResponse(res, {"ok": "API running"}, 200)
}

module.exports = statusRoute