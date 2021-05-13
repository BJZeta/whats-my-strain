const functions = require("firebase-functions");
const app = require("express")();
const auth = require("./util/auth");

const { loginUser, signUpUser, uploadProfilePic, getUserDetail } = require("./APIs/users");

const { getAllStrains } = require("./APIs/strains");

app.post("/signup", signUpUser);
app.post("/login", loginUser);
app.get('/user', auth, getUserDetail);
app.post("/user/image", auth, uploadProfilePic);
app.get("/strains", getAllStrains);

exports.api = functions.https.onRequest(app);
