import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

const TASKS = [
  { text: "Buy groceries", category: "Food" },
  { text: "Clean the house", category: "Chores" },
  { text: "Finish project", category: "Work" },
];

const CATEGORIES = ["All", "Food", "Chores", "Work"];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(taskText) {
    setTasks(tasks.filter((task) => task.text !== taskText));
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  const visibleTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;