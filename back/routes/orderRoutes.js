import express from "express";
import {
	deleteOrder,
	getOrder,
	setOrder,
	updateOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getOrder);
router.post("/", setOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export { router };
