const express = require('express');
const path = require('path');
const authController = require('./controllers/authController.js');
const userController = require('./controllers/userController.js');
const viewsController = require('./controllers/viewsController.js')
const app = express();
const PORT = 3000;

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TODO: find out where frontend is putting the html file
app.use(express.static(__dirname));

app.use(express.static(path.resolve(__dirname, '../client/')));

//endpoint to check sessions in database, returns true or false
app.get('/auth', /* AUTH MIDDLEWARE */, (req, res) => {})

//endpoint to create a new session
app.put('/login', /* AUTH MIDDLEWARE */, (req, res) => {})

//endpoint to insert a new user in the database
app.post('/user', /* USER MIDDLEWARE */, (req, res) => {})

//endpoint to update user information
app.put('/user/:id', /* USER MIDDLEWARE */, (req, res) => {})

//endpoint to display developers, should return either all developers or
//all developers that match filters
app.get('/developers', /* VIEWS MIDDLEWARE */, (req, res) => {})

// Local Err handler
app.use('*', (req, res) => {
    res.status(404).send("This page does not exist. :(")
})

// Global Err handler
app.use((err, req, res, next) => {
    console.log('Server error:', err);
    res.status(500).send('Internal server error');
  });

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}.`));
