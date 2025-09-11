import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/' , (re,res) => {
    res.send("Hello world");
})

mongoose.connect(process.env.DB_URL, {
    dbName: "DTE_ERP_SIH",
})
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
})
