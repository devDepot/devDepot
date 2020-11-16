const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}.`));