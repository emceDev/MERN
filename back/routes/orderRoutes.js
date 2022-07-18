import express from "express";
import {
	deleteOrder,
	getOrder,
	setOrder,
	updateOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/", getOrder);
orderRouter.post("/", setOrder);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);

export { orderRouter };
