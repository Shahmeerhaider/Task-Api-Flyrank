
# Task-Api-Flyrank
# Task API

A simple CRUD (Create, Read, Update, Delete) API built using Express.js and Node.js. The API manages a list of tasks stored in memory and provides endpoints to create, read, update, and delete tasks. Swagger UI is included for interactive API documentation and testing.

## Features

* Create a new task
* Get all tasks
* Get a task by ID
* Update an existing task
* Delete a task
* Input validation
* Proper HTTP status codes
* Swagger UI documentation

## Technologies Used

* Node.js
* Express.js
* Swagger UI Express

## Installation

Clone the repository:

```bash
git clone <your-github-repository-link>
cd week2task1
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
npm run dev
```

The server will start on:

```text
http://localhost:3000
```

Swagger UI:

```text
http://localhost:3000/docs
```

## API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /          | API Information |
| GET    | /health    | Health Check    |
| GET    | /tasks     | Get All Tasks   |
| GET    | /tasks/:id | Get Task By ID  |
| POST   | /tasks     | Create Task     |
| PUT    | /tasks/:id | Update Task     |
| DELETE | /tasks/:id | Delete Task     |

## Example cURL Request

```bash
curl -i http://localhost:3000/tasks
```

Example Response:

```json
[
  {
    "id": 1,
    "title": "Complete assignment",
    "done": false
  }
]
```

## Status Codes

* 200 OK
* 201 Created
* 204 No Content
* 400 Bad Request
* 404 Not Found

## Swagger UI Screenshot

<img width="1883" height="912" alt="image" src="https://github.com/user-attachments/assets/fbe480ed-f00d-42c8-8e4b-6f2de8f99fde" />

## Author

Shahmeer Haider

