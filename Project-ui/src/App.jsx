
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import KnowledgeBase from "./Components/KnowledgeBase";

function App() {
  const [active, setActive] = useState(""); 

  return (
    <div className="h-screen flex flex-col bg-gray-100">

      <Header />

      <div className="flex flex-1 overflow-hidden">

      
        <Sidebar active={active} setActive={setActive} />

        <div className="flex-1 p-6 overflow-y-auto">

        
          {active === "knowledge" ? (
            <KnowledgeBase />
          ) : (
            <h1 className="text-2xl font-semibold">
              Dashboard Content1
            </h1>
          )}

        </div>

      </div>
    </div>
  );
}

export default App;