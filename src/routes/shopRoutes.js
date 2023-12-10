const express = require('express');
const router = express.Router();

const {getAllItems ,getItemPorID, itemIdAdd, cartGet }= require('../controllers/shopController')


router.get('/', getAllItems);

router.get('/items/:id', getItemPorID );


router.post('/item/:id/add',itemIdAdd)


router.get('/cart', cartGet)

// router.post('/cart', shopControllers.cartPost )













module.exports = router;