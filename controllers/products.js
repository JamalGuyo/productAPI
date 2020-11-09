const db = require('../models');
// Product logic
exports.getProducts = async(req, res) => {
    try{
        const products = await db.Product.find();
        res.json(products);
    }catch(error){
        res.send(error);
    }
}