const statusRoute = (req, res) => {
    res.status(200).send({"ok": "API running"})
}

module.exports = statusRoute