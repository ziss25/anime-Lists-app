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
const user = require('../controller/Users.js');

const {
  getUser, //
  Register,
  Login,
  Logout,
  updateProfileAvatar,
  updatename,
  updateDescription,
} = user;

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
