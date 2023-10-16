import express from "express";
import userRouter from "./routes/user";
import authRouter from "./routes/auth";
import jwtRouter from "./routes/jwt";
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
app.use("/auth", authRouter);
app.use("/jwt", jwtRouter); // Todo remove when auth is implemented

app.listen(port);
