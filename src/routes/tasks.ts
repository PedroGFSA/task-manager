import express from "express";
import { getAllTasks, getSingleTask, createTask } from "../controllers/tasksController";

const router = express.Router(); 

router.route("/").get(getAllTasks).post(createTask);
router.route("/task").get(getSingleTask);

export default router;
