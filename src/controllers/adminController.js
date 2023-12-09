const path = require('path');

const { getAllProductsFromDB,addItemFromDB,updateItemFromDB, getItemByID } = require('../model/model')

const sharp = require('sharp');

const { validationResult } = require('express-validator');

//obtener todos los productos
const admincControllers = {
    home: async (req, res) => {
        try {
            const productos = await getAllProductsFromDB()
            res.render('pages/admin/admin', {
                data: productos,
                mensaje: req.query.mensaje || ""
            })
        } catch (error) {
            console.error("Error getting productos", error);
            res.status(500).send('Internal server error');
        }
    },

    
    create: (req, res) => {
        res.render('pages/admin/create',{
            titulo: "Crear un Item"
        });
    },

    store: async function addItemPost(req,res) {
       const newItemData = req.body;
       try {
            const nuevoItem = await addItemFromDB(newItemData);
            console.log("nuevo item ", nuevoItem);
            res.redirect("/admin/productos"+"?mensaje=Item Agregado")
       } catch (error) {
        console.error("Error adding item",error);
        res.status(500).send("Internal Server Error")
       }
    },

    
    show: (req, res) => {
        res.render('pages/admin/edit', {
            data: productos
        })
    },

    update: async function editItem (req,res) {
        const itemId = req.params.id;
        try {
            const item = await getItemByID(itemId);
            if(item){
                res.render("pages/admin/edit",{
                    data: item
                })
            } else { 
                res.status(404).send("Item not found")
            }
        } catch (error){
            console.error("Error geting item by id",error);
            res.status(500).send("Internal Server Error")        }
    },

    /*
    update: (req, res) => {
        const item = productos.find((producto) => {
            return producto.product_id == req.params.id;
        })
        if (!item) {
            return res.status(404).send("Item no encontrado");
        }
        //busco en la BBDD el elemento con ese ID 
        res.render('pages/admin/edit', {
            data: item
        })
    },
    */

    destroy: (req, res) => {
        const id = parseInt(req.params.id)
        const usuarioIndex = productos.findIndex(item => item.product_id == id)

        if (usuarioIndex === -1) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        const usuarioEliminado = productos.splice(usuarioIndex, 1)

        res.send("Usuario eliminado")
    }
}

module.exports = admincControllers;



/*
const productos = require('../model/datos')


const admincControllers ={
     home: (req,res) =>{
         res.render('pages/admin/admin' , {
            data:productos
         })

    }    
*/

/*
    store: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("pages/admin/create", {
                values: req.body,
                errors: errors.array(),
            });
        }
        if (req.file) {
            console.log(req.file, req.file.buffer, req.file.originalname);
            sharp(req.file.buffer)
                .resize(300)
                .toFile(path.resolve(__dirname, "../../public/uploads/" + req.file.originalname))
        }
        const nuevoFunko = req.body;
        console.log(nuevoFunko)
        nuevoFunko.product_id = productos.length + 1
        nuevoFunko.product_sku = req.body.sku
        nuevoFunko.product_name = req.body.nombre
        nuevoFunko.licence_name = req.body.licencias
        productos.push(nuevoFunko)
        // console.log(productos)
        res.render('pages/admin/admin', {
            data: productos
        })
    },
    */