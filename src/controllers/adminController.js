const admincControllers ={
    home: (req,res) =>{
        res.send("Estas en la página de admin")
    },
    createGet:  (req,res) =>{
        res.send("Creando un producto")
    },
    createPost: (req,res) =>{
        res.send("Enviamos el producto de creamos")
    },
    editId: (req,res) =>{
        res.send(`Estamos editando el producto con el id : ${req.params.id}`)
    },
    actualizarId:  (req,res) =>{
        res.send(`Estamos actualizando el producto con el id: ${req.params.id}`)
    },
    deleteId: (req,res) =>{
        res.send(`Estamos borrando el producto con el id : ${req.params.id}`)
    }
}

module.exports = admincControllers;