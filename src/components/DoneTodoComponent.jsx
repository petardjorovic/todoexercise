import React from "react";
import { TiInputChecked } from "react-icons/ti";

function DoneTodoComponent() {
  function acceptTodo(e) {
    e.preventDefault(); // Potrebno za omogućavanje drop-a
    e.target.classList.add("over");
  }

  function removeSign(e) {
    e.target.classList.remove("over");
  }

  function getData(e) {
    e.preventDefault();
    e.target.classList.remove("over");
    let myData = e.dataTransfer.getData("text");
    let draggedElement = document.getElementById(myData);
    let img = document.createElement("img");
    let button = draggedElement.childNodes[1];
    img.src = "./checked.png";
    draggedElement.replaceChild(img, button);
    e.target.appendChild(draggedElement);
  }
  return (
    <div
      className="w-full h-full flex flex-col gap-[20px] px-[20px]"
      onDragOver={acceptTodo}
      onDragLeave={removeSign}
      onDrop={getData}
    >
      <h4 className="text-center">Drop Done ToDos here</h4>
    </div>
  );
}

export default DoneTodoComponent;
