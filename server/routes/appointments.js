import express from "express";
import { createAppointment, deleteAppointment, getAllAppointment, getAppointment, updateAppointment } from "../controllers/appointmentController.js";

const router = express.Router()

router.post("/", createAppointment)
router.put("/:id", updateAppointment)
router.delete("/:id", deleteAppointment)
router.get("/:id", getAppointment)
router.get("/", getAllAppointment)

export default router;