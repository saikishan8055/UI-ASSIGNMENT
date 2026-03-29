import React from "react";
import { Bell, ChevronDown, Search } from "lucide-react";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <div
      className="h-16 px-6 flex items-center justify-between
                 bg-secondary
                 text-white shadow-sm"
    >
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
          <span className="font-semibold text-lg tracking-wide">Worcspace</span>
        </div>

        <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-md text-sm cursor-pointer hover:bg-white/20 transition">
          Workspace 1
          <ChevronDown size={14} className="text-gray-300" />
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative w-[380px]">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-14 py-2 rounded-lg
           bg-white/5
           border border-white/5
           placeholder-gray-400 text-sm
           focus:outline-none focus:ring-1 focus:ring-white/20"
          />

          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 
           text-xs px-2 py-[2px] rounded 
           bg-white/5  
          "
          >
            ⌘K
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Bell size={18} className="text-gray-200 cursor-pointer" />

        <div
          className="w-9 h-9 rounded-full bg-white/20
                     flex items-center justify-center font-medium text-sm"
        >
          GK
        </div>
      </div>
    </div>
  );
};

export default Header;
