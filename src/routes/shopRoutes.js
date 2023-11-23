const express = require('express');
const router = express.Router();

const shopControllers = require('../controllers/shopController')


router.get('/', shopControllers.home)

router.get('/item/:id', shopControllers.itemId )


router.post('/item/:id/add', shopControllers.itemIdAdd)


router.get('/cart', shopControllers.cartGet)

router.post('/cart', shopControllers.cartPost )













module.exports = router;