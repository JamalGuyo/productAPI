const mongoose = require('mongoose');
// connect to mongodb
mongoose.connect('mongodb://localhost:27017/productdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log(`connected successfully to productdb database`))
.catch(error => console.log(error));
// mongoose configs
mongoose.set('debug', true);

// PRODUCT MODEL
const mongoose = require('mongoose');
const product = require('../models/product');
// product schema
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    dateTime:{
        type: Date,
        default: Date.now
    }
})
//
// export product model
module.exports = {
    product: mongoose.model('Product', productSchema)
}