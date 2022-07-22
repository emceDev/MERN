import "dotenv/config";
import { client } from "./mongo/config.js";
import express from "express";
import { orderRouter } from "./routes/orderRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express();

// const whitelist = ["http://localhost:3000"];
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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);

// nginx will serve the front

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../front/build")));
	app.get("*", (req, res) => {
		res.sendFile(
			path.resolve(__dirname, "../", "front", "build", "index.html")
		);
	});
} else {
	app.get("/", (req, res) => res.send("env set to dev not prod"));
}
// app.use(cors(corsOptions));
app.listen(3002, () => {
	console.log("server is on	");
});
client();
