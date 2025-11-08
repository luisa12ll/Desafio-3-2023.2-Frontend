import "../styles/Column.css";

export default function TaskCard({
  task,
  updateTaskColumn,
  deleteTask,
  onEdit,
}) {
  const handleDelete = () => {
    const temCerteza = window.confirm(
      `Tem certeza que deseja excluir a tarefa: "${task.title}"?`
    );
    if (temCerteza) {
      deleteTask(task.id);
    }
  };

  const formatarData = (dataString) => {
    if (!dataString) return "";
    const [ano, mes, dia] = dataString.split('-');
    if (dia && mes && ano) {
      return `${dia}/${mes}/${ano}`;
    }
    return dataString;
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      {task.responsavel && (
        <p className="task-responsavel">🧑‍💻 {task.responsavel}</p>
      )}
      {task.date && <p className="task-date">📅 {formatarData(task.date)}</p>}
      {task.description && <p className="task-desc">{task.description}</p>}

      <div className="task-actions">
        <button className="edit-btn" onClick={() => onEdit(task)}>
          ✏️
        </button>

        {task.column !== "todo" && (
          <button className="move-btn" onClick={() => updateTaskColumn(task.id, "todo")}>
            ⬅️
          </button>
        )}
        
        {task.column !== "done" && (
          <button
            className="move-btn"
            onClick={() =>
              updateTaskColumn(
                task.id,
                task.column === "todo" ? "doing" : "done"
              )
            }
          >
            ➡️
          </button>
        )}

        <button className="delete-btn" onClick={handleDelete}>
          🗑️
        </button>
      </div>
    </div>
  );
}