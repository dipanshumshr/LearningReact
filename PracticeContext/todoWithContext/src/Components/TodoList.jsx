import React from 'react'
import "../Styles/TodoList.css"
import { useTodo } from '../Context/TodoContext'
import { useState } from 'react';

function TodoList() {
  const [editable,setEditable] = useState(null)
  const { todos, deleteTodo, updateTodo } = useTodo();
  const [ updateText, setUpdateText ] = useState("")

  const handleEdit = (todo) => {
    setEditable(todo.id)
    setUpdateText(todo.text)
  }

  const handleUpdate  = (todo) => {
    updateTodo(editable, {...todo, text :updateText})
    setEditable(null)
  }

  return (
    <div className='main'>
        <div>
            {/* {todos.length = 0 ? <h1>please enter todo</h1> :  */}
              <ul>
                {todos.map(todo => {
                  return <li key={todo.id}>
                    { editable === todo.id ?
                        <input value = {updateText } onChange = { (e) => setUpdateText(e.target.value) }/>
                        :todo.text 
                    }
                    <button onClick={() => {
                      editable === todo.id?
                      handleUpdate(todo) :

                      handleEdit(todo)

                    }}>{editable === todo.id? "save" : "edit"}</button>
                    <button onClick={ () => deleteTodo(todo.id)}>Delete</button>
                  </li>
                })}
              </ul>
            {/* } */}
        </div>
    </div>
  )
}

export default TodoList