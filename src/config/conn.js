const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.DBPASS,
  database: process.env.DB,
  port: process.env.PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/*
pool.getConnection()
    .then(connection => {
      pool.releaseConnection(connection);
        console.log('DB is Connected');

    });  
*/

// Exportamos la conexión como una promesa
module.exports = {
  conn: pool.promise()
 };
