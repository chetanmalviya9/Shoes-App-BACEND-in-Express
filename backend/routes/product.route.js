import express from "express";
import multer from 'multer';
import { addProduct, deleteProduct, showProduct} from "../controller/product.controller.js";
const router=express.Router();

const upload= multer({dest: 'public/images'});

router.get("/list",showProduct)
router.post("/add",upload.single("productImage"),addProduct)
// router.put("/update",updateBrand)+
router.delete("/delete/:id",deleteProduct)
export default router;