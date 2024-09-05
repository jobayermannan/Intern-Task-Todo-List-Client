import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { getTasks } from '../api/api';

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
    <div>
      <TaskForm onAdd={handleAdd} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      {filteredTasks.map((task) => (
        <TaskItem key={task._id} task={task} onUpdate={handleUpdate} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TaskList;