const LoginDataValidation = (email, password) => {
    const regexEmailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return new Promise((resolve, reject) => {

      if (!email || !password) {
        reject("You must complete all the form")
      }

      if(!email.match(regexEmailValidation)) {
        reject("Invalid email")
      }

      resolve()
    }) 
  }
  
  module.exports = LoginDataValidation