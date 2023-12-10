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
const getItemPorIDFromDB = async (id) => {
    try {
        const [dato] = await pool.query("SELECT * FROM product WHERE product_id = ?",[id]) 
        console.log("Producto--->", dato)
        return dato[0];
    } catch (error) {
        console.error('Error querying MySql:', error);
        throw error;
    }
}


// Agregar un nuevo item a la base de datos
const addItemFromDB = async (itemData) => {
    try {
        const [result] = await pool.query('INSERT INTO product SET ?', [itemData]);
        const nuevoItemID = result.insertId;
        const nuevoItem = await getItemPorIDFromDB (nuevoItemID);
        return nuevoItem;
    } catch (error) {
        console.error('Error inserting into MySQL:', error);
        throw error;
    }
};


// Editar un item por ID en la base de datos
const editItemFromDB = async (id, updatItemData) => {
    try {
        await pool.query('UPDATE product SET ? WHERE id = ?', [updatItemData, id]);
        const updatedItem = await getItemPorIDFromDB(id);
        return updatedItem;
    } catch (error) {
        console.error('Error updating MySQL:', error);
        throw error;
    }
};


// Borrar un item por ID de la base de datos
const deleteItemFromDB = async (id) => {
    try {
        const deletedItem = await getItemPorIDFromDB(id);
        await pool.query('DELETE FROM product WHERE id = ?', [id]);
        return deletedItem;
    } catch (error) {
        console.error('Error deleting from MySQL:', error);
        throw error;
    }
};


module.exports = {getAllProductsFromDB,
    getItemPorIDFromDB,
    addItemFromDB,
    editItemFromDB,
    deleteItemFromDB
}



