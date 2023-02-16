const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    stock: {
        type: Number,
        default: 50
    },
    img: {
        type: String,
    },
    category: [{
        type: String,
        required: true
    }],
    state: {
        type: Boolean,
        default: true
    },
    reviews: [{ 
        _id: {type: Schema.Types.ObjectId, ref: "User"},
        rating: {type: Number, default: 0}
    }],
    history: [{
        type: Schema.Types.ObjectId, ref: "History"
    }]
})
 

module.exports = model("Product", ProductSchema)