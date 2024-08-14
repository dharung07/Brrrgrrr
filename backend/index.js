import express from "express";
import mongoose from "mongoose";
import { MongoDBURL } from "./config.js";
import ingredientsRoute from "./routes/ingredientsRoute.js";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

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