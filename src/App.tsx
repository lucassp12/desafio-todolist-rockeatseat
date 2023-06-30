import { useState } from 'react';
import { Header } from "./components/Header";
import styles from './App.module.css';
import { VoidList } from "./components/VoidList";
import { NewTask } from "./components/NewTask";
import { InfoTasks } from "./components/InfoTasks";
import { Task, TaskType } from "./components/Task";

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const completedTasks = (tasks.filter(task => task.isComplete === true)).length;

  const infoTask = {
    createdTasks: tasks.length,
    completedTasks: completedTasks,
  }

  function createTask(newTask: TaskType) {
    setTasks([...tasks, newTask])
  }

  function CompleteTask(taskId: string) {
    const TasksWithoutCompletedOne = tasks.map(task => {
      if (task.id === taskId) {
        task.isComplete = !task.isComplete;
      }
      return task;
    })

    setTasks(TasksWithoutCompletedOne);
  }

  function deleteTask(taskId: string) {
    const TasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskId
    })
    setTasks(TasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper} >
        <div>
          <NewTask onCreateTask={createTask} />
          <InfoTasks info={infoTask} />
          {tasks.map(task => {
            return (
              <Task key={task.id}
                task={task}
                onCompleteTask={CompleteTask}
                onDeleteTask={deleteTask} />
            )
          })}
          {tasks.length === 0 && <VoidList />}
        </div>
      </div>
    </div >
  )
}


