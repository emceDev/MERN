import { mongoose } from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";

const db_user = process.env.MONG_USER;
const db_pass = process.env.MONG_PASS;

const uri =
	"mongodb+srv://Mateusz:" +
	db_pass +
	"@db1.ypmywfe.mongodb.net/AgroFleet?retryWrites=true&w=majority";

export const client = async () => {
	try {
		await mongoose.connect(uri);
		console.log("connection success");
	} catch (error) {
		console.log("error with connection", error);
	}
};
