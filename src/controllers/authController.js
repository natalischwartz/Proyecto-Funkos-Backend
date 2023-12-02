
const path = require('path')

const authControllers ={
    loginGet :  (req,res)=>{
        res.sendFile(path.resolve("src/views/pages/admin/login.html"))
    },
    loginPost: (req,res)=>{
        res.send("Enviamos datos login")
    },
    registerGet: (req,res)=>{
        res.sendFile(path.resolve("src/views/pages/admin/register.html"))
    },
    registerPost: (req,res)=>{
        res.send("Enviamos datos de register")
    },
    logout: (req,res)=>{
        res.send("Estas en la página de logout")
    }


}

module.exports = authControllers;