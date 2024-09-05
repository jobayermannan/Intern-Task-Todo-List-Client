import React from 'react';
import TaskList from './components/TaskList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.css';

const App = () => {
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskList />
      <ToastContainer />
    </div>
  );
};

export default App;