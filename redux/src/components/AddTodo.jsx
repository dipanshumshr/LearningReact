import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({text}))
    setText("")
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center gap-3 bg-gray-900 shadow-md p-4 rounded-lg"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-amber-50"
      />
      <button 
        type="submit" 
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add To-Do
      </button>
    </form>
  );
}

export default AddTodo;
