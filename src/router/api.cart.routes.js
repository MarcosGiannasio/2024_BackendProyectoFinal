
const { Router } = require('express')

const CartController = require('../controllers/CartManager')

const router = Router()
// Capa de Persistencia
const {
    getCarts,
    getCart,
    createCart

} = new CartController()

router.get('/', getCarts)
router.post('/', createCart)
router.get('/:cid', getCart)


module.exports = router
