import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../../prisma/utils/user";

const router = express.Router();

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
    const result = await createUser(body);
    res.send(result);
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
      const result = updateUser(id, body);
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
