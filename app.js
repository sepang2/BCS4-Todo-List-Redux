const express = require("express"); // import express from 'express';
const cors = require("cors");
const todosRouter = require("./routes/todos");

const app = express();

const port = 3010;

app.use(cors());
app.use(express.json()); // json 형태로 받기
app.use(express.urlencoded({ extended: true })); // urlencoded 형태로 받기
app.use("/todos", todosRouter);

app.get("/", (req, res) => {
  return res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`🚀 Server is listening on port : ${port}`);
});
