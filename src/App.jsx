import { useEffect, useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import ToDoInputComponent from "./components/ToDoInputComponent";
import ToDoItemComponent from "./components/ToDoItemComponent";
import DoneTodoComponent from "./components/DoneTodoComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    if (localStorage.theme) {
      document.querySelector("html").classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html").classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.querySelector("html").classList.remove("dark");
      localStorage.theme = "";
    }
  }, [darkMode]);

  return (
    <div className="w-full bg-gray-100 h-[100vh] dark:bg-gray-900">
      <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex justify-around items-start pt-[20px]">
        <div className="w-[500px] flex-col justify-start items-center">
          <ToDoInputComponent allTodos={allTodos} setAllTodos={setAllTodos} />
          <ToDoItemComponent allTodos={allTodos} setAllTodos={setAllTodos} />
        </div>
        <div className="w-[500px] bg-slate-200 rounded-md py-[30px]">
          <DoneTodoComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
