import express from "express";
import jwt from "jsonwebtoken";
import userRouter from "./routes/user";
import dotenv from "dotenv";
import { authenticateJWT } from "./middlewares/authenticateJWT";

dotenv.config();

const app = express();

const port = 3000;
// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/user", userRouter, authenticateJWT);
app.use("/auth", userRouter);

app.listen(port);
