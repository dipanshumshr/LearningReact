import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo : [{}], // id,text,isCompleted
    addTodo : ()=>{},
    updateTodo : ()=>{},
    deleteTodo : ()=>{}
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}

