import React from "react";
import ToggleMode from "./ToggleMode";

function NavbarComponent({ darkMode, setDarkMode }) {
  return (
    <header className="w-full h-[80px] bg-purple-200 flex justify-center items-center dark:bg-purple-900">
      <nav className="w-[90%] mx-auto text-purple-900 dark:text-purple-200 flex items-center justify-between">
        <h1>ToDoApp</h1>
        <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </nav>
    </header>
  );
}

export default NavbarComponent;
