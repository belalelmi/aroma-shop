import express from "express";

const router = express.Router();
import { addOrderItems, getOrderById, updateOrderToPaid } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems)
router.route('/:id').get(getOrderById)
router.route('/:id/pay').put(updateOrderToPaid)


export default router;
