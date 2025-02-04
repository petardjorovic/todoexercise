import React from "react";

function ToDoItemComponent({ allTodos, setAllTodos }) {
  function removeTodo(id) {
    let updatedArray = allTodos.filter((el) => el.id !== id);
    setAllTodos(updatedArray);
  }

  function moveToDone(e) {
    e.dataTransfer.setData("text", e.target.id);
  }

  return (
    <div className="container flex flex-col gap-[20px]">
      {allTodos.map((el, i) => {
        return (
          <div
            draggable="true"
            onDragStart={moveToDone}
            key={i}
            id={el.id}
            className="flex justify-between items-center rounded-md text-slate-900 gap-3 p-4 bg-orange-200 dark:bg-slate-700 dark:text-slate-200"
          >
            <p>{el.title}</p>
            <button
              className="px-[8px] py-[4px] bg-cyan-600 text-black rounded-md dark:bg-red-600 "
              onClick={() => removeTodo(el.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoItemComponent;
