import { useState, useEffect } from "react";
import "./NewTaskModal.css";

function NewTaskModal({ isOpen, onClose, onSaveTask, taskToEdit }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [responsavel, setResponsavel] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (taskToEdit) {
        setTitle(taskToEdit.title);
        setDate(taskToEdit.date || "");
        setDescription(taskToEdit.description || "");
        setResponsavel(taskToEdit.responsavel || "");
      } else {
        setTitle("");
        setDate("");
        setDescription("");
        setResponsavel("");
      }
    }
  }, [isOpen, taskToEdit]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Adicione um título para a tarefa!");
    if (!responsavel.trim()) return alert("Adicione um responsável!");

    onSaveTask({ title, date, description, responsavel });
    
    onClose(); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>{taskToEdit ? "Editar Atividade" : "Nova Atividade"}</h2>

        <form onSubmit={handleSubmit}>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex: Entregar relatório"
            required
          />

          <label>Data:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Responsável:</label>
          <input
            type="text"
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
            placeholder="Ex: Luísa"
            required
          />

          <label>Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Detalhes da tarefa..."
          />

          <div className="modal-buttons">

            <button type="submit" className="save-btn">
              {taskToEdit ? "Salvar Alterações" : "Salvar"}
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTaskModal;