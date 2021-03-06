const db = require('../databases/mongodb');
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

exports.updateProduct = async(req, res) => {
    try{
        const {productID} = req.params;
        const product = await db.Product.findByIdAndUpdate(productID, req.body, {new: true});
        res.json(product);
    }catch(error){
        res.send(error);
    }
}

exports.deleteProduct = async(req, res) => {
    try{
        await db.Product.findByIdAndDelete(req.params.productID);
        res.json({message: 'product deleted'})
    }catch(error){
        console.log(error);
    }
}