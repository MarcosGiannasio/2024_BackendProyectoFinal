const { productService } = require("../services")


class ProductController {
    constructor(){
        this.service = productService
    }

    getProducts = async (req, res)=>{
        try {
            // const productsDb = await productModel.find({})
            const productsDb = await this.service.getProducts({})

            res.send({status: 'success', data: productsDb})
        } catch (error) {
            console.log(error)
        }
    }
    
    getProduct = async (req, res) => {
        const { id } = req.params
        const product = await this.service.getProduct({_id: id})
        res.send({status: 'success', data: product})
    }

    createProducts = async (req, res) => {
        try {
            const { body } = req
    
            // const response = await productModel.create(body)
            const response = await this.service.creteProduct(body)

    
            res.send({status: 'success', data: response})
        } catch (error) {
            console.log(error)
        }
    }
    updateProducts = async (req, res) => {}
    deleteProducts = async (req, res) => {}
}

module.exports = ProductController