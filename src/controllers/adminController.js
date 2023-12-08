const path = require('path');

const productos = require('../model/datos')

// const {getItems} =require('../model/model')

// const getAllProductsFromDB = require('../model/model')

const sharp = require('sharp');

const { validationResult } = require('express-validator');



const admincControllers ={
     home: (req,res) =>{
         res.render('pages/admin/admin' , {
            data:productos
         })

    }     

    //obtener todos los productos
    // home: async(req,res) =>{
    //     try{
    //         const productos = await getAllProductsFromDB()
    //          res.render('pages/admin/admin', {
    //        })

    //     }catch(error){
    //         console.error("Error getting productos", error);
    //         res.status(500).send('Internal server error');

    //     }

    // }
    ,
    create:  (req,res) =>{
        res.render('pages/admin/create');
    },
    store: (req,res) =>{
        

        const errors = validationResult(req);
        

        if (!errors.isEmpty()) {
            return res.render("pages/admin/create", {
                values : req.body,
                errors: errors.array(),
                
            });
        }

        if(req.file){
        console.log(req.file, req.file.buffer, req.file.originalname);

        sharp(req.file.buffer)
        .resize(300)
        .toFile(path.resolve(__dirname, "../../public/uploads/" + req.file.originalname))

        }

        const nuevoFunko = req.body;
        console.log(nuevoFunko)
        nuevoFunko.product_id = productos.length +1 
        nuevoFunko.product_sku =req.body.sku
        nuevoFunko.product_name = req.body.nombre
        nuevoFunko.licence_name =req.body.licencias
        productos.push(nuevoFunko)
        // console.log(productos)
        res.render('pages/admin/admin', {
            data : productos
        })

    },
    show: (req,res) =>{
        res.render('pages/admin/edit' , {
            data:productos
        })
    },
    update:  (req,res) =>{
        const item = productos.find((producto) =>{
            return producto.product_id == req.params.id;

        })
        if(!item){
            return res.status(404).send("Item no encontrado");
        }
        //busco en la BBDD el elemento con ese ID 
        res.render('pages/admin/edit',{
            data:item
        })



        
    },
    destroy: (req,res) =>{
       const id = parseInt(req.params.id)
       const usuarioIndex = productos.findIndex(item => item.product_id == id)

       if(usuarioIndex === -1){
        return res.status(404).json({mensaje:"Usuario no encontrado"});
       }

       const usuarioEliminado = productos.splice(usuarioIndex,1)

       res.redirect('/admin/productos')
    }
}

module.exports = admincControllers;