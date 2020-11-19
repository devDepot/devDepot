const bcrypt = require('bcrypt');
const db = require('../models/DbModel.js');
const nodemailer = require('nodemailer');

const saltRounds = 10;
const nodemailerPass = process.env.PASS;

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'devDepot21@gmail.com',
    pass: nodemailerPass,
  },
});

const userController = {};

userController.createUser = async (req, res, next) => {
  const { name, username, password, email, user_type, about } = req.body;
  console.log('req.body: ', req.body);
  const is_dev = user_type === 'Developer' ? true : false;
  await bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (is_dev) {
      const { stack, hourly_rate, active } = req.body;
      const image = req.body.image ? req.body.image : null;
      console.log('image', image);
      const params = [
        name,
        username,
        hash,
        email,
        is_dev,
        stack,
        about,
        hourly_rate,
        active,
        null,
        image,
      ];
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
      const params = [
        name,
        username,
        hash,
        email,
        is_dev,
        null,
        about,
        null,
        null,
        company,
        null,
      ];
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

userController.checkout = (req, res, next) => {
  console.log('REQ DOT HEADAHS', typeof req.body.hired_devs);
  db.query(
    `SELECT name, about FROM employers 
  WHERE account_id = (SELECT _id FROM accounts WHERE email=$1)`,
    [req.body.employer_email],
    (err, result) => {
      if (err) return next(err);
      console.log('RESUOoOlllttttt', result);
      // const { name, about } = result.rows[0];
      // req.headers.hired_devs.forEach((dev) => {
      //   const mailOptions = {
      //     from: 'devDepot21@gmail.com',
      //     to: dev.email,
      //     subject: 'DevDepot- ya hired',
      //     text: `YA HIRED: ${name} wants to hire you for their project! Here's a little bit about your future employer: ${about}.
      //     you can email them at: ${req.body.employer_email}`,
      //   };
      //   transport.sendMail(mailOptions, (err, info) => {
      //     if (err) return next(err);
      //   });
      // });

      next();
    }
  );
};

module.exports = userController;
