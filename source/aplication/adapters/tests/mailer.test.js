const Mailer = require("../mailer")

describe("Mailer system", () => {

    it("Sendmail method test", async () => {
        const mailer = new Mailer()
        const getResultOfSendMail = await mailer.sendMail("teste@bombeirosvoluntarios.top", "williampscheidt@hotmail.com", "ABCDE484DSA4", "ABCDE484DSA4", "<h1>Teste</h1>")
        expect(getResultOfSendMail).toBe(true)
    })

})