import React from 'react'
import "../Styles/TodoInput.css";
import { useTodo } from '../Context/TodoContext';
import { useState } from 'react';

function TodoInput() {

  const [ todo,setTodo ] = useState({ text : ''})
  const { addTodo } = useTodo()

  const handleTodo = () => {
    addTodo(todo);
    setTodo({...todo,text:""})
  }

  return (
    <div className='main'>
        <div className='input-section'>
            <h1>Add your Todo</h1>
            <input className='input' placeholder='Add your text' value={todo.text} onChange={e=> setTodo({...todo,text:e.target.value})}></input>
            <button className='addTodo' onClick={handleTodo}>Add your task</button>
        </div>
    </div>
  )
}

export default TodoInput