const path = require('path');



// const Swal = require('sweetalert2')
// const productos = require('../model/datos')

const sharp = require('sharp');

const {getAllProductsFromDB,addItemFromDB,editItemPostFromDB,getItemPorIDFromDB,deleteItemFromDB} = require('../model/model')


const { validationResult } = require('express-validator');



// HOME de admin , muestra todos los items en la BBDD

async function getAllItems(req, res) {
    try {
        const productos = await getAllProductsFromDB();
        res.render("pages/admin/admin", {
            data: productos,
            mensaje: req.query.mensaje || ""
        })
    } catch (error) {
        console.error('Error getting items:', error);
        res.status(500).send('Internal Server Error');
    }
}

//Agregar nuevo item a la BBDD-Create

async function additem(req, res) {
    try {
        res.render("pages/admin/create")
    } catch (error) {
        console.error('Error adding item:', error);
        res.status(500).send('Internal Server Error');
    }

}

// addItemPost-Store
async function addItemPOST(req, res) {

    //Manejo de ERRORES
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.render("pages/admin/create", {
            values : req.body,
            errors: errors.array(),
    
        });
        }

        //multer

        if(req.file){
            // console.log(req.file, req.file.buffer, req.file.originalname);
    
            sharp(req.file.buffer)
            .resize(300)
            .toFile(path.resolve(__dirname, "../../public/uploads/" + req.file.originalname))


            
            const file_data =req.file
            console.log(file_data)
            

            const newItemData = req.body;
            const imageFront = file_data.originalname
            
            

            try {
                const nuevoItem = await addItemFromDB(newItemData,imageFront);
                console.log("nuevoItem", nuevoItem)
                res.redirect("/admin/productos" + "?mensaje=Item agregado")
            } catch (error) {
                console.error('Error adding Item:', error);
                res.status(500).send('Internal Server Error');
            }
        
        }



            }
            

        
    

    
    
   

//editItem - show
async function editItem(req, res) {
    const itemID = req.params.id;
    try {
        const item = await getItemPorIDFromDB(itemID);
        if (item) {
            res.render("pages/admin/edit", {
                data: item
            })
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        console.error('Error getting item by ID:', error);
        res.status(500).send('Internal Server Error');
    }

}

//editItemPOST - update

async function editItemPOST(req, res) {
    const itemID = req.params.id;
    const updatedItemData = req.body;
    try {
        const updatedItem = await editItemPostFromDB(itemID, updatedItemData);
        if (updatedItem) {
            res.redirect("/admin/productos" + "?mensaje=Item actualizado")
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        console.error('Error editing Item:', error);
        res.status(500).send('Internal Server Error');
    }

}
//Borrar un item de la BBDD - destroy 
async function deleteItem(req, res) {
    const itemID = req.params.id;
    try {
        const deletedItem = await deleteItemFromDB(itemID);
        if (deletedItem) {
            res.redirect("/admin/productos" + "?mensaje=Item Borrado")
        } else {
            res.status(404).send('item not found');
        }
        

    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).send('Internal Server Error');
    }

    


}


module.exports = {getAllItems,
    additem,
    addItemPOST,
    editItem,
    editItemPOST,
    deleteItem
}