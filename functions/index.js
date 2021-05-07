const functions = require("firebase-functions");
const app = require('express')();

const {
    getAllStrains
} = require('./APIs/strains')

app.get('/strains', getAllStrains);

exports.api = functions.https.onRequest(app);