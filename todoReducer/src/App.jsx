import { useReducer, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoInput from './components/TodoInput';
import TodoLists from './components/TodoLists';
import './App.css';


const todoReducer = (state, action)=> {
  switch(action.type)
  {
    case "ADD_TODO" : {
      const todos = [...state, {id: Date.now(), text: action.payload.text , isComplete : action.payload.isComplete}]
      return todos;
    }

    case "DELETE_TODO" : {
      const resultantTodos = state.filter((todo) => {
        return action.payload.id !== todo.id;
      })
      return resultantTodos;
    }
    case "UPDATE_TODO" : {
      const resultantTodos = state.map((todo)=>
        todo.id === action.payload.id ? {...todo, text : action.payload.text } : todo 
      )
      return resultantTodos
    }

    default:
      return state;
  }
}

function App() {
  const [todoState , todoDispatch] = useReducer(todoReducer,[])

  return (
    <TodoProvider value={{ todoState, todoDispatch }}>
      <div className="container">
        <TodoInput />
        <TodoLists />
      </div>
    </TodoProvider>
  );
  
}

export default App
