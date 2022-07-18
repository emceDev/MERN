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
	type: {
		type: String,
		required: [true, "please fill type of user"],
	},
	orders: {
		type: Array,
	},
});
export const userModel = mongoose.model("user", userSchema);
