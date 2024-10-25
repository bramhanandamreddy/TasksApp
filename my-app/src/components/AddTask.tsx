import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import "./taskFilter.css";

const AddTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle("");
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="add-task">
      <input
        className="input"
        type="text"
        placeholder="Add new Task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={handleEnter}
      />
      <button className="button" onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
