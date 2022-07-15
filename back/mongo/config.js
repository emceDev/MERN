const db_user = process.env.MONG_USER;
const db_pass = process.env.MONG_PASS;

import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
	"mongodb+srv://Mateusz:" +
	db_pass +
	"@db1.ypmywfe.mongodb.net/?retryWrites=true&w=majority";
console.log(uri);
export const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});
