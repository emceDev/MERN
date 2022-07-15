import { client } from "../../mongo/config.js";
import { checkIfExists } from "./findUser.js";

const dbName = "AgroFleet";
const userData = {
	name: "krzys",
	surname: "kowalsky",
	password: "pass",
	orders: [],
	email: "asdf@email",
};
export async function log() {
	checkIfExists(userData)
		.then((userDataDb) =>
			userDataDb ? compare(userDataDb, userData) : console.log("no user")
		)
		.then((x) => {
			x ? console.log(x) : console.log("authentication failed");
		});
}

async function compare(userDataDb, userData) {
	console.log("COMPARING USER DATA AND USER DATA FROM DB");
	const udd = userDataDb;
	const ud = userData;
	if (ud.password !== udd.password || ud.email !== udd.email) {
		return false;
	} else {
		return true;
	}
}
