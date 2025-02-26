import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [updateText, setUpdateText] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleEdit = (id) => {
    setEditingId(id);
  }

  const handleUpdate = () => {
    dispatch(updateTodo({id : editingId, text : updateText}));
    setEditingId(null);
    setUpdateText("")
  }

  const handleCancel = () => {
    setEditingId(null);
    setUpdateText("")
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-semibold text-center mb-4 text-indigo-700">Todo List</h2>
        <ul className="space-y-2">
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="flex justify-between items-center p-2 border-b last:border-none hover:bg-gray-50 rounded-md"
              >
                {editingId === todo.id ? (
                  <div className="w-full flex flex-col space-y-2">
                    <input 
                      type="text" 
                      value={updateText} 
                      onChange={e=> setUpdateText(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <div className="flex justify-end space-x-2">
                      <button 
                        onClick={handleUpdate}
                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
                      >
                        Save
                      </button>
                      <button 
                        onClick={handleCancel}
                        className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex w-full justify-between items-center">
                    <span className="text-gray-700 font-medium">{todo.text}</span>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEdit(todo.id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(todo.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;