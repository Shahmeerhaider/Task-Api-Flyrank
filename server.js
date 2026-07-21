const express = require("express");
const swaggerUi = require("swagger-ui-express");
const openApiDocument = require("./openapi.json");

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
  {
    id: 1,
    title: "Complete assignment",
    done: false,
  },
  {
    id: 2,
    title: "Study Express",
    done: true,
  },
  {
    id: 3,
    title: "Practice CRUD",
    done: false,
  },
];

/*
Stage 1 Endpoints
*/

app.get("/", (req, res) => {
  res.json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"],
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

/*
GET ALL TASKS
*/

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

/*
GET SINGLE TASK
*/

app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({
      error: `Task ${id} not found`,
    });
  }

  res.status(200).json(task);
});

/*
CREATE TASK
*/

app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      error: "Title is required",
    });
  }

  const newTask = {
    id: tasks.length
      ? Math.max(...tasks.map((t) => t.id)) + 1
      : 1,
    title,
    done: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

/*
UPDATE TASK
*/

app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({
      error: `Task ${id} not found`,
    });
  }

  const { title, done } = req.body;

  if (
    req.body === null ||
    Object.keys(req.body).length === 0
  ) {
    return res.status(400).json({
      error: "Request body cannot be empty",
    });
  }

  if (
    title !== undefined &&
    title.trim() === ""
  ) {
    return res.status(400).json({
      error: "Title cannot be empty",
    });
  }

  if (title !== undefined) {
    task.title = title;
  }

  if (done !== undefined) {
    task.done = done;
  }

  res.status(200).json(task);
});

/*
DELETE TASK

*/

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = tasks.findIndex(
    (t) => t.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      error: `Task ${id} not found`,
    });
  }

  tasks.splice(index, 1);

  res.status(204).send();
});

/*
SWAGGER
*/

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(openApiDocument)
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
