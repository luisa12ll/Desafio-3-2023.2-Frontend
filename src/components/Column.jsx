import { useState } from "react";
import TaskCard from "./TaskCard";
import NewTaskModal from "./NewTaskModal";
import "../styles/Column.css";

export default function Column({ title, column, tasks, addTask, updateTaskColumn }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (task) => {
    const newTask = {
      id: Date.now(),
      title: task.title,
      description: task.description,
      date: task.date,
      column: column,
    };
    addTask(newTask);
    setIsModalOpen(false);
  };

  return (
    <div className="column">
      <div className="column-header">
        <h2>{title}</h2>
        <button
          type="button" // 👈 evita o comportamento de submit
          className="new-task-btn"
          onClick={() => setIsModalOpen(true)}
        >
          + Nova Tarefa
        </button>
      </div>

      <div className="task-list">
        {tasks
          .filter((t) => t.column === column)
          .map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              updateTaskColumn={updateTaskColumn}
            />
          ))}
      </div>

      {/* Modal controlado */}
      <NewTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
}
