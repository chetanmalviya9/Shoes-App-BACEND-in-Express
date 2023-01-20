import { Category } from "../model/category.model.js";
import { Brand } from "../model/brand.model.js";
import { Product } from "../model/product.model.js";

export const showProduct = (req, res, next) => {
    Product.find().populate({ path: 'brandId' }).populate({ path: 'categoryId' }).then((result) => {
        // console.log(result);
        return res.status(200).json({ productList: result, status: true });
    }).catch((err) => {
        return res.status(500).json({ message:"Something went wrong", status: false });
    })
}
export const addProduct = (req, res, next) => {

    req.body.productImage = req.file.filename;
    // console.log(req.body)
    Product.create(req.body)
        .then(result => {
            return res.status(200).json({ result })
        })
        .catch(err => {
            return res.status(500).json({ message: "Something went wrong", status: false });
        });
}
export const deleteProduct=( req, res, next)=>{

    Product.deleteOne({
        _id: req.params.id
    }).then((msg) => {
        return res.status(200).json({ status: true });
    }).catch((err) => {
        return res.status(200).json({ status: false, message: err });
    })

}