import React from "react";
//import { Task } from "../redux/tasksSlice";
import { Task } from "../redux/type";
import "./taskFilter.css";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => (
  <div>
    <input
      className="input"
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggle(task.id)}
    />
    <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.title}
    </span>
    <button className="button" onClick={() => onDelete(task.id)}>
      Delete
    </button>
  </div>
);

export default TaskItem;
