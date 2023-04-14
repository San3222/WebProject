const mongoose = require('mongoose');

const createSchema = new mongoose.Schema({
    product_Id:{
        type: Number,
        required : true
    },
    name:{
        type: String,
        required: true
    },
    Quantity:{
        type: Number,
        required: true

    },
    Opreations:{
        type: String,
        required: true
    }
});
 

module.exports = new mongoose.model('Product',createSchema);