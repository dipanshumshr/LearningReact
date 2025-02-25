import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => ([{ id: Date.now(), ...todo }, ...prev]));
  };

  const updateTodo = (id, updatedtodo) => {
    setTodos((prev) => 
      prev.map((prevTodo) => (prevTodo.id === id ? updatedtodo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => (prev.filter((prev) => prev.id != id)));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((value) =>
        value.id === id ? { ...value, isCompleted: !value.isCompleted } : value
      )
    );
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"));
    if (items && items.length > 0) {
      setTodos(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ toggleComplete, addTodo, deleteTodo, updateTodo, todos }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoInput />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => {
              return (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
