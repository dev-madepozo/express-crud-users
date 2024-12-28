import { Product } from '../models/product.model.js'

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category })
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json({
      message: "Product created successfully",
      product
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true })
    res.status(200).json({
      message: "Product updated successfully",
      product
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.productId)
    res.status(204).json({ message: "Product deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
