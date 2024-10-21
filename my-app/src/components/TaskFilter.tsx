import "./App.css";

interface TaskFilterProps {
  filter: string;
  onChangeFilter: (filter: string) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, onChangeFilter }) => (
  <div>
    <button onClick={() => onChangeFilter("all")}>All</button>
    <button onClick={() => onChangeFilter("completed")}>Completed</button>
    <button onClick={() => onChangeFilter("pending")}>Pending</button>
  </div>
);

export default TaskFilter;
