import React, { useState } from "react";
import "./NewTaskModal.css";

function NewTaskModal({ isOpen, onClose, onAddTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Adicione um título para a tarefa!");
    onAddTask({ title, date, description });
    setTitle("");
    setDate("");
    setDescription("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Nova Atividade</h2>
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

          <label>Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Detalhes da tarefa..."
          />

          <div className="modal-buttons">
            <button type="submit" className="save-btn">
              Salvar
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
