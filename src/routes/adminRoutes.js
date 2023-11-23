const express = require('express');
const router = express.Router();

const adminControllers = require('../controllers/adminController')

router.get('/',adminControllers.home )

router.get('/create',adminControllers.createGet)

router.post('/create', adminControllers.createPost )

router.get('/edit/:id',adminControllers.editId )

router.put('/edit/:id', adminControllers.actualizarId)

router.delete('/delete/:id',adminControllers.deleteId )









module.exports = router;