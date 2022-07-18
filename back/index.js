import http from "http";
import "dotenv/config.js";
import { register } from "./mongo/User/register.js";
import { log } from "./mongo/User/log.js";
import { createOrder } from "./mongo/Orders/createOrder.js";
import { client } from "./mongo/config.js";
import express from "express";
import { router } from "./routes/orderRoutes.js";

const app = express();

app.listen(3001, () => {
	console.log("server is on");
});

app.use("/api/order", router);

client();
// register();
// log();
// createOrder();
//
