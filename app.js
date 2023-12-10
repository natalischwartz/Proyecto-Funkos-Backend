const express = require('express');
// const session =require('express-session');
const app = express();
const methodOverride = require('method-override');
const initSession  = require('./src/utils/sessions');
require('dotenv').config();


const PORT= process.env.PORT || 3000

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');


//Middlewares de configuración
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))

//Configuracion del Template Engines ,EJS

app.set('view engine' , 'ejs')
app.set('views' , 'src/views')


/* Creamos la session de usuario */

app.use(initSession());


/* Le pasamos a locals si el user esta logueado para aprovecharlo en las Vistas */

app.use((req, res, next) => {
  res.locals.isLogged = req.session.isLogged;
   next();
 });

//Configuracion de express-session 
// app.use(session({
//     secret: "codo a codo 2023",
//     name:"sesion",
//     resave:false,
//     saveUninitialized:false,
//     cookie: { maxAge: 60000 * 5  } //5 minutos
//     })
// )

//Rutas
app.use('/', mainRoutes);
app.use('/shop' , shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);


app.listen(PORT , () => console.log(`Servidor corriendo en http://localhost:${PORT}`));