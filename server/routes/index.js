// import express from 'express';
// import {
//   getUser, //
//   Register,
//   Login,
//   Logout,
//   updateProfileAvatar,
//   updatename,
//   updateDescription,
// } from '../controller/Users.js';
// import { verifyToken } from '../middleware/VerifyToken.js';
// import { refreshToken } from '../controller/refreshToken.js';

const express = require('express');
const verifyToken = require('../middleware/VerifyToken.js');
const refreshToken = require('../controller/refreshToken.js');
const getUser = require('../controller/Users.js');
const Register = require('../controller/Users.js');
const Login = require('../controller/Users.js');
const Logout = require('../controller/Users.js');
const updateProfileAvatar = require('../controller/Users.js');
const updatename = require('../controller/Users.js');
const updateDescription = require('../controller/Users.js');

const router = express.Router();

router.get('/users', verifyToken, getUser);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.patch('/users/avatar/:id', updateProfileAvatar);
router.patch('/users/username/:id', updatename);
router.patch('/users/description/:id', updateDescription);

module.exports = router;
