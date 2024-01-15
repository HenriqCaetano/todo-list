import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = { name: userInput.trim(), id: crypto.randomUUID() };
    setUserInput("");

    if (newTodo.name === "") return;

    setTodoList((currentTodos) => {
      return [...currentTodos, newTodo];
    });
  };

  const handleDelete = (event) => {
    const nameToDelete = event.target.parentElement.firstChild.textContent;
    const itemToDelete = todoList.find((todo) => todo.name === nameToDelete);

    setTodoList((currentTodo) => {
      let aux = [...currentTodo];
      aux.splice(currentTodo.indexOf(itemToDelete), 1);
      return aux;
    });
  };

  return (
    <>
      <TodoForm
        handleSubmit={handleSubmit}
        setUserInput={setUserInput}
        userInput={userInput}
      />
      <TodoList todoList={todoList} handleDelete={handleDelete} />
    </>
  );
}

export default App;
