const { json } = require('express');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/DbModel.js');

const authController = {};

const secret = process.env.SECRET;

authController.setToken = (req, res, next) => {
  //expiresIn is currently set to 60 seconds for testing
  const { username } = req.body;
  if (req.body.user_type) {
    const user_type = req.body.user_type;
    const token = jwt.sign({ username, user_type }, secret, {
      expiresIn: 60,
    });
    res.locals.token = token;
  } else {
    const user_type = req.body.user_type;
    const token = jwt.sign({ username, user_type }, secret, {
      expiresIn: 60,
    });
    res.locals.token = token;
  }

  return next();
};

authController.isLoggedIn = (req, res, next) => {
  //check if devdepot_session exists - if not the return false(not logged in)
  //to frontend
  //if exists, verify

  //TODO: frontend wants to be sent username, isDevUser, is_logged_in
  const token = req.cookies; //TODO: what does req.cookies look like
  console.log('req.cookies', req.cookies);
  //IN HEADERS
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      res.locals.is_logged_in = false;
      return next();
    } else {
      res.locals.is_logged_in = true;
      //query db with decoded user id and get user info to send to front end
      //   db.query('SELECT ;')
      console.log('this is decoded', decoded);
      return next();
    }
  });
};

authController.logIn = async (req, res, next) => {
  //select password where username is inputted username
  //use bcrypt.compare against result
  //bcrypt.compare(my plaintext password)
  console.log('req.body', req.body);
  const { username, password } = req.body;
  const params = [username];

  db.query(
    `SELECT password, is_dev FROM accounts WHERE username = $1;`,
    params,
    (err, result) => {
      if (err) return next(err);
      const hash = result.rows[0].password;
      const is_dev = result.rows[0].is_dev;
      bcrypt.compare(password, hash, (err, result) => {
        if (err) return next(err);
        if (result && is_dev) {
          res.locals.user_type = 'Developer';
          return next();
        } else {
          res.locals.user_type = 'Employer';
          return next();
        }
      });
    }
  );
};

module.exports = authController;
