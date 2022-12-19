const Cryptography = require('../cryptogaphy')

describe("Cryptography", () => {  
    it("Hash password", async () => {
        const cryptography = new Cryptography()

        const password = 'mypassword';
        const hash = await cryptography.encryptPassword(password);
    
        expect(hash).toMatch(/^\$2[ayb]\$.{56}$/);
    })

    it("should return true if the password and hash match", async () => {
        const cryptography = new Cryptography();

        const password = 'mypassword';
        const hash = await cryptography.encryptPassword(password);
    
        const isMatch = await cryptography.comparePasswordAndHash(password, hash);
    
        expect(isMatch).toBe(true);
    })

    it("should return false if the password and hash do not match", async () => {
        const cryptography = new Cryptography();

        const password = 'mypassword';
        const hash = await cryptography.encryptPassword(password);
    
        const isMatch = await cryptography.comparePasswordAndHash('incorrectpassword', hash);
    
        expect(isMatch).toBe(false);
    })
})