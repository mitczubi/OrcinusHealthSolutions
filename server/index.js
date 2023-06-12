import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import appointmentsRoute from "./routes/appointments.js"

const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// middlewares
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/appointments", appointmentsRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen('3001', () => {
    connect()
    console.log("Connected to backend");
})