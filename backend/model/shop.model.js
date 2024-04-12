const mongoose = require("mongoose");

const shopsSchema = new mongoose.Schema({
    name: { type: String },
    shop_avatar: {
        public_id: { type: String },
        url: { type: String },
    },
    rating: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model("shops", shopsSchema);