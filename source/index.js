const router = require('./interface/router')
router()

const teste = async () => {
    const Mailer = require("./aplication/adapters/mailer")
    const mailer = new Mailer(true) // Testmode true
    console.log(await mailer.sendMail("teste@bombeirosvoluntarios.top", "teste@bombeirosvoluntarios.top", "ABCDE484DSA4", "ABCDE484DSA4", "<h1>Teste</h1>"))
}

teste()