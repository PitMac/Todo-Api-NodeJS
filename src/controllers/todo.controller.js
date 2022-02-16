const { conn } = require("../db");

const getTodos = (req, res) => {
  var query = "SELECT * FROM todos";
  conn.query(query, function (error, results) {
    if (error) res.status(400).json({ error: "Bad Request" });
    res.json({ tasks: results });
  });
};

const getTodo = (req, res) => {
  const id = req.params.id;
  var query = `SELECT * FROM todos WHERE id = ${id}`;
  conn.query(query, function (error, results) {
    if (error) res.status(400).json({ error: "Bad Request" });
    if (results.length === 0) res.status(404).json({ error: "Todo Not Found" });
    res.json(results[0]);
  });
};

const postTodo = (req, res) => {
  const { title, description } = req.body;
  var query = `INSERT INTO todos(title, description) VALUES ('${title}', '${description}');`;
  conn.query(query, function (error, results) {
    if (error) throw error;
    res.json({ message: "Created Todo", id: results.insertId });
  });
};

const putTodo = (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  var query = `UPDATE todos SET title = '${title}', description = '${description}' WHERE id = ${id} ;`;
  conn.query(query, function (error, results) {
    if (error) res.status(400).json({ error: "Bad Request" });
    res.json({ message: "Updated Todo" });
  });
};

const deleteTodo = (req, res) => {
  const id = req.params.id;
  var query = `DELETE FROM todos WHERE id = ${id} ;`;
  conn.query(query, function (error, results) {
    if (error) res.status(400).json({ error: "Bad Request" });
    res.json({ message: "Deleted Todo" });
  });
};

module.exports = { getTodos, getTodo, postTodo, putTodo, deleteTodo };
