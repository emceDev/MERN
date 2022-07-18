import express from "express";
import {
	logUser,
	setUser,
	updateUser,
	deleteUser,
	getUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const userRouter = express.Router();

userRouter.get("/login", logUser);
userRouter.post("/", setUser);
userRouter.get("/user", protect, getUser);
userRouter.put("/:id", protect, updateUser);
userRouter.delete("/:id", protect, deleteUser);

export { userRouter };
