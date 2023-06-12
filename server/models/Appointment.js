import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    summary: {
        type: String,
        required: true
    }
})

export default mongoose.model("Appointment", AppointmentSchema);