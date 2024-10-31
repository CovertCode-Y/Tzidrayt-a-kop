import TaskItem from './Task';
import { Task } from '../types/Task';
import styles from './TasksList.module.css';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onUpdateStatus: (id: string) => void;
}

const TaskList = ({ tasks, onDelete, onUpdateStatus }: TaskListProps) => (
  
  <div className={styles.taskList}>
<h2>Missions</h2>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}         task={task}
        onDelete={onDelete}
        onProgress={onUpdateStatus}
      />
    ))}
  </div>
);

export default TaskList;
