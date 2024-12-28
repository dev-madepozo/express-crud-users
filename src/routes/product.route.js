import express from "express"
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  updateProduct
} from "../controllers/product.controller.js"

const router = express.Router()

router.get('/', getAllProducts)
router.get('/:productId', getProductById)
router.get('/category/:category', getProductsByCategory)
router.post('/', createProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

export default router
