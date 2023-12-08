const session = require('express-session');
require('dotenv').config();

function initSession() {
  return session({
    secret: "codo a codo 2023",
    name:"sesion",
    resave:false,
    saveUninitialized:false,
   
  });
};




module.exports = initSession