// const config = require('dotenv');
// config();

// const createPool = require('mysql2/promise');

// const pool = createPool({
//     host:process.env.DB_HOST || "localhost",
//     user:process.env.DB_USER || "root",
//     password:process.env.DB_PASSWORD || "",
//     database:process.env.DB_DATABASE || "bg0jugk87axdyzr0lgxj",
//     waitForConnections:true,
//     connectionLimit:10,
//     queueLimit:0,
//     port:process.env.DB_PORT || 3306
// })

// //prueba de conexion 

// pool.getConnection()
// .then(connection =>{
//     console.log('Connected to MySql database');
//     connection.release();
//     })
// .catch(err =>{
//     console.error('Error connecting to MySql', err);
// })    


// module.exports = pool;