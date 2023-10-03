const express = require('express');
const db = require('./config/database.js');
const Users = require('./models/UserModel.js');
const router = require('./routes/index.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const FileUpload = require('express-fileupload');
require('dotenv').config();

const app = express();

(async () => {
  try {
    await db.authenticate();
    console.log('databse connected');

    await db.sync();
    await Users.sync();
  } catch (error) {
    console.error(error);
  }
})();

app.use(cors({ origin: process.env.ORIGIN_DOMAIN, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(router);

app.listen(5000, () => {
  console.log('server at running');
});
