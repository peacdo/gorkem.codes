import React from "react";

const LuaIcon = ({ className = "", size = "24px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M10.5 5.5a5 5 0 1 1-5 5 5 5 0 0 1 5-5m11.5 11.5a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5M5.5 17a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 5.5 17M18.5 5.5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5" />
    </svg>
  );
};

export default LuaIcon; 