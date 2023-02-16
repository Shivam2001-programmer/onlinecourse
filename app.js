import express from "express";

import {config} from "dotenv"
import ErrorMiddleware from "./middlewares/ErrorHandler.js"

import cookieParser from "cookie-parser"
import cors from "cors"

config({
    path:"./config/config.env"
})
const app = express()

// Using Middlewares
app.use(express.json())

app.use(
    express.urlencoded({
        extended:true,
    })
)


app.use(cookieParser())

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials: true,
    methods:["GET","POST", "PUT", "DELETE"],
})
)

// Importing & Using Routes
import course from "./routes/courseRoutes.js"
import user from  "./routes/userRoutes.js"
import payment from "./routes/paymentRoutes.js"
import other from "./routes/otherRoutes.js"

app.use("/api/v1", course)
app.use("/api/v1", user)
app.use("/api/v1",payment)
app.use("/api/v1",other)

export default app;

app.get("/",(req,res)=>res.send("<h1>Server is Working.click  <a href=${process.env.FRONTEND_URL}></h1>"))

app.use(ErrorMiddleware)

