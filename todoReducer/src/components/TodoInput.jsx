import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoInput() {
    const [todo, setTodo] = useState({
        text : "",
        isCompleted : false
    })

    const { todoDispatch } = useTodo()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.text)
        {
            todoDispatch({
                type : "ADD_TODO",
                payload : todo
            })
        }
        setTodo({text: "", isCompleted : false})   
    }
    const handleReset = () => {
        const newObj = {
            text: "",
            isCompleted : false
        }
        setTodo(newObj)
    }
  return (
    <div>
         <input type="text" placeholder="Write To-do here ..." value={todo.text} onChange={(e)=>setTodo(prev => ({...prev, text : e.target.value}))}/>
         <button type="submit" onClick={handleSubmit}>Submit</button>
         <button className="reset-btn" onClick={handleReset}>Reset</button>
    </div>
   
)}

export default TodoInput