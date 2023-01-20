import express from "express";
import { addCategoryPost, deleteCategory, listCategory, updateCategory } from '../controller/category.controller.js';
const router = express.Router();

router.route("/add").post(addCategoryPost);
router.get("/list",listCategory);
router.get("/delete/:id",deleteCategory);
router.post("/update",updateCategory);
export default router