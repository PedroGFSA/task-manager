import express from "express";
import { getAllTasks, getSingleTask, createTask, updateTask, deleteTask } from "../controllers/tasksController";

const router = express.Router(); 

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

export default router;
