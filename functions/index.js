const functions = require("firebase-functions");
const app = require("express")();

const { loginUser, signUpUser } = require("./APIs/users");

const { getAllStrains } = require("./APIs/strains");

app.post("/signup", signUpUser);
app.post("/login", loginUser);
app.get("/strains", getAllStrains);

exports.api = functions.https.onRequest(app);
