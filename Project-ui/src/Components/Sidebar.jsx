import React from "react";
import {
  Bot,
  Brain,
  Library,
  FileText,
  Cpu,
  List,
  Zap,
  Briefcase,
  PlayCircle,
  Key,
  Database,
  IdCard,
  Network,
  KeySquareIcon,
} from "lucide-react";

const Sidebar = ({ active, setActive }) => {
  const menuItem = (key, icon, label) => (
    <li
      onClick={() => setActive(key)}
      className={`flex items-center gap-3 p-2 rounded cursor-pointer text-sm
        ${
          active === key
            ? "bg-indigo-100 text-indigo-600 font-semibold"
            : "text-gray-700 hover:bg-gray-100"
        }`}
    >
      {icon}
      {label}
    </li>
  );

  return (
    <div className="w-64 bg-white h-screen   overflow-y-auto border-r p-4 flex flex-col">
      {/* MY PROJECTS */}
      <div>
        <h2 className="text-gray-400 text-xs font-semibold mb-3 tracking-wide">
          MY PROJECTS
        </h2>

        <ul className="space-y-2">
          {menuItem("agents", <Bot size={16} />, "Agents")}
          {menuItem("models", <Brain size={16} />, "AI Models")}
          {menuItem("library", <Library size={16} />, "Library")}
        </ul>
      </div>

      {/* ORCHESTRATOR */}
      <div className="mt-6">
        <h2 className="text-gray-400 text-xs font-semibold mb-3 tracking-wide">
          ORCHESTRATOR
        </h2>

        <ul className="space-y-2">
          {menuItem("published", <FileText size={16} />, "Published")}
          {menuItem("machines", <Cpu size={16} />, "Machines")}
          {menuItem("queues", <List size={16} />, "Queues")}
          {menuItem("triggers", <Zap size={16} />, "Triggers")}
          {menuItem("jobs", <Briefcase size={16} />, "Jobs")}
          {menuItem("executions", <PlayCircle size={16} />, "Executions")}
          {menuItem("vault", <Key size={16} />, "Vault")}

          {/* 🔥 IMPORTANT ONE */}
          {menuItem("knowledge", <Database size={16} />, "Knowledge Base")}

          {menuItem("keystore", <KeySquareIcon size={16} />, "Key Store")}
        </ul>
      </div>

      {/* ADMIN */}
      <div className="mt-6">
        <h2 className="text-gray-400 text-xs font-semibold mb-3 tracking-wide">
          ADMIN
        </h2>

        <ul className="space-y-2">
          {menuItem("tenant", <IdCard size={16} />, "Tenant")}
          {menuItem("integrations", <Network size={16} />, "Integrations")}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
