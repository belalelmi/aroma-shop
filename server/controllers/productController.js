import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // throw new Error("SomeError");
  res.json(products);
});

// @desc fetch SINGLE products
// @route GET /api/products/:id
//@acess Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});
// @desc Delete a product
// @route DELETE /api/products/:id
//@acess Public/Admin

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});
// @desc Create a product
// @route POST /api/products
//@acess Public/Admin

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Product Name",
    image: "/images/product.png",
    description: "Description",
    brand: "Brand",
    user: req.user._id,
    price: 0,
    countInStock: 0,
    numReviews: 0,
    category: "Category",
    content: [
      {
        name: 'Pomegranate',
        imgUrl: "/images/icons/pomegranate.png",
      },
      {
        name: 'Oud',
        imgUrl: "/images/icons/oud.png",
      },
      {
        name: 'Leather',
        imgUrl: "/images/icons/leather.svg",
      },
      {
        name: 'Olive Blossom',
        imgUrl: "/images/icons/olive.png",
      },
      {
        name: 'Lychee',
        imgUrl: "/images/icons/lychee.svg",
      },
      {
        name: 'Rose',
        imgUrl: "/images/icons/rose.png",
      },
      {
        name: 'Amber',
        imgUrl: "/images/icons/amber.png",
      },
    ]
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    description,
    brand,
    price,
    countInStock,
    numReviews,
    category,
    content,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.content = content
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})


export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview
};
