const sendResponse = (res, object, status) => {
    res.status(status).send(object);
}

module.exports = sendResponse