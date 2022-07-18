import { mongoose } from "mongoose";

const orderSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "please fill all data"],
	},
	creator: {
		type: String,
		required: [true, "please fill all data"],
	},

	worker: {
		type: String,
	},
	description: {
		type: String,
		required: [true, "please fill all data"],
	},
	status: {
		type: String,
	},
	comment: {
		type: String,
	},
});
// Setting collection here
export const orderModel = mongoose.model("Orders", orderSchema);
