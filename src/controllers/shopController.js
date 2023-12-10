
//importando datos 
//const productos = require('../model/datos')
const {getAllProductsFromDB, getItemPorIDFromDB} = require('../model/model')


//HOME getAllItems 
async function getAllItems(req,res ){
    try{
        const productos = await getAllProductsFromDB();
        res.render('pages/shop/shop', {
            data: productos
        })
    }catch(error){
        console.error('Error getting items:', error);
        res.status(500).send('Internal Server Error');
    }
}


//Mostrar un ITEM getItemPorID

async function getItemPorID(req,res){
    const itemID = req.params.id;
    try {
        const item = await getItemPorIDFromDB(itemID);
        if (item) {
            res.render("pages/shop/item", {
                data: item
            })
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        console.error('Error getting ietm by ID:', error);
        res.status(500).send('Internal Server Error');
    }
}

function itemIdAdd (req,res){
    res.send("Route for add the current item to the shop cart")
}

function cartGet (req,res){
    res.render("pages/shop/carrito");
    //me devuelve la vista con todos los elementos en el carrito
}


//     cartPost: (req,res) => {
//         res.send("Route for go to checkout page")
//         // en la vista del carrito tendremos un boton que sea ir a pagar
//         //enviamos la info del coarrito a una ruta por post
//     }

// }  

module.exports = {getAllItems,
    getItemPorID,
    itemIdAdd,
    cartGet

}
