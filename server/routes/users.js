import express from "express";
import { updateUser, getUser } from "../controllers/usersController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

router.put("/:id", verifyUser, updateUser);
router.get("/:id", verifyUser, getUser)

export default router;