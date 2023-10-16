import express from "express";
import jwt from "jsonwebtoken";
import { authenticateUser, createUser } from "../../prisma/utils/user";

const auth = express.Router();

const secret = process.env.JWT_SECRET ?? "";
const expiresIn = process.env.JWT_EXPIRES_IN ?? "24h";

// User Login
auth.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await authenticateUser(username, password);

    if (user) {
      const token = jwt.sign({ user: user.id }, secret, {
        expiresIn,
      });

      res.json({ token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

// User Create
auth.get("/register", async (req, res) => {
  const { body } = req;
  try {
    const result = await createUser(body); // body is any
    // Create and sign a JWT
    const token = jwt.sign({ user: "user_id" }, secret, {
      expiresIn,
    });
    res.send({ result, token });
  } catch (error) {
    res.send(error);
  }
});
