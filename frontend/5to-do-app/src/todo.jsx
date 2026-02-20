import React, { useState, useEffect } from "react";

const Todo = () => {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const todoinLocal = localStorage.getItem("storedtask");
    return JSON.parse(todoinLocal) || [];
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    localStorage.setItem("storedtask", JSON.stringify(tasks));
  }, [tasks]);

  const handleInput = (event) => {
    setTask(event.target.value);
  };

  const handleTask = () => {
    if (task === "") {
      return;
    }
    setTasks((prevTask) => [...prevTask, task]);
    setTask("");
  };
  const handleeditvalue = (e) => setEditValue(e.target.value);
  const handlesave = (index) => saveEdit(index);
  const deletTasks = (index) => {
    const filteredtask = tasks.filter((t, i) => i !== index);
    setTasks(filteredtask);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index]);
  };

  const saveEdit = (index) => {
    if (editValue === "") {
      return;
    }
    const updatedTasks = [...tasks];
    updatedTasks[index] = editValue;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="todo-container">
      <h1>Get things Done!!</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={handleInput}
          className="todo-input"
        />
        <button onClick={handleTask} className="add-button">
          ADD TASK
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((t, index) => {
          let content;

          if (editIndex === index) {
            content = (
              <>
                <input
                  value={editValue}
                  onChange={handleeditvalue}
                  className="todo-input"
                />
                <span onClick={() => handlesave(index)} className="save">
                  Save
                </span>
              </>
            );
          } else {
            content = (
              <>
                {t}
                <span className="btns">
                  <span onClick={() => startEdit(index)} className="edit">
                    Edit
                  </span>
                  <span onClick={() => deletTasks(index)} className="delet">
                    Delete
                  </span>
                </span>
              </>
            );
          }

          return <li key={index}>{content}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;
