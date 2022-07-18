import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { userModel } from "../mongo/models/userModel.js";

export const protect = asyncHandler(async (req, res, next) => {
	const authHead = req.headers.authorization;
	let token;
	// headeres.auth.bearer.token
	if (authHead && authHead.startsWith("Bearer")) {
		try {
			token = authHead.split(" ")[1];
			const tokenId = jwt.verify(token, process.env.JWT_SECRET);
			req.user = await userModel.findById(tokenId.id).select("-password");
			next();
		} catch (err) {
			console.log(err);
			res.status(401);
			throw Error("no auth");
		}
	}
	if (!token) {
		res.status(401);
		throw Error("no auth token");
	}
});
