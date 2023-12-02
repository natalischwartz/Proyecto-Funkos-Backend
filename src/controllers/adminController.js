const path = require('path');

const productos = require('../model/datos')


const admincControllers ={
    home: (req,res) =>{
        res.render('pages/admin/admin' , {
            data:productos
        })
    },
    createGet:  (req,res) =>{
        res.sendFile(path.resolve('src/views/pages/admin/create.html'))
    },
    createPost: (req,res) =>{
        res.send("Enviamos el producto de creamos")
    },
    editId: (req,res) =>{
        res.render('pages/admin/edit' , {
            data:productos
        })
    },
    actualizarId:  (req,res) =>{
        res.send(`Estamos actualizando el producto con el id: ${req.params.id}`)
    },
    deleteId: (req,res) =>{
        res.send(`Estamos borrando el producto con el id : ${req.params.id}`)
    }
}

module.exports = admincControllers;