import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { toggleTask, deleteTask } from "./redux/tasksSlice";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import "./components/taskFilter.css";

const App: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleToggleTask = (id: number) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="task">
      <h1>Task Manager</h1>
      <AddTask />
      <TaskFilter filter={filter} onChangeFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
