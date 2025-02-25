import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [{
        id : 1,
        todo : "Hey there",
        isCompleted : false
    }],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}  
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}