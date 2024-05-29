import express from "express";
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

export const getSingleTask = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({"_id": id});  
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ error:"Couldn't get the task requested" })
  }
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

export const updateTask = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate({"_id": id}, req.body, {"new":true});
    
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({error: "Couldn't update the requested task"});
  }

}

export const deleteTask = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({"_id": id})
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({error:"Couldn't delete the requested task"})
  }

}


