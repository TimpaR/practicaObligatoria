import React from "react";
import { useState } from "react";

const List = () => {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const deleteTask = (item) => {
    const newTasks = tasks.filter((task) => task !== item);
    setTask(newTasks);
  };

  const completeTask = (item) => {
    const newTasks = tasks.map((task) =>
      task === item ? { ...task, state: !task.state } : task
    );
    setTask(newTasks);
  };

  const valueTask = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask === "") {
      alert("Complete el campo antes de agregar");
    } else {
      const newTaskObj = {
        text: newTask,
        state: false,
      };
      setTask([...tasks, newTaskObj]);
    }
  };

  return (
    <div>
      <h1>Tareas</h1>
      {tasks.length === 0 ? (
        <h3>Ingrese una nueva tarea</h3>
      ) : (
        <ol>
          {tasks.map((item) => (
            <div>
              <li
                style={{
                  textDecoration: item.state ? "line-through" : "none",
                  color: item.state ? "lightgray" : "black",
                }}
              >
                {item.text}
              </li>
              <button onClick={() => deleteTask(item)}>Eliminar tarea</button>
              <button onClick={() => completeTask(item)}>Completada</button>
            </div>
          ))}
        </ol>
      )}
      <input onChange={valueTask}></input>
      <button onClick={addTask}>Agregar tarea</button>
    </div>
  );
};

export default List;
