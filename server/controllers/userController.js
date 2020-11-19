const bcrypt = require('bcrypt');
const db = require('../models/DbModel.js');

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
  const { name, username, password, email, user_type, about } = req.body;
  console.log('req.body: ', req.body)
  const is_dev = user_type === 'Developer' ? true : false;
  await bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (is_dev){
      const {stack, hourly_rate, active} = req.body
      const image = req.body.image ? req.body.image : null;
      console.log('image', image)
      const params = [name, username, hash, email, is_dev, stack, about, hourly_rate, active, null, image];
      db.query(
        `SELECT create_user ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`,
        params,
        (err, rows) => {
          if (err) return next(err);
          return next();
        }
      );
    } else {
      console.log('im past line 40');
      const company = req.body.company ? req.body.company : null;
      const params = [name, username, hash, email, is_dev, null, about, null, null, company, null];
      db.query(
        `SELECT create_user ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`,
        params,
        (err, rows) => {
          if (err) return next(err);
          return next();
        }
      );
    }
  });
};

module.exports = userController;
