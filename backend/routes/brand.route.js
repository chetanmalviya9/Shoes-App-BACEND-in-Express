import express from "express";
import { addBrand, showBrand,updateBrand,deleteBrand, fetchBrand } from "../controller/brand.controller.js";
const router=express.Router();
router.get("/show",showBrand)
router.post("/add",addBrand)
router.put("/update",updateBrand)
router.delete("/delete/:id",deleteBrand)
router.delete("/delete/:id",deleteBrand)
router.get("/brandByCategoryId/:id",fetchBrand)
export default router;