const mysql = require('mysql2');

const pool = mysql.createPool( {
    host:"localhost",
    user:"",
    password:"",
    database:"funko-test",
    waitForConnections :10,
    connectionLimit:10,
    queueLimit: 0

});
//prueba de conexion 
pool.getConnection((error,connection) => {
    if(error){
        console.error("Error al obtener una conexión",error)
    }else{
        console.log("conexión exitosa a la base de datos")
        connection.release();
    }

})

module.exports={
    conn : pool.promise()
}

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

 


// module.exports = pool;