const {conn} = require('../config/conn')

const getItems = async() =>{
    const data = await conn.query('SELECT * FROM productos_funkos')
    return data
}


module.exports = {
    getItems
}



// const pool = require('../config/database');

// //obtener todos los productos de la base de datos 

// const getAllProductsFromDB = async ()=>{
// try{
//     const [datos] = await pool.query("SELECT * FROM bg0jugk87axdyzr0lgxj")
//     console.log("DATOS--->", datos)
//     return datos;

// }catch(error){
//     console.error('Error querying MySql:' , error);
//     throw error;

// }
// }












module.exports= getAllProductsFromDB;