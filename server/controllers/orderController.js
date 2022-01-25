import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
// import Product from "../models/orderModel";

// @desc    Create new order
// @route   POST /api/products
// @access  Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentChoice,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    return
  } else {

    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentChoice,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createOrder = await order.save()

    res.status(201).json(createOrder)


  }
});

export { addOrderItems }