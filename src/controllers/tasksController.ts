import express, { NextFunction } from "express";
import Task from "../models/tasksModel";

export const getAllTasks = async (req : express.Request, res : express.Response) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json( tasks );
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Something went wrong"})
  }
}

export const getSingleTask = () => {
  Task.findOne();
}

export const createTask = async (req: express.Request, res: express.Response) => {
  try {
    const task = await Task.create(req.body);
    console.log(task);
    res.status(201).json({task});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Task couldn't be created"});
  }
}

export const updateTask = () => {

}

export const deleteTask = () => {

}


