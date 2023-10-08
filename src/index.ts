import express from "express";
import userRouter from "./routes/user";

const app = express();

const port = 3000;
// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/user", userRouter);

app.listen(port);
