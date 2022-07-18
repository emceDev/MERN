import asyncHandler from "express-async-handler";
import { orderModel } from "../mongo/models/orderModel.js";

export const getOrder = asyncHandler(async (req, res) => {
	let orders = await orderModel.find();
	res.status(200).json(orders);
});
export const setOrder = asyncHandler(async (req, res) => {
	const order = await orderModel.create({
		name: "order12",
		creator: "62d18d0c104f8021fe678c80",
		worker: null,
		description: "kasdmas;k",
		status: "waiting",
		commment: null,
	});
	res.json(order);
});

export const updateOrder = asyncHandler(async (req, res) => {
	const order = await orderModel.findById(req.params.id);
	if (!order) {
		res.status(400);
		throw new Error("order not found");
	}
	const updatedOrder = await orderModel.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	res.status(200).json(updatedOrder);
});

export const deleteOrder = asyncHandler(async (req, res) => {
	const order = await orderModel.findById(req.params.id);
	if (!order) {
		res.status(400);
		throw new Error("order not found");
	}
	const deleteOrder = await order.remove();
	res.status(200).json({ id: req.params.id });
});
