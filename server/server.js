const express = require('express');

const app = express();
const path = require('path');
const cors = require('cors');

const PORT = 3000;

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}.`));
