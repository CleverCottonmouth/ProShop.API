import { Router } from "express";
import {getProducts}  from "../controllers/product.controller.js";;
import {getProductById} from "../controllers/product.controller.js";
const router = Router();

// Routes
router.route("/getProduct").get(getProducts);
router.route("/getProductById").get(getProductById);


export default router;