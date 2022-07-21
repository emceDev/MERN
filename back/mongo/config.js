import { mongoose } from "mongoose";

const db_user = process.env.MONG_USER;
const db_pass = process.env.MONG_PASS;

const uri =
	"mongodb+srv://Mateusz:" +
	db_pass +
	"@db1.ypmywfe.mongodb.net/AgroFleet?retryWrites=true&w=majority";

export const client = async () => {
	try {
		console.log("connection success");
		return await mongoose.connect(uri);
	} catch (error) {
		console.log(uri);
		console.log("error with connection", error);
	}
};
