const db = require('../models/DbModel.js');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const userController = {};

// userController./*POST*/ = async (req,res,next) => {
//     try {

//         const username = req.body.username;
//         const password = req.body.password;
//         const email = req.body.email;
//         const session = req.body.session;
//         const userType = req.body.userType;

//         // const query = `INSERT `

//     } catch(err) {
//         return next(err);
//     }
// }

userController.createUser = async (req, res, next) => {
  const { name, username, password, email, user_type } = req.body;
  const is_dev = user_type === 'Developer' ? true : false;

  await bcrypt.hash(password, saltRounds, async (err, hash) => {
    const params = [username, hash, email, is_dev];
    db.query(
      `INSERT INTO accounts (username, password, email, is_dev) 
          VALUES ($1, $2, $3, 4);`,
      params,
      (err, rows) => {
        if (err) return next(err);
      }
    );
  });
  if (is_dev) {
    const { stack, about, hourly_rate } = req.body;
    const params = [stack, about, hourly_rate, true, username];
    db.query(
      `INSERT INTO developers 
    (name, 
    stack,
    about,
    hourly_rate,
    active,
    account_id) VALUES 
    ($1, $2, $3, $4, $5, 
    (SELECT _id FROM accounts WHERE username = $6));`,
      params,
      (err, rows) => {
        if (err) return next(err);
        return next();
      }
    );
  } else if (req.body.company) {
    const { about, company } = req.body;
    const params = [about, company, username];
    db.query(
      `INSERT INTO employers 
    (name, 
    about,
    company,
    account_id) VALUES 
    ($1, $2, $3, 
    (SELECT _id FROM accounts WHERE username = $4));`,
      params,
      (err, rows) => {
        if (err) return next(err);
        return next();
      }
    );
  } else {
    const { about } = req.body;
    const params = [about, username];
    db.query(
      `INSERT INTO employers 
    (name, 
    about,
    account_id) VALUES 
    ($1, $2, 
    (SELECT _id FROM accounts WHERE username = $3));`,
      params,
      (err, rows) => {
        if (err) return next(err);
        return next();
      }
    );
  }
};

module.exports = userController;
