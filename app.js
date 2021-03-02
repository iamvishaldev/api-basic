const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use("/todos", require("./routes/todoRoute"));

//DB Connection
const DB_URL =
  "mongodb+srv://cnq:wt4CyzYSFPtBici@cluster0.rukps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connection successful with DB");
  })
  .catch((err) => {
    console.log("Failed to connect with DB", err);
  });

app.get("/", (req, res) => {
  res.send("Learning API Bassics");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App Sterted");
});
