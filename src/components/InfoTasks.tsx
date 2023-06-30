import styles from './InfoTasks.module.css';

interface InfoTasksType {
    createdTasks: number;
    completedTasks: number;
}

interface InfoTasksProps {
    info: InfoTasksType;
}

export function InfoTasks({ info }: InfoTasksProps) {
    return (
        <div className={styles.infoTasks} >
            <header>
                <div className={styles.createdTasks}>
                    <strong>Tarefas criadas</strong>
                    <span>{info.createdTasks}</span>
                </div>
                <div className={styles.completedTasks}>
                    <strong>Concluídas</strong>
                    <span>{info.completedTasks} de {info.createdTasks}</span>
                </div>
            </header>
        </div>
    )
}