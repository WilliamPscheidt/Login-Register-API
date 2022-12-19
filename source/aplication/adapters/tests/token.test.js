const Token = require('../token')

describe("Token system", () => {

    it("Token generate test", async () => {
        const token = new Token()
        const generatedToken = await token.signToken({"token": "test generated"}, 3000)

        expect(generatedToken).toMatch(/^[\w-]+\.[\w-]+\.[\w-]+$/)
    })

    it("Token verify test", async () => {
        const token = new Token()
        const generatedToken = await token.signToken({"token": "test generated"}, 3000)
        const verifyToken = await token.verifyToken(generatedToken)
        expect(verifyToken).toBe(true)
    })

})