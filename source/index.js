const router = require('./interface/router')
router()

const Cache = require('../source/aplication/adapters/cache')
const cache = new Cache()