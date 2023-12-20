const express = require('express');
const router = express.Router();


const {pedirTodas ,crearUna, pedirUna, borrarUna,actualizar} = require('../db/pedidos.js')

/* GET users listing. */
router.get('/', pedirTodas);
router.get('/:id', pedirUna);


router.post('/', crearUna);

router.put('/:id', actualizar);

router.delete('/:id', borrarUna);

module.exports = router;
