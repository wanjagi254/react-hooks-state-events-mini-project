import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[0]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task details"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories
          .filter((cat) => cat !== "All")
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
