import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { getTasks } from '../api/api';
import '../styles/styles.css'; // Ensure the CSS file is imported

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const handleAdd = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleUpdate = (updatedTask) => {
    setTasks(tasks.map(task => (task._id === updatedTask._id ? updatedTask : task)));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task._id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.status;
    if (filter === 'incomplete') return !task.status;
    return true;
  });

  return (
    <div className="task-list-container">
      <TaskForm onAdd={handleAdd} />
      <div>
        <label htmlFor="filter">Filter tasks: </label>
        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div className="task-list">
        {filteredTasks.map((task) => (
          <TaskItem key={task._id} task={task} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;