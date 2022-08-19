import { mongoose } from "mongoose";

const orderSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "please fill all data"],
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "user",
	},
	creatorName: {
		type: String,
	},
	worker: {
		type: String,
	},
	workerName: {
		type: String,
	},
	description: {
		type: String,
		required: [true, "please fill all data"],
	},
	createdDate: { type: Date, default: Date.now },
	startedDate: { type: Date },
	finishedDate: { type: Date },
	finishedBy: { type: String },
	status: {
		type: String,
	},
	comment: {
		type: String,
	},
});
// Setting collection here
export const orderModel = mongoose.model("Orders", orderSchema);
