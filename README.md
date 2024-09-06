# To-Do List Application - Frontend

This is the frontend part of the To-Do List application built using React.js.

## Requirements

### Components:
- **Task List**: Display all tasks.
- **Task Form**: Add a new task.
- **Task Item**: Display individual tasks with options to mark as complete/incomplete, edit, or delete.

### Functionality:
- Create new tasks from the form.
- Mark tasks as complete/incomplete.
- Edit task names/descriptions.
- Delete tasks.
- Display task status visually (e.g., strike-through for completed tasks).
- Filter tasks to show "All", "Completed", or "Incomplete".

## Installation and Setup

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>/client
VITE_API_URL=https://todo-server-task.vercel.app/api
	Install frontend dependencies:
	```bash
yarn dev
```

Create a .env file in the client directory and add the API URL:

Start the frontend development server:

Running the Application
Ensure the backend server is running.
Ensure the frontend development server is running.
Open your browser and navigate to http://localhost:3000 to view the application.
Usage
Add Task: Use the form to add a new task.
Edit Task: Click the "Edit" button on a task to edit its name or description.
Delete Task: Click the "Delete" button on a task to remove it.
Mark as Complete/Incomplete: Click the checkbox on a task to mark it as complete or incomplete.
Filter Tasks: Use the filter dropdown to show "All", "Completed", or "Incomplete" tasks.