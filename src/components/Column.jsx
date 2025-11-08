import { useState } from "react";
import TaskCard from "./TaskCard";
import NewTaskModal from "./NewTaskModal";
import "../styles/Column.css";

export default function Column({
  title,
  column,
  tasks,
  addTask,
  updateTaskColumn,
  deleteTask,
  updateTask, 
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleSaveTask = (taskData) => {
    if (taskToEdit) {
      updateTask(taskToEdit.id, taskData);
    } else {
      addTask({ ...taskData, column });
    }
    handleCloseModal(); 
  };

  const handleStartEdit = (task) => {
    setTaskToEdit(task); 
    setIsModalOpen(true); 
  };
 
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTaskToEdit(null); 
  };

  return (
    <div className="column">
      <div className="column-header">
        <h2>{title}</h2>
        <button
          type="button"
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
              deleteTask={deleteTask}
              onEdit={handleStartEdit}
            />
          ))}
      </div>

      <NewTaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSaveTask={handleSaveTask} 
        taskToEdit={taskToEdit} 
      />
    </div>
  );
}