import express from 'express'
import asyncHadler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// @desc fetch all products
// @route GET /api/products
// @access Public
router.get(
  '/',
  asyncHadler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)
// @desc fetch single product
// @route GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHadler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
