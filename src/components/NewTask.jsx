import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [taskText, setTaskText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (taskText.trim()) {
      onAdd(taskText);
      setTaskText("");
      setError(""); // Clear the error message
    } else {
      setError("Task cannot be empty!");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4 flex items-center">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="border-2 border-stone-300 rounded-md p-2 mr-2 flex-grow"
          placeholder="Add a new task"
        />
        <button
          type="submit"
          className="bg-stone-500 text-white rounded-md p-2"
        >
          Add Task
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}
