import { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { TodoContextProvider } from "./Context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, { id: Date.now(), text: todo.text, isComplete: false }];
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return id !== todo.id;
      });
    });
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => (
      prev.map((value) => (
        id === value.id ? {...value , text : todo.text } : value
      ))
    )
  )
  }
  return (
    <TodoContextProvider value={{addTodo,todos,deleteTodo,updateTodo}}>
      <TodoInput />
      <TodoList />
    </TodoContextProvider>
  );
}

export default App;
