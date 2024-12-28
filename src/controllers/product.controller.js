export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json({ message: error.message })
  }
}

export const getProductById = async (req, res) => {

}

export const getProductsByCategory = async (req, res) => {

}

export const createProduct = async (req, res) => {}

export const updateProduct = async (req, res) => {}

export const deleteProduct = async (req, res) => {}
