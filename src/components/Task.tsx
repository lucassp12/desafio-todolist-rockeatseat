import { Trash, Circle, CheckCircle } from '@phosphor-icons/react';
import styles from './Task.module.css';

export interface TaskType {
    id: string;
    content: string;
    isComplete: boolean;
}

interface TaskProps {
    task: TaskType;
    onCompleteTask: (taskId: string) => void;
    onDeleteTask: (taskId: string) => void;
}

export function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {

    function handleCompleteTask() {
        onCompleteTask(task.id);
    }

    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    return (
        <div className={styles.task}>
            <button
                type='button'
                className={task.isComplete
                    ? styles.buttonChecked
                    : styles.buttonCheck}
                onClick={handleCompleteTask}>
                {task.isComplete
                    ? <CheckCircle weight="fill" />
                    : <Circle />}
            </button>
            <p
                className={task.isComplete
                    ? styles.contentChecked
                    : styles.contentCheck}>
                {task.content}
            </p>
            <button
                className={styles.trash}
                onClick={handleDeleteTask}>
                <Trash />
            </button>
        </div>
    )
}