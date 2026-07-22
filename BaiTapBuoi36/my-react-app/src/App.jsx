import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";
import "./index.css";

function App() {
  return (
    <>
      <div className="max-w-300 mx-auto p-4 flex gap-4 bg-gray-50 ">
        <div className="flex w-1/5 flex-col gap-4  ">
          <Sidebar />
        </div>

        <div className="flex-1 w-4/5 flex flex-col gap-4 min-w-0">
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
