import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import { userRoutes } from './college/routes/user.js';
import { studentRouter } from './college/routes/student.js';
dotenv.config()

const app = express()

console.log(process.env.FRONTEND_URL)
app.use(express.json())
app.use(cors(
    {
        origin: [process.env.FRONTEND_URL],
        credentials: true
    }
))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/' , (re,res) => {
    res.send("Hello world");
})
app.use('/' , userRoutes)
app.use('/' , studentRouter)

mongoose.connect(process.env.DB_URL, {
    dbName: "DTE_ERP_SIH",
})
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
})
