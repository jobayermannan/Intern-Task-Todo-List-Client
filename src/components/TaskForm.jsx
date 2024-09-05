import React, { useState } from 'react';
import { addTask } from '../api/api';
import { toast } from 'react-toastify';

const TaskForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Task name is required';
    }
    if (!description.trim()) {
      errors.description = 'Task description is required';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const newTask = await addTask({ name, description, status: false });
      onAdd(newTask);
      setName('');
      setDescription('');
      setErrors({});
      toast.success('Task added successfully!', {
        icon: '✅',
      });
    } catch (error) {
      toast.error('Failed to add task.');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        {errors.description && <span className="error">{errors.description}</span>}
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;