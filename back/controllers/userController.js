import asyncHandler from "express-async-handler";
import { userModel } from "../mongo/models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const setUser = asyncHandler(async (req, res) => {
	const { name, email, password, surname, type } = req.body;
	console.log(password, name, email);

	const alreadyExists = await userModel.findOne({ email });
	if (alreadyExists) {
		res.status(400);
		throw Error("user with given email already exists");
	}
	// pass hashing
	const salt = await bcrypt.genSalt(10);
	const hpass = await bcrypt.hash(password, salt);

	const user = await userModel.create({
		name,
		email,
		password: hpass,
		surname,
		type,
		orders: [],
	});

	if (user) {
		return res.status(201).json({ _id: user.id, email, name, surname, type });
	} else {
		res.status(400);
		throw new Error("invalid user data");
	}
});

export const logUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	let user = await userModel.findOne({ email });
	if (user && (await bcrypt.compare(password, user.password))) {
		res
			.status(200)
			.json({ _id: user.id, password: user.password, email: user.email });
	} else {
		res.status(400);
		throw new Error("invalid credentials");
	}
});

export const updateUser = asyncHandler(async (req, res) => {
	const user = await userModel.findById(req.params.id);
	if (!user) {
		res.status(400);
		throw new Error("order not found");
	}
	const updatedUser = await userModel.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	res.status(200).json(updatedUser);
});

export const deleteUser = asyncHandler(async (req, res) => {
	const user = await userModel.findById(req.params.id);
	if (!user) {
		res.status(400);
		throw new Error("order not found");
	}
	const deleteOrder = await user.remove();
	res.status(200).json({ id: req.params.id });
});
