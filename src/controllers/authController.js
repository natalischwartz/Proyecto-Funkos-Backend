const authControllers ={
    loginGet :  (req,res)=>{
        res.send("Estas en la página de login ")
    },
    loginPost: (req,res)=>{
        res.send("Enviamos datos login")
    },
    registerGet: (req,res)=>{
        res.send("Estas en la página de register")
    },
    registerPost: (req,res)=>{
        res.send("Enviamos datos de register")
    },
    logout: (req,res)=>{
        res.send("Estas en la página de logout")
    }


}

module.exports = authControllers;