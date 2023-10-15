import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import userRouter from "./routes/user";
import dotenv from "dotenv";

dotenv.config();

// Middleware function to authenticate JWT
const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET ?? "");
    // req.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token is invalid" });
  }
};

const app = express();

const port = 3000;
// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/user", userRouter, authenticateJWT);

app.listen(port);
