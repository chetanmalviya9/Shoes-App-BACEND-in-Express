import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
    brandName:{
        type: String,
        required: true
    },
    categoryId:{
        type: mongoose.Schema.ObjectId,
        ref: "category"
    }
})

export const Brand = mongoose.model('brand',brandSchema); 