var mongoose = require('mongoose'), Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    category:{type: String},
    name:{type: String},
    description: {type: String},
    image_Url: {type: String},
    shop: { type: Schema.Types.ObjectId, ref: 'users'},
    price:{type: Number},
    discount_price:{type: Number},
    rating: {type: Number},
    total_sell: {type: Number},
    stock: {type: Number},
}, { timestamps: true });



module.exports = mongoose.model("products", productSchema);