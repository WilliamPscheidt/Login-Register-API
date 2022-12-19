const nodemailer = require("nodemailer")
const authentication_data = require("../../authentication-private/authentication-data.json")

class Mailer {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: authentication_data.authentication_data_email.host,
            port: authentication_data.authentication_data_email.port,
            secure: authentication_data.authentication_data_email.secure,
            auth: {
                user: authentication_data.authentication_data_email.user,
                pass: authentication_data.authentication_data_email.password,
            },
        });
    }

    async sendMail(from, to, subject, text, html) {
        try {
            await this.transporter.sendMail({
            from: from,
            to: to,
            subject: subject,
            text: text,
            html: html,
        });
            return true
        } catch (error) {
            return false
        }
    }
}

module.exports = Mailer