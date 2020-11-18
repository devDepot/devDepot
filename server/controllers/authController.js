const { json } = require('express');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/DbModel.js');

const authController = {};

const secret = process.env.SECRET;

authController.setToken = (req, res, next) => {
  //expiresIn is currently set to 60 seconds for testing
  const { username, userType } = req.body;
  const token = jwt.sign({ username, userType }, secret, {
    expiresIn: 60,
  });

  res.locals.token = token;

  return next();
};

authController.isLoggedIn = (req, res, next) => {
  //check if devdepot_session exists - if not the return false(not logged in)
  //to frontend
  //if exists, verify

  //TODO: frontend wants to be sent username, isDevUser, isLoggedIn
  const token = req.cookies; //TODO: what does req.cookies look like
  console.log('req.cookies', req.cookies);

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      res.locals.isLoggedIn = false;
      return next();
    } else {
      res.locals.isLoggedIn = true;
      //query db with decoded user id and get user info to send to front end
      //   db.query('SELECT ;')
      console.log('this is decoded', decoded);
      return next();
    }
  });
};

authController.logIn = (req, res, next) => {
  //select password where username is inputted username
  //use bcrypt.compare against result
  //bcrypt.compare(my plaintext password)
  console.log('req.body', req.body);
  const params = [req.body.username];

  db.query(
    'SELECT password FROM accounts WHERE username = $1',
    params,
    (err, rows) => {
      if (err) return next(err);
      console.log('ROWSS login', rows);
    }
  );
};

module.exports = authController;
