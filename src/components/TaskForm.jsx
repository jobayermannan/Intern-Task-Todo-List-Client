import React, { useState } from 'react';
import { addTask } from '../api/api';
import { toast } from 'react-toastify';

const TaskForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await addTask({ name, description, status: false });
      onAdd(newTask);
      setName('');
      setDescription('');
      toast.success('Task added successfully!', {
        icon: '✅',
      });
    } catch (error) {
      toast.error('Failed to add task.');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;