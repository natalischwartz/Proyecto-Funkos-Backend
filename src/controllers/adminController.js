const path = require('path');

const productos = require('../model/datos')

const sharp = require('sharp');

const { validationResult } = require('express-validator');



const admincControllers ={
    home: (req,res) =>{
        res.render('pages/admin/admin' , {
            data:productos
        })
    },
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
        res.send(`Estamos actualizando el producto con el id: ${req.params.id}`)
    },
    destroy: (req,res) =>{
        res.send(`Estamos borrando el producto con el id : ${req.params.id}`)
    }
}

module.exports = admincControllers;