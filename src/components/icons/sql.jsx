import React from "react";

const SQLIcon = ({ className = "", size = "24px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 3c-4.42 0-8 1.79-8 4v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.31 0 6 1.12 6 2.5S15.31 10 12 10 6 8.88 6 7.5 8.69 5 12 5zm6 11.5c0 1.38-2.69 2.5-6 2.5s-6-1.12-6-2.5v-2.04c1.39.92 3.56 1.54 6 1.54s4.61-.62 6-1.54v2.04zm0-4c0 1.38-2.69 2.5-6 2.5s-6-1.12-6-2.5v-2.04c1.39.92 3.56 1.54 6 1.54s4.61-.62 6-1.54v2.04zm0-4c0 1.38-2.69 2.5-6 2.5s-6-1.12-6-2.5V8.46c1.39.92 3.56 1.54 6 1.54s4.61-.62 6-1.54v.04z" />
    </svg>
  );
};

export default SQLIcon; 