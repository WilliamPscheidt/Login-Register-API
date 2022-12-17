const LoginDataValidation = require('../loginDataValidation');

describe('LoginDataValidation', () => {
    it('should throw an error if email and password are not provided', () => {
        return LoginDataValidation()
            .catch((error) => {
                expect(error).toEqual('You must complete all the form');
            });
    });

    it('should throw an error if email and password are not provided', () => {
        return LoginDataValidation('invalid', 'password')
            .catch((error) => {
                expect(error).toEqual('Invalid email');
            });
    });

    it('should resolve if email and password are valid', async () => {
        await expect(LoginDataValidation('valid@email.com', 'password')).resolves.toBeUndefined();
    });
});