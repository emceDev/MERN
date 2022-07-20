import asyncHandler from "express-async-handler";
import { orderModel } from "../mongo/models/orderModel.js";
import { userModel } from "../mongo/models/userModel.js";

export const getOrder = asyncHandler(async (req, res) => {
	let orders = await orderModel.find({ creator: req.user.id });
	res.status(200).json(orders);
});

// creator - creates order - Transaction needed here
export const setOrder = asyncHandler(async (req, res) => {
	const { description, name } = req.body;
	try {
		const order = await orderModel.create({
			name,
			creator: req.user.id,
			worker: null,
			description,
			status: "waiting",
			commment: null,
		});
		await userModel.findByIdAndUpdate(
			req.user.id,
			{ $push: { orders: order._id } },
			{ new: true }
		);
		return res.json({ order });
	} catch (error) {
		res.json({ message: "failed to set" });
		throw Error("failed to update order ");
	}
});
// updates order
export const updateOrder = asyncHandler(async (req, res) => {
	const order = await orderModel.findById(req.params.id);
	console.log("==========");
	console.log(order);
	console.log("==========");
	console.log(req.body);
	console.log("==========");
	console.log(req.user.id);
	console.log("==========");
	if (!order) {
		res.status(400);
		throw new Error("order not found");
	}
	const updatedOrder = await orderModel.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	console.log("==========");
	console.log(updatedOrder);
	console.log("==========");
	res.status(200).json(updatedOrder);
});
// deletes order by id
export const deleteOrder = asyncHandler(async (req, res) => {
	const order = await orderModel.findById(req.params.id);
	if (!order) {
		res.status(400);
		throw new Error("order not found");
	}
	await orderModel.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ new: false }
	);

	return res.status(200).json({ id: req.params.id });
});

// gets all active orders
export const getOrderList = asyncHandler(async (req, res) => {
	// check token if user === worker-pass result
	let orders = await orderModel.find({ status: "waiting" });
	res.status(200).json(orders);
});
// activates order - Transaction needed here
export const activateOrder = asyncHandler(async (req, res) => {
	const order = await orderModel.findById(req.params.id);
	if (!order) {
		res.status(400);
		throw new Error("order not found");
	}
	// transaction should be made here.
	try {
		await orderModel.findByIdAndUpdate(
			req.params.id,
			{ $set: { status: "in-progress", worker: req.user.id } },
			{ new: false }
		);
		await userModel.findByIdAndUpdate(
			req.user.id,
			{ $push: { orders: req.params.id } },
			{ new: false }
		);
		return res.json({ order });
	} catch (error) {
		throw Error("error at changing order status or setting user's orders");
	}
});

export const getUserOrders = asyncHandler(async (req, res) => {
	const userData = await userModel.findById(req.user._id);
	if (!userData.orders) {
		res.status(400).json({ message: "no orders found" });
	}

	return Promise.all(
		userData.orders.map(async (order) => {
			return await orderModel.findById(order);
		})
	).then((x) => res.status(200).json(x));
});
