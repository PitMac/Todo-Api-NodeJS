const express = require("express");
const { conn } = require("./db");
var cors = require("cors");
const todoRoute = require("./routes/todo.route");

const app = express();

const port = 4000;

app.use(cors());

app.use(express.json());

app.use("/api", todoRoute);

app.listen(port, () => {
  conn.query("SELECT NOW();", function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    console.log("server in port", port);
  });
});
