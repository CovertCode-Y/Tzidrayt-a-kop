import React from 'react';
import AddTask from "./components/AddTask";
import styles from "./App.module.css";
import { useState, useEffect } from 'react';
import { fetchTasks, addTask } from './services/apiService';
import { Task } from './types/Task';
import TaskList from './components/TasksList';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
      } catch (err) {
        console.error(err);
      }
    };
    loadTasks();
  }, []);

  const handleAddTask = async (newTask: Omit<Task, 'id'>) => {
    try {
      const addedTask = await addTask(newTask);
      setTasks((prevTasks) => [...prevTasks, addedTask]);
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  return (
    <div className={styles.app}>
      <h1>Military Operations Dashboard</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
