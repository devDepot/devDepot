const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authController = require('./controllers/authController.js');
const userController = require('./controllers/userController.js');
const viewsController = require('./controllers/viewsController.js');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//TODO: find out where frontend is putting the html file
app.use(express.static(path.resolve(__dirname, '../client/')));
app.use(express.static(path.resolve(__dirname, '../client/public/')));

//endpoint to check sessions in database, returns true or false
app.get('/auth', authController.setToken, (req, res) => {
  res.status(200).json(res.locals);
});

//endpoint to create a new session
app.get('/login', authController.logIn, (req, res) => {
  res.sendStatus(200);
});

// //endpoint to insert a new user in the database
app.post('/user', userController.createUser, (req, res) => {});

// //endpoint to update user information
// app.put('/user/:id', /* USER MIDDLEWARE */, (req, res) => {});

// //endpoint to display developers, should return either all developers or
// //all developers that match filters
app.get('/developers', viewsController.getDevelopers, (req, res) => {
  console.log('res.locals.developers', res.locals.developers)
  res.status(200).json(res.locals.developers);
});

app.get('/developers/:stack', viewsController.getDeveloperStack, (req, res) => {
  res.status(200).json(res.locals.stack);
});

// Local Err handler
app.use('*', (req, res) => {
  res.status(404).send('This page does not exist. :(');
});

// Global Err handler
app.use((err, req, res, next) => {
  console.log('Server error:', err);
  res.status(500).send('Internal server error');
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}.`));
