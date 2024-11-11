
const { Router } = require('express')

const ProductController = require('../controllers/ProductManager')

const router = Router()
// Capa de Persistencia
const {
    getProducts,
    createProducts,
    getProduct

} = new ProductController()

router.get('/', getProducts)
router.post('/', createProducts)
router.get('/:pid', getProduct)


module.exports = router
