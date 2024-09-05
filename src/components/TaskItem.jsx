import React, { useState } from 'react';
import { deleteTask, updateTask } from '../api/api';
import { toast } from 'react-toastify';
import Modal from './modal/Modal';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleStatusChange = async () => {
    try {
      const updatedTask = await updateTask(task._id, { ...task, status: !task.status });
      onUpdate(updatedTask);
      toast.success(`Task is ${!task.status ? 'completed' : 'incomplete'}!`, {
        icon: '✅',
      });
    } catch (error) {
      toast.error('Failed to update task status.');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task._id);
      onDelete(task._id);
      toast.success('Task deleted successfully!', {
        icon: '✅',
      });
    } catch (error) {
      toast.error('Failed to delete task.');
    }
  };

  const handleEdit = async () => {
    try {
      const updatedTask = await updateTask(task._id, { name, description });
      onUpdate(updatedTask);
      setIsEditing(false);
      toast.success('Task updated successfully!', {
        icon: '✅',
      });
    } catch (error) {
      toast.error('Failed to update task.');
    }
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.status}
        onChange={handleStatusChange}
      />
      <span style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
        {task.name}: {task.description}
      </span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)} title="Edit Task">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="textarea-margin"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          style={{ width: '100%' }}
        />
        <button onClick={handleEdit}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </Modal>
    </div>
  );
};

export default TaskItem;