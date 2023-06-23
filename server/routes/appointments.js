import express from "express";
import {
  createAppointment,
  deleteAppointment,
  getAllAppointment,
  getAppointment,
  updateAppointment,
} from "../controllers/appointmentController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", createAppointment);
router.put("/:id", verifyAdmin, updateAppointment);
router.delete("/:id", verifyAdmin, deleteAppointment);
router.get("/:id", verifyAdmin, getAppointment);
router.get("/", verifyAdmin, getAllAppointment);

export default router;
