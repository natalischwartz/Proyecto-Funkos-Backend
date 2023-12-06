const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage() });

const {body} = require('express-validator');

const validations = [
    body('nombre')
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({min:3})
    .withMessage("Mínimo tiene que tener 3 caracteres"),
]



const adminControllers = require('../controllers/adminController')

router.get('/productos',adminControllers.home )


router.get('/create',adminControllers.create)
router.post('/productos', upload.single("imagen"), validations, adminControllers.store )



router.get('/:id',adminControllers.show )

router.get('/edit/:id', adminControllers.update)


router.get('/delete/:id',adminControllers.destroy )









module.exports = router;