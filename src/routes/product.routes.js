import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/product.controller.js';


router.route('/').get(getProducts)
router
  .route('/:id')
  .get(getProductById)

export default router;