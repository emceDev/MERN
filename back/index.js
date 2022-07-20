import "dotenv/config.js";
import { client } from "./mongo/config.js";
import express, { json } from "express";
import { orderRouter } from "./routes/orderRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import cors from "cors";
const app = express();

const whitelist = ["http://localhost:3000"];
const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: false,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);

app.listen(3002, () => {
	console.log("server is on");
});

client();
// register();
// log();
// createOrder();
//
