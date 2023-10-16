import express from "express";
import jwt from "jsonwebtoken";

const jwtRouter = express.Router();

const secret = process.env.JWT_SECRET ?? "";
const expiresIn = process.env.JWT_EXPIRES_IN ?? "24h";

// Test token
jwtRouter.get("/test", async (req, res) => {
  try {
    const user = { id: 1 };
    if (user) {
      const token = jwt.sign({ user: user.id }, secret, {
        expiresIn,
      });

      console.log(token);
      res.json({ token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default jwtRouter;
