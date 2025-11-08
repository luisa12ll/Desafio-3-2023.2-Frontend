import { useState } from "react";
import Column from "./components/Column";
import "./styles/styles.css"; // importa estilos globais

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTaskColumn = (taskId, newColumn) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, column: newColumn } : t))
    );
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Agenda de Estudos 📚</h1>
      <div className="columns-container">
        <Column title="A Fazer" column="todo" tasks={tasks} addTask={addTask} updateTaskColumn={updateTaskColumn} />
        <Column title="Fazendo" column="doing" tasks={tasks} addTask={addTask} updateTaskColumn={updateTaskColumn} />
        <Column title="Feito" column="done" tasks={tasks} addTask={addTask} updateTaskColumn={updateTaskColumn} />
      </div>
    </div>
  );
}
