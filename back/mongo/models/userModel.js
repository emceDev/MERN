import { mongoose } from "mongoose";

export const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "please fill name data"],
	},
	email: {
		type: String,
		required: [true, "please fill email data"],
	},

	surname: {
		type: String,
		required: [true, "please fill surname data"],
	},
	password: {
		type: String,
		required: [true, "please fill password data"],
	},
	orders: {
		type: Array,
	},
});
export const orderModel = mongoose.model("users", userSchema);
