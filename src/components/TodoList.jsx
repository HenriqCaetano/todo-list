import React from "react";
export function TodoList({ todoList, handleDelete }) {
  return (
    <div>
      <li>
        {todoList.map((todo) => {
          return (
            <ul key={todo.id}>
              <span>{todo.name}</span>
              <button onClick={handleDelete}>Delete todo</button>
            </ul>
          );
        })}
      </li>
    </div>
  );
}
