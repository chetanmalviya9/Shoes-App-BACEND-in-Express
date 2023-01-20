import mongoose from "mongoose";
const cart = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    productList: [
        {
            _id: mongoose.Schema.ObjectId,
            productName: String,
            productPrice: Number,
            productImage: String,
            productDescription: String
        }
    ]
})
export const Cart = mongoose.model("cart", cart);