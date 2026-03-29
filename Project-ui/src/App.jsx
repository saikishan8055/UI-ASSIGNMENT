import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-1 overflow-hidden"> 
        <Sidebar />
        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-semibold">Dashboard Content</h1>
        </div>

      </div>

    </div>
  );
}

export default App;