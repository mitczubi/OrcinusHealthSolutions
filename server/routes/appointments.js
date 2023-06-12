import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router()

// CREATE
router.post("/", async (req, res) => {
    
    const newApt = new Appointment(req.body);
    
    try {
        const savedApt = await newApt.save();
        res.status(200).json(savedApt)
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updatedApt = await Appointment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedApt);
    } catch(err) {
        res.status(500).json(err);
    }
})

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.status(200).json("Appointment deleted");
    } catch(err) {
        res.status(500).json(err);
    }
})

// READ
router.get("/:id", async (req, res) => {
    try {
        const apt = await Appointment.findById(req.params.id);
        res.status(200).json(apt)
    } catch(err) {
        res.status(500).json(err);
    }
})

// READ ALL
router.get("/", async (req, res) => {
    try {
        const apts = await Appointment.find();
        res.status(200).json(apts)
    } catch(err) {
        res.status(500).json(err);
    }
})

export default router;