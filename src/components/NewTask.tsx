import styles from './NewTask.module.css';
import { PlusCircle } from "@phosphor-icons/react";
import { TaskType } from './Task';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface NewTaskProps {
    onCreateTask: (task: TaskType) => void;
}

export function NewTask({ onCreateTask }: NewTaskProps) {
    const [contentTask, setContentTask] = useState('');

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setContentTask(event.target.value);
    }

    function handleCreateTask(event: FormEvent) {
        event.preventDefault()
        onCreateTask({
            id: uuidv4(),
            content: contentTask,
            isComplete: false,
        });
        setContentTask('');
    }

    return (
        <div className={styles.createTask}>
            <form onSubmit={handleCreateTask}>
                <input
                    placeholder="Adicione uma nova tarefa"
                    value={contentTask}
                    onChange={handleNewTaskChange}
                />
                <button type="submit">Criar <PlusCircle weight="bold" />
                </button>
            </form>
        </div>
    )
}