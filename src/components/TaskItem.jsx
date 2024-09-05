import React from 'react';
import { updateTask } from '../api/api.js';


const TaskItem = ({ task, onUpdate, onDelete }) => {
  const handleStatusChange = async () => {
    const updatedTask = await updateTask(task._id, { ...task, status: !task.status });
    onUpdate(updatedTask);
  };

  const handleDelete = async () => {
    await deleteTask(task._id);
    onDelete(task._id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.status}
        onChange={handleStatusChange}
      />
      <span style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
        {task.name}: {task.description}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;