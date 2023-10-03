require('dotenv').config();
const Sequelize = require('sequelize');

// di intregasikan lewat cloud mysql -- FreeSQLdatabase
// more detail -- acount survingtesting@gmail.com
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB,
  dialectModule: require('mysql2'),
  port: process.env.DB_PORT,
});

// console.log({
//   name: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   pass: process.env.DB_PASS,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   db: process.env.DB,
// });

module.exports = db;
