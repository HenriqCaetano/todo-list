import React from "react";
export function TodoList({ todoList, handleDelete }) {
  return (
    <div>
        {todoList.map((todo) => {
          return (
            <ul key={todo.id}>
              <input type="checkbox" />
              <span>{todo.name}</span>
              <button onClick={handleDelete}> Delete todo</button>
            </ul>
          );
        })}
    </div>
  );
}
