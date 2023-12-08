const path = require('path')

const productos = require('../model/datos')

const mainControllers = {
    home: (req,res) =>{
        res.render("index" , {
            collections: productos
        });
    
    },
    // mainCollection: (req,res) =>{
    //     const {filter} = req.query
    //     const message = filter 
    //     ? `Vista de funkos filtrado por ${filter}` 
    //     : `Vista de funkos filtrado sin filtrar`
    //     res.send(message)
    // },
    contact: (req,res) =>{
        res.render('pages/admin/contact');
    },
    about:  (req,res) =>{
        res.send("Route for about view")
    },
    faqs: (req,res) =>{
        res.send("Route for faqs view")
    }
}

module.exports = mainControllers;

