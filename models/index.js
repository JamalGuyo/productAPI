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
// EXPORT MODELS 
module.exports.Product = require('./product.js');