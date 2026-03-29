// components/Sidebar.jsx
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
  Settings,
  IdCard,
  Workflow,
  WorkflowIcon,
  Network,
  KeySquareIcon,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen border-r p-4 flex flex-col">
      <div>
        <h2 className="text-gray-400 text-xs font-semibold mb-3 tracking-wide">
          MY PROJECTS
        </h2>

        <ul className="space-y-2">
          <li className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <Bot size={16} /> Agents
          </li>

          <li className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <Brain size={16} /> AI Models
          </li>

          <li className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <Library size={16} /> Library
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-gray-400 text-xs font-semibold mb-3 tracking-wide">
          ORCHESTRATOR
        </h2>

        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <FileText size={16} /> Published
          </li>

          <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <Cpu size={16} /> Machines
          </li>

          <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <List size={16} /> Queues
          </li>

          <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <Zap size={16} /> Triggers
          </li>

          <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <Briefcase size={16} /> Jobs
          </li>

          <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <PlayCircle size={16} /> Executions
          </li>

          <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <Key size={16} /> Vault
          </li>
          <li className="flex items-center gap-3 p-2 rounded 
                         bg-indigo-100 text-primary font-semibold cursor-pointer">
            <Database size={16} /> Knowledge Base
          </li>
           <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <KeySquareIcon size={16} /> Key Store
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-gray-400 text-xs font-semibold mb-3 tracking-wide">
          ADMIN
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <IdCard size={16} /> Tenant
          </li>

          <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <Network
             size={16} /> Integrations
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;