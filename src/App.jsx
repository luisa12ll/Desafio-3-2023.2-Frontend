import { useState, useEffect } from "react";
import Column from "./components/Column";
import "./styles/styles.css";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("kanban-tasks");
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (e) {
        console.error("Falha ao carregar tarefas:", e);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, { ...newTask, id: Date.now() }]);
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  const updateTask = (taskId, updatedData) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          return { ...task, ...updatedData };
        }
        return task;
      })
    );
  };

  const updateTaskColumn = (taskId, newColumn) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, column: newColumn } : t))
    );
  };

  return (
    <div className="app-container">
      <h1 className="app-title"> Kanban 📚</h1>
      <div className="columns-container">
        <Column
          title="A Fazer"
          column="todo"
          tasks={tasks}
          addTask={addTask}
          updateTaskColumn={updateTaskColumn}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
        <Column
          title="Fazendo"
          column="doing"
          tasks={tasks}
          addTask={addTask}
          updateTaskColumn={updateTaskColumn}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
        <Column
          title="Feito"
          column="done"
          tasks={tasks}
          addTask={addTask}
          updateTaskColumn={updateTaskColumn}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>

      <footer className="app-footer">
        <p>© 2025 Luísa de Souza. </p>
        <p>Projeto do Desafio 3 - EngNet</p>
      </footer>
    </div>
  );
}