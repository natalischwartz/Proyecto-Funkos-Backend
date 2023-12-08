
const path = require('path')



const userCredentials = {
    email: 'natali@gmail.com',
    password: 'natali90'
  }

const authControllers ={
    loginView :  (req,res)=>{
       res.render('pages/admin/login')
    },
    loginUser: (req,res)=>{
        const { email, password } = req.body;
        const emailValidation = userCredentials.email == email;
        const passwordValidation = userCredentials.password == password;

        req.session.isLogged = emailValidation && passwordValidation ? true : false;

        if (req.session.isLogged) {
            res.locals.isLogged = true;
            return res.redirect('/admin/productos');
          }

          return res.status(401).send('Credenciales inválidas');
        
    },
    registerView: (req,res)=>{
        res.sendFile(path.resolve("src/views/pages/admin/register.html"))
    },
    registerUser: (req,res)=>{
        res.send("Enviamos datos de register")
    },
    logout: (req,res)=>{
        res.send("Estas en la página de logout")
    }


}





module.exports = authControllers;