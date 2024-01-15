import React from "react";
export function TodoForm({ handleSubmit, setUserInput, userInput }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Item </label>
        <input
          type="text"
          onChange={(event) => setUserInput(event.target.value)}
          value={userInput}
        />
      </div>
      <button type="submit">create new item</button>
    </form>
  );
}
