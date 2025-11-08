function TaskCard({ task, updateTaskColumn }) {
  const moveForward = () => {
    if (task.column === "todo") updateTaskColumn(task.id, "doing");
    else if (task.column === "doing") updateTaskColumn(task.id, "done");
  };

  const moveBackward = () => {
    if (task.column === "doing") updateTaskColumn(task.id, "todo");
    else if (task.column === "done") updateTaskColumn(task.id, "doing");
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Responsável:</strong> {task.responsible}</p>
      <p><strong>Prazo:</strong> {task.deadline}</p>

      <div className="buttons">
        {task.column !== "todo" && (
          <button onClick={moveBackward}>←</button>
        )}
        {task.column !== "done" && (
          <button onClick={moveForward}>→</button>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
