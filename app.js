'use strict';

require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const fsReadController = require('./controllers/fsReadController');

app.use(bodyParser.json());
app.use(cors());

app.get('/firestore/:collection/:database/:db', (req, res) => {
    fsReadController.index(req, res);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

module.exports = app;