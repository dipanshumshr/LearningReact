import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos : [{}], // id,text,isCompleted
    addTodo : () => {},
    deleteTodo : () => {},
    updateTodo : () => {}
})

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext)
}

