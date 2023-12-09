const pool = require('../config/database');
//console.log("Variable pool: "+pool)

//obtener todos los productos de la base de datos 
const getAllProductsFromDB = async () => {
    try {
        const [productos] = await pool.query("SELECT product.product_id, product.product_name, product.product_description,product.price,product.stock,product.sku,product.dues,product.image_front,product.image_back,product.create_time,licence.licence_name,product.category_id FROM product JOIN licence ON product.licence_id = licence.licence_id;")
        console.log("DATOS--->", productos)
        return productos;
    } catch (error) {
        console.error('Error querying MySql:', error);
        throw error;
    }
}

//Obtener un producto por ID desde BD
const getItemByID = async (id) => {
    try {
        const [dato] = await pool.query("SELECT * FROM product WHERE product_id = ?", [id])
        console.log("Producto--->", dato)
        return dato[0];
    } catch (error) {
        console.error('Error querying MySql:', error);
        throw error;
    }
}
module.exports = {
    getAllProductsFromDB,
    getItemByID
};