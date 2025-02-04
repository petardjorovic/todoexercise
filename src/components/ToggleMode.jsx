import React from "react";
import { CiSun } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function ToggleMode({ darkMode, setDarkMode }) {
  function handleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div onClick={handleDarkMode} className="cursor-pointer">
      {darkMode ? (
        <CiSun size={45} color="purple-900" />
      ) : (
        <MdDarkMode size={45} />
      )}
    </div>
  );
}

export default ToggleMode;
