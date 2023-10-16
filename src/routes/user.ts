import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../../prisma/utils/user";

const userRouter = express.Router();

// Users List
userRouter.get("/", async (req, res) => {
  try {
    const result = await getUsers();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// User Details
userRouter
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

export default userRouter;
