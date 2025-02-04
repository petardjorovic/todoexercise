import { useState } from "react";

function ToDoInputComponent({ allTodos, setAllTodos }) {
  const [currentInput, setCurrentInput] = useState("");
  function handleInputChange(e) {
    setCurrentInput(e.target.value);
  }

  function addTodo() {
    if (currentInput) {
      setAllTodos([
        ...allTodos,
        { title: currentInput, id: new Date().getTime() },
      ]);
      setCurrentInput("");
    }
  }

  return (
    <div className="flex self-start gap-3 p-3">
      <input
        type="text"
        placeholder="Add your ToDo here"
        className="border py-[5px] px-[10px] rounded-md w-[300px]"
        value={currentInput}
        onChange={handleInputChange}
      />
      <button
        className="bg-green-950 text-white px-[12px] py-[6px] rounded-md dark:bg-red-700 dark:text-black"
        onClick={addTodo}
      >
        Add ToDo
      </button>
    </div>
  );
}

export default ToDoInputComponent;
