import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoLists() {
  const { todoState, todoDispatch } = useTodo();
  const [editable, setEditable] = useState(null);
  const [updateText, setUpdateText] = useState("");

  function handleEdit(todo) {
    setEditable(todo.id);
    setUpdateText(todo.text);
  }

  function handleUpdate(todo) {
    todoDispatch({
      type: "UPDATE_TODO",
      payload: {
        id: todo.id,
        text: updateText,
      },
    });
    setEditable(null);
  }

  function handleDelete(todo) {
    todoDispatch({
      type: "DELETE_TODO",
      payload: {
        id: todo.id,
      },
    });
  }

  return (
    <div>
      <ul>
        {todoState.map((todo) => {
          return (
            <li className="todo-item" key={todo.id}>
              {editable === todo.id ? (
                <input
                  type="text"
                  value={updateText}
                  onChange={(e) => setUpdateText(e.target.value)}
                />
              ) : (
                <span>{todo.text}</span>
              )}
              <div className="todo-buttons">
                <button
                  className="edit-btn"
                  onClick={() =>
                    editable === todo.id ? handleUpdate(todo) : handleEdit(todo)
                  }
                >
                  {editable === todo.id ? "Save" : "Edit"}
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(todo)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoLists;
