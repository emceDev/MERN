import { ObjectId } from "mongodb";
import { client } from "../../mongo/config.js";

const dbName = "AgroFleet";
const orderData = {
	name: "order",
	creator: "62d18d0c104f8021fe678c80",
	worker: "",
	description: "",
	status: "",
	commment: "",
};
export async function createOrder() {
	const users = client.db("AgroFleet").collection("Users");
	// let u = await users.findOne({ _id: new ObjectId(orderData.creator) });
	// console.log(u);
	// console.log(`ObjectId("${orderData.creator}")`);
	placeOrder(orderData).then((x) => console.log(x));
}

async function placeOrder(orderData) {
	const transactionOptions = {
		readConcern: { level: "snapshot" },
		writeConcern: { w: "majority" },
		readPreference: "primary",
	};
	const x = await client.connect();
	const session = x.startSession();
	try {
		session.startTransaction(transactionOptions);
		console.log("appending to orders");
		const orders = client.db("AgroFleet").collection("Orders");
		const orderResult = await orders.insertOne(
			{
				orderData,
			},
			{ session }
		);
		let orderId = orderResult.insertedId;
		console.log("oderd id: " + orderId);
		console.log("Appending in user.orders");
		const users = client.db("AgroFleet").collection("Users");
		let query = { _id: new ObjectId(orderData.creator) };
		let update = { $push: { orders: orderId } };
		await users.updateOne(query, update, { session });
		await session.commitTransaction();
		console.log("Transaction successfully committed.");
	} catch (error) {
		if (
			error instanceof MongoError &&
			error.hasErrorLabel("UnknownTransactionCommitResult")
		) {
			// add your logic to retry or handle the error
		} else if (
			error instanceof MongoError &&
			error.hasErrorLabel("TransientTransactionError")
		) {
			// add your logic to retry or handle the error
		} else {
			console.log(
				"An error occured in the transaction, performing a data rollback:" +
					error
			);
		}
		await session.abortTransaction();
	} finally {
		await session.endSession();
	}
}
