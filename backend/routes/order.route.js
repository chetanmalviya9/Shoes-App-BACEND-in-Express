import express from 'express';
import { orderPlace } from '../controller/order.controller.js';
const router = express.Router();
router.post("/save",orderPlace);
export default router;