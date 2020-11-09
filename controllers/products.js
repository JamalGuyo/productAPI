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

exports.createProduct = async(req, res) => {
    try{
        const product = await db.Product.create(req.body);
        res.status(201).json(product);
    }catch(error){
        res.send(error);
    }
}