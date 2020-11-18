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

userController.createUser = (req, res, next) => {
  const {
    name,
    email,
    username,
    password,
    techStack,
    hourlyRate,
    about,
    userType,
  } = req.body;

  bcrypt.hash(password, saltRounds, async (err, hash) => {
    console.log('hash', typeof hash);
    const params = [username, hash, email];
    const id = await db.query(
      'INSERT INTO accounts (username, password, email) VALUES ($1, $2, $3);',
      params,
      (err, rows) => {
        if (err) return next(err);
        console.log('rows?', rows);
      }
    );
  });

  console.log('req body', req.body);
};

module.exports = userController;
