import express from "express";
import cors from "cors"
import morgan from "morgan";
import mongoose from "mongoose";

import productRoute from "../routes/product"

const app = express();

// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// router
app.use("/api",productRoute)

// connect database
mongoose.connect('mongodb://localhost:27017/assignment')
    .then(() => console.log("Success database"))
    .catch((error) => console.log(error))

// connection
const PORT = 3636;
app.listen(PORT, () => {
    console.log("Server:", PORT);
})