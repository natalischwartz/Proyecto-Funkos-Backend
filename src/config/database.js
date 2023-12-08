require('dotenv').config();
//console.log(process.env.DB_HOST);


const mysql2 = require('mysql2/promise');

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: process.env.DB_PORT
})

//prueba de conexion 

pool.getConnection()
    .then(connection => {
        console.log('Connected to MySql database');
        connection.release();
    })
    .catch(err => {
        console.error('Error connecting to MySql', err);
    })


module.exports = pool