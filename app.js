import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from 'cookie-parser'
import ErrorHandler from "./middlewares/error.js";
import cors from "cors";


export const app = express();

config({
    path: "./data/config.env",
});

const router = express.Router();

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({

}));

// Using routes
app.use("/api/v1/users" , userRouter);
app.use("/api/v1/task" , taskRouter);




app.get('/', (req, res) => {
    res.send("Hello Everyone !");
});

// using errorMiddleware
app.use(ErrorHandler);