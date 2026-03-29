import React from "react";
import { Bell, ChevronDown, Search } from "lucide-react";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <div
      className="h-14 px-1 flex  items-center justify-between 
                    bg-secondary
                    text-white shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-contain rounded-full"
          />
          <span className="font-semibold text-lg">Worcspace</span>
        </div>
        <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-md text-sm  bg-primary ">
          Workspace 1
          <ChevronDown size={14} className="text-gray-300 cursor-pointer" />
        </div>
      </div>
      <div className="flex-1 flex justify-center ">
        <div className=" relative w-[320px]" >
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-12 py-2 rounded-md 
                       bg-white/10 border border-white/20
                       placeholder-gray-300 text-sm
                       focus:outline-none focus:ring-1 focus:ring-white/40"
          />

          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 
                           text-xs px-2 py-[2px] rounded"
          >
            ⌘K
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Bell size={18} className="text-gray-200 cursor-pointer" />

        <div
          className="w-9 h-9 rounded-full bg-white/20 
                        flex items-center justify-center font-medium"
        >
          GK
        </div>
      </div>
    </div>
  );
};

export default Header;
