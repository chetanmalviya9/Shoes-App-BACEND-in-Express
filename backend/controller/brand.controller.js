import { Brand } from "../model/brand.model.js";
import { Category } from "../model/category.model.js";
import { Product } from "../model/product.model.js";
export const showBrand = (req, res, next) => {
    Brand.find().populate({ path: 'categoryId' }).then((result) => {
        return res.status(200).json({ status: true, BrandList: result });
    }).catch((err) => {
        return res.status(500).json({ message: err });
    })
}
export const addBrand = async (req, res, next) => {
    Brand.create(req.body).then((result) => {
        return res.status(200).json({ status: true, message: "Brand add successfully", brand: result });
    }).catch((err) => {
        console.log(err);
    });
}

export const updateBrand = (req, res, next) => {
    const id = req.body._id;
    delete req.body._id;
    Brand.updateOne({ _id: id }, {
        $set: req.body
    }).then((msg) => {
        return res.status(200).json({ status: true, message: msg });
    }).catch((err) => {
        return res.status(500).json({ status: false, message: err });
    })
}
export const deleteBrand = async (req, res, next) => {
    await Product.deleteMany({
        brandId: req.params.id
    })
    Brand.deleteOne({
        _id: req.params.id
    }).then((msg) => {
        return res.status(200).json({ status: true });
    }).catch((err) => {
        return res.status(200).json({ status: false, message: err });
    })
}
export const fetchBrand = async (req, res, next) => {
    try {
        let result = await Brand.find({
            categoryId: req.params.id
        })
        res.status(200).json({ brandList: result, status: true });
    }
    catch (e) {
        res.status(200).json({ status: false });
    }
}