import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  deadline: {
    type: Date,
  },
}, {timestamps: true});

const Task = mongoose.model('Task', taskSchema);
export default Task;
