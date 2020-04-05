require("dotenv").config()
const config = {
    databaseURL: process.env.DATABASE,
    mail: process.env.MAIL
}

// if (process.env.NODE_ENV !== 'production') require('dotenv').config()
// // const dotenv = require("dotenv").config()
// const config = {
//     // databaseURL: "mongodb+srv://Adam:King10Kong@cluster0-mqceb.mongodb.net/testlogin",
//     // mail: "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"
//     mail: process.env.MAIL,
//     // Rakibs nyckel till sendgrid vi fixar en egen sen
//     databaseURL: process.env.DATABASE
// }

module.exports = config;
