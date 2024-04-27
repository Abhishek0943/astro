import React from "react";

function Model({ onClick, children }) {
  return (
    <>
      <div
        onClick={onClick}
        className="w-screen h-screen bg-black fixed top-0 left-0 right-0 bottom-0 z-50"
      >
        {children}
      </div>
    </>
  );
}

export default Model;
