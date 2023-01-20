import express from "express";
const router= express.Router();
import { addToCart,cartList,deleteProduct } from '../controller/cart.controller.js';
router.post("/list",cartList);
router.get("/deleteProduct/:index",deleteProduct);
router.post("/addToCart",addToCart);
export default router;