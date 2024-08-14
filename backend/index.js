import express from "express";
import mongoose from "mongoose";
import ingredientsRoute from "./routes/ingredientsRoute.js";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MongoDBURL = process.env.MONGODB_URL;

// middleware
app.use(express.json());

// cors
app.use(cors());

app.use('/ingredients', ingredientsRoute);

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome');
})


mongoose
    .connect(MongoDBURL)
    .then(() => {
        console.log("Connected");
        app.listen(PORT, () => {
            console.log(`App is listening at ${PORT}`);
        })
    })
    .catch(() => {
        console.log("Not connected");
    })