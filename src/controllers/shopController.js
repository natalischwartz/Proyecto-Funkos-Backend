const shopControllers = {
    home:  (req,res) => {
        res.send("Route for shop view")
    },
    itemId: (req,res) => {
        const id = req.params.id;
        //busco en la BBDD el elemento con ese ID 
        res.send(`Este es el item con id : ${req.params.id}`)
    },
    itemIdAdd:  (req,res) => {
        res.send("Route for add the current item to the shop cart")
        // es el post de agregar al carrito en item.html
    },
    cartGet:  (req,res) => {
        res.send("Route for cart view")
        //me devuelve la vista con todos los elementos en el carrito
    },
    cartPost: (req,res) => {
        res.send("Route for go to checkout page")
        // en la vista del carrito tendremos un boton que sea ir a pagar
        //enviamos la info del coarrito a una ruta por post
    }

}  

module.exports = shopControllers;