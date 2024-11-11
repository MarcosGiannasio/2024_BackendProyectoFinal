const { cartService } = require("../services")


class CartsController {
    getCarts =  async (req, res) => {
        try {
            const carts = await cartService.get()
            logger.info(carts)
            res.status(200).json({
                status: 'success',
                payload: carts
            })        
        } catch (error) {
            logger.info(error)
        }
    }

    getCart = async (req, res) => {
        try {
            const { cartId } = req.params
            const cart = await cartService.getBy({_id: cartId})
            if (!cart) {
                return res.status(401).render({
                    status: 'error',
                    message: 'Cart not found'
                })
                
            }
            res.status(200).json({
                cart
            })            
        } catch (error) {
            logger.info(error)
        }
    }

    createCart = async (req, res) => {
        try {
            const resp = await cartService.create()
            if (!resp) {
                return res.status(404).json(resp)
            }        
            res.status(200).json(resp) 
        } catch (error) {
            logger.info(err)
        }
        // const carrito = req.body
    }

    addProductToCart = async (req, res) => {
        try {
            const { cartId, pid } = req.params
            const { quantity } = req.body
            const product = { id: pid, quantity }
            const resp = await cartService.addItemTo(cartId, product)
            if (!resp) return res.status(404).json({status: 'error', message: 'Cart not found'})
            res.status(200).json({
                status: 'success', 
                message: 'Product added to cart'
            })        
        } catch (error) {
            logger.info(error)
        }
    }

    deleteProductFromCart  = async (req, res) => {
        try {
            const { cartId, pid } = req.params
            const resp = await cartService.deleteItemFrom(cartId, pid)
            if (!resp) return cartService.status(404).json({status: 'error', message: 'Cart not found'})
            res.status(200).json({
                status: 'success',
                message: 'Product deleted from cart'
            })        
        } catch (error) {
            logger.info(error)
        }
    }

    deleteCart = async (req, res) => {
        try {
            const { cartId } = req.params
            const resp = await cartService.delete(cartId) 
            if (!resp) return res.status(404).json({status: 'error', message: 'Cart not found'})
            res.status(200).json(resp)
        } catch (error) {
            logger.info(error)
        }
    }

    checkoutCart = async (req, res) => {
        const {cartId} = req.params
        logger.info(cartId)
        res.json({
            status: 'success',
            message: 'Purchase completed successfully',
        })
    }
    

    
}

module.exports = new CartsController()

cartId