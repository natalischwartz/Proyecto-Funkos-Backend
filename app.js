const express = require('express');
const app = express();

const PORT= 3000;

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes')

app.use(express.static('public'));


app.use('/', mainRoutes);
app.use('/shop' , shopRoutes)


app.listen(PORT , () => console.log(`Servidor corriendo en http://localhost:${PORT}`));