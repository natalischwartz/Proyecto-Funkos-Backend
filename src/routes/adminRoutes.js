const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage() });

const {body} = require('express-validator');

const validations = [
    body('product_name')
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({min:3})
    .withMessage("Mínimo tiene que tener 3 caracteres"),
]



const {getAllItems, additem, addItemPOST,editItem, editItemPOST,deleteItem} = require('../controllers/adminController')

router.get('/productos',getAllItems);

router.get('/create', additem);
router.post('/productos', upload.single("imagen"), validations, addItemPOST );


//mostrar form de editar item 
router.get('/edit/:id', editItem );

//enviar a admin/productos lo que se completo en el form 
router.post('/edit/:id', editItemPOST);




router.get('/delete/:id', deleteItem );









module.exports = router;