import express from "express";
import jwt from "jsonwebtoken";
import {
  authenticateUser,
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../../prisma/utils/user";

const router = express.Router();

const secret = process.env.JWT_SECRET ?? "";
const expiresIn = process.env.JWT_EXPIRES_IN ?? "24h";

// User Login
router.post("/login", async (req, res) => {
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
// Users List
router.get("/", async (req, res) => {
  try {
    const result = await getUsers();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// User Create
router.get("/new", async (req, res) => {
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

// User Details
router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const result = await getUser(id);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  })
  .put((req, res) => {
    const {
      params: { id },
      body,
    } = req;
    try {
      const result = updateUser(id, body); // body is any
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  })
  .delete((req, res) => {
    const { id } = req.params;
    try {
      const result = deleteUser(id);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  });

export default router;
