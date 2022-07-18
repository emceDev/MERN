import express from "express";
import {
	getUser,
	setUser,
	updateUser,
	deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUser);
router.post("/", setUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export { router };
