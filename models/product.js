const mongoose = require('mongoose');
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
// export product model
module.exports = mongoose.model('Product', productSchema);