import { useState } from 'react';
import styles from './AddTask.module.css';
import { Task } from '../types/Task';

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'Pending' | 'InProgress' | 'Completed'>('Pending');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');

  const handleSubmit = () => {
    onAddTask({
      name,
      description,
      status,
      priority,
    });
    setName('');
    setDescription('');
    setStatus('Pending');
    setPriority('Low');
  };

  return (
    <div className={styles.addTask}>
      <input
        placeholder="שם משימה"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select name="status" value={status} onChange={(e) => setStatus(e.target.value as 'Pending' | 'InProgress' | 'Completed')}>
        <option value="Pending">Pending</option>
        <option value="InProgress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select name="priority" value={priority} onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <textarea
        placeholder="תיאור"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>הוסף משימה</button>
    </div>
  );
};

export default AddTask;
