const registerDataValidation = (email, password, repeatPassword) => {
    const regexEmailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const regexValidatePasswordSecurity = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    return new Promise((resolve, reject) => {

      if (!email || !password || !repeatPassword) {
        reject("You must complete all the form")
      }

      if(!email.match(regexEmailValidation)) {
        reject("Invalid email")
      }

      if(password != repeatPassword) {
        reject("The passwords need to be the same")
      }

      if(!password.match(regexValidatePasswordSecurity)) {
        reject("Your password must contain at least 8 characters long, at least one lowercase letter (a-z), at least one uppercase letter (A-Z), at least one digit (0-9) and at least one special character (@$!%*?&)")
      }

      resolve()
    }) 
  }
  
  module.exports = registerDataValidation