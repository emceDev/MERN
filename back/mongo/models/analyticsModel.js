import { mongoose } from "mongoose";

export const analyticsSchema = mongoose.Schema({
	entries: {
		type: Number,
		required: [true, "lack of number"],
	},
});
export const analyticsModel = mongoose.model("analytics", analyticsSchema);
