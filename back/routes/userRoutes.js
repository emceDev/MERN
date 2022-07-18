import express from "express";
import {
	logUser,
	setUser,
	updateUser,
	deleteUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/login", logUser);
userRouter.post("/", setUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export { userRouter };
