
//importando datos 

const productos = require('../model/datos')

const shopControllers = {
    home:  (req,res) => {
        res.render("pages/shop/shop" , {
            data:productos

        })
    },
    obtenerItem: (req,res) => {
        const item = productos.find((producto) =>{
            return producto.product_id == req.params.id;

        })
        if(!item){
            return res.status(404).send("Item no encontrado");
        }
        //busco en la BBDD el elemento con ese ID 
        res.render('pages/shop/item',{
            data:item
        })
    },
    itemIdAdd:  (req,res) => {
        res.send("Route for add the current item to the shop cart")
        // es el post de agregar al carrito en item.html
    },
    cartGet:  (req,res) => {
        res.render("pages/shop/carrito")
        //me devuelve la vista con todos los elementos en el carrito
    },
    cartPost: (req,res) => {
        res.send("Route for go to checkout page")
        // en la vista del carrito tendremos un boton que sea ir a pagar
        //enviamos la info del coarrito a una ruta por post
    }

}  

module.exports = shopControllers;