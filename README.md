# To-Do List Application - Frontend

This is the frontend part of the To-Do List application built using React.js. Live preview of the application is available [here](https://todo-client-task.vercel.app/).

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
	git clone https://github.com/jobayermannan/Intern-Task-Todo-List-Client.git
	```

2. Install dependencies:
	```sh
	npm install
	```

3. Create a .env file in the root directory of the project and add the following line:
	```
	VITE_API_URL=https://todo-server-task.vercel.app/api
	```

4. Start the development server:
	```sh
	npm run dev
	```

5. Running the Application:

	- Ensure the backend server is running.
	- Ensure the frontend development server is running.
	- Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.