import styles from './Task.module.css';
import { Task } from '../types/Task';

interface TaskProps {
    task: Task;
    onDelete: (id: string) => void;
    onProgress: (id: string) => void;
}

const TaskItem = ({ task, onDelete, onProgress }: TaskProps) => (
    <div className={styles.taskItem}>
        <div className={styles.taskInfo}>
            <h3>name: {task.name}</h3>
            <p>status: {task.status}</p>
            <p>priority: {task.priority}</p>
            <p>description: {task.description}</p>
        </div>
        <div className={styles.taskButtons}>
            <button className={styles.Button1} onClick={() => onProgress(task.id)}>התקדם</button>

            <button className={styles.Button2} onClick={() => onDelete(task.id)}>מחק</button>
        </div>
    </div>
);

export default TaskItem;
