import { client } from "../../mongo/config.js";

export async function checkIfExists(userData) {
	try {
		console.log("===CHECKING IF USER EXISTS===");
		const database = client.db("AgroFleet");
		const users = database.collection("Users");
		const query = { email: userData.email };
		const result = await users.findOne(query);
		return result === null ? false : result;
	} catch {
		console.log("CHECK IF EXISTS CATCH");
		await client.close();
	}
}
