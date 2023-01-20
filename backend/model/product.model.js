import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true,
        trim: true
    },
    productPrice:{
        type:Number,
        min: 1,
        required: true,
        trim: true
    },
    productDescription:{
        type: String,
        trim: true
    },
    productImage:{
        type: String
    },
    categoryId:{
        type: mongoose.Schema.ObjectId,
        ref: "category"
    },
    brandId:{
        type: mongoose.Schema.ObjectId,
        ref: "brand"
    }
});
export const Product = mongoose.model("product",productSchema);