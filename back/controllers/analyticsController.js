import { analyticsModel } from "../mongo/models/analyticsModel.js";
import asyncHandler from "express-async-handler";

export const logEntry = asyncHandler(async (req, res) => {
	const entries = await analyticsModel.findByIdAndUpdate(
		"62de9261114039c48521f338",
		{ $inc: { entries: 1 } },
		{ new: true }
	);
	res.status(200).json(entries);

	// analyticsModel.update({ entries: 0 });
	// res.json(entries);
});
