const ProductDaoMongo = require("../daos/Mongo/models/productsDao.mongo");
const ProductRepository = require("../repositories/products.repository");

const productService = new ProductRepository(new ProductDaoMongo())

module.exports = {
    productService
}