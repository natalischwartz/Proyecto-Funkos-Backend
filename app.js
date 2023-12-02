const express = require('express');
const app = express();

const PORT= 3000;

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Motor de plantillas

app.set('view engine' , 'ejs')
app.set('views' , 'src/views')


app.use('/', mainRoutes);
app.use('/shop' , shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);


app.listen(PORT , () => console.log(`Servidor corriendo en http://localhost:${PORT}`));