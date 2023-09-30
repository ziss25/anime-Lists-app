import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();

// di intregasikan lewat cloud mysql -- FreeSQLdatabase
// more detail -- acount survingtesting@gmail.com
// const db = new Sequelize('bapu8xktpif6wk3hyqdu', 'u78nlyfyynasja4h', 'qTYCEXrOLtWUGP9sIH2g', {
//   host: 'bapu8xktpif6wk3hyqdu-mysql.services.clever-cloud.com',
//   dialect: 'mysql',
//   port: 3306,
// });

// const db = new Sequelize('auth_db', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306,
// });

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB,
  port: 3306,
});

export default db;
