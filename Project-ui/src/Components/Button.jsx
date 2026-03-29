// components/CreateButton.jsx
import React from "react";

const Button = ({ onClick, label = "Create New" }) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg 
      text-sm flex items-center gap-1"
    >
      + {label}
    </button>
  );
};

export default  Button;