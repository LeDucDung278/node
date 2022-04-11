import express from "express";
import cors from "cors"
import morgan from "morgan";

const app = express();

// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// connection
const PORT = 3636;
app.listen(PORT, () => {
    console.log("Server:", PORT);
})