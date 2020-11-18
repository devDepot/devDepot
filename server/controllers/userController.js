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
  const { username, password, email, userType } = req.body;

  await bcrypt.hash(password, saltRounds, async (err, hash) => {
    const params = [username, hash, email];
    db.query(
      `INSERT INTO accounts (username, password, email) 
          VALUES ($1, $2, $3);`,
      params,
      (err, rows) => {
        if (err) return next(err);
      }
    );
  });
  if (userType === 'Developer') {
    const { name, stack, about, hourly_rate } = req.body;
    const params = [name, stack, about, hourly_rate, true, username];
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
    const { name, about, company } = req.body;
    const params = [name, about, company, username];
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
    const { name, about } = req.body;
    const params = [name, about, username];
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

  console.log('req body', req.body);
};

module.exports = userController;
