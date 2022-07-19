import express from "express";
import {
	activateOrder,
	deleteOrder,
	getOrder,
	getOrderList,
	setOrder,
	updateOrder,
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";

const orderRouter = express.Router();

orderRouter.get("/", protect, getOrder);
orderRouter.post("/", protect, setOrder);
orderRouter.put("/:id", protect, updateOrder);
orderRouter.put("/:id/activate", protect, activateOrder);
orderRouter.delete("/:id", protect, deleteOrder);
orderRouter.get("/orderList", protect, getOrderList);

export { orderRouter };
