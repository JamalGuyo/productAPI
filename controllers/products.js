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

exports.getProduct = async(req, res) => {
    try{
        const {productID} = req.params;
        const product = await db.Product.findById(productID);
        res.json(product);
    }catch(error){
        res.status(404).send(error);
    }
}