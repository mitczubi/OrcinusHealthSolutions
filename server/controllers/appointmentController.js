import Appointment from "../models/Appointment.js";
import { addCalendarEvent } from "../utils/sendCalendarEvent.js";

export const createAppointment = async (req, res, next) => {
    const newApt = new Appointment(req.body);
    
    try {
        const savedApt = await newApt.save();
        addCalendarEvent(newApt);
        res.status(200).json(savedApt)
    } catch(err) {
        next(err)
    }
}

export const updateAppointment = async (req, res, next) => {
    try {
        const updatedApt = await Appointment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedApt);
    } catch(err) {
        next(err)
    }
}

export const deleteAppointment = async (req, res, next) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.status(200).json("Appointment deleted");
    } catch(err) {
        next(err);
    }
}

export const getAppointment = async (req, res, next) => {
    try {
        const apt = await Appointment.findById(req.params.id);
        res.status(200).json(apt)
    } catch(err) {
        next(err)
    }
}

export const getAllAppointment = async (req, res, next) => {
    try {
        const apts = await Appointment.find();
        res.status(200).json(apts)
    } catch(err) {
        next(err)
    }
}