const express = require("express");
const router = express.Router();
const todoModel = require("../model/todoModel");

router.get("/get_todos", (req, res) => {
  todoModel
    .find()
    .then((data) => {
      res.status(201).json({
        message: "Todo Fetched",
        data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "todo not found",
        err,
      });
    });
});

router.post("/save_todo", (req, res) => {
  //   console.log(req.body);
  const todoData = new todoModel(req.body);
  //   console.log(todoData);

  todoData
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Todo Saved",
        data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Failed to save Todo",
        err,
      });
    });
});

module.exports = router;
