import express from "express";
import cors from "cors"
import morgan from "morgan";
import mongoose from "mongoose";
require("dotenv").config()

import productRoute from "../routes/product"
import categoryRoute from "../routes/category"
import authRoute from "../routes/auth"

const app = express();

// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// router
app.use("/api",productRoute)
app.use("/api",categoryRoute)
app.use("/api",authRoute);

// connect database
mongoose.connect(process.env.DB_URLL || "mongodb://localhost:27017/assignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
    .then(() => console.log("Success database"))
    .catch((error) => console.log(error))

// connection
const PORT = process.env.PORT || 3636;
app.listen(PORT, () => {
    console.log("Server:", PORT);
})