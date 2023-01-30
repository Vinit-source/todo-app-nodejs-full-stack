// server.js
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:5500",
  optionsSuccessStatus: 200,
  methods: "GET, POST, DELETE",
};

app.use(cors(corsOptions));
app.use(express.json());
const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234567",
  database: "todos",
  //   authPlugins: "",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// app.use(express.json());

// app.all("/", cors(), function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
//   next();
// });

// READ
app.get("/todos", (req, res) => {
  connection.query("SELECT * FROM todo_list", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// CREATE
app.post("/todos", (req, res) => {
  console.log(req.body);
  const todos = req.body;
  task = todos[todos.length - 1];
  connection.query(
    "INSERT INTO todo_list (title, dueDate) VALUES (?,?)",
    [task.title, task.dueDate],
    (err, results) => {
      if (err) throw err;
      res.json({ message: "Todo added" });
    }
  );
});

// DELETE
app.delete("/todo/:id", (req, res) => {
  const todoId = req.params.id;
  const sql = `DELETE FROM todo_list WHERE id = ${todoId}`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    res.send("Todo deleted successfully");
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
