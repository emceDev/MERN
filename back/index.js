import http from "http";
import "dotenv/config.js";
import { register } from "./mongo/User/register.js";
import { log } from "./mongo/User/log.js";
import { createOrder } from "./mongo/Orders/createOrder.js";
const listener = (req, res) => {
	res.writeHead(200);
	res.end("Hiellow");
	console.log("user");
	console.log(process.env.MONG_USER);
};
const server = http.createServer(listener);
server.listen(3001);
// register();
// log();
createOrder();
//
