import express from "express";
import connection from "./db/connection";
import dotenv from "dotenv"
import tasksRouter from "./routes/tasks";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/hello", () => {
  console.log("hello world");
})

app.use("/api/tasks", tasksRouter);

const port = 3000
const start = async () => { 
  try {
    connection(process.env.DB_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    })
  } catch (error) {
    console.log(error);
  }
}


start();