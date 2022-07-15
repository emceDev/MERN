import { client } from "../../mongo/config.js";
import { checkIfExists } from "./findUser.js";

const dbName = "AgroFleet";
const userData = {
	name: "krzys",
	surname: "kowalsky",
	password: "pass",
	orders: [],
	email: "asd@email",
};
export async function register() {
	checkIfExists(userData).then((x) =>
		x !== false ? console.log("user exists") : insertUser(userData)
	);
}
async function insertUser(userData) {
	console.log("====REGISTRATION START====");
	try {
		console.log(userData);
		const database = client.db(dbName);
		const users = database.collection("Users");
		const result = await users.insertOne(userData);
		console.log(`A document was inserted with the _id: ${result.insertedId}`);
		return true;
	} catch (err) {
		console.log(err);
		console.log("REGISTRATION FAILED");

		await client.close();
	} finally {
		await client.close();
	}
}
