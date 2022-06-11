const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "fa36338ef5fb62",
    pass: "cd4b764b171eec"
  }
});
