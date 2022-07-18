import "dotenv/config.js";
import { client } from "./mongo/config.js";
import express, { json } from "express";
import { orderRouter } from "./routes/orderRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);

app.listen(3001, () => {
	console.log("server is on");
});

client();
// register();
// log();
// createOrder();
//
