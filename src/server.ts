import express from "express";

const app = express();

app.use("/hello", () => {
  console.log("hello world");
})

const port = 3000
const start = async () => { app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
})}

start();