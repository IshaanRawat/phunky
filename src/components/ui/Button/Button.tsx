import React from "react";

interface ButtonProps {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "" }) => {
  const classNames =
    "relative w-content h-12 overflow-visible pt-2 " + className;

  return (
    <div className={classNames}>
      <button className="relative z-10 -top-4 -left-2 active:-top-2 active:-left-1 flex items-center">
        {children}
      </button>
      <div className="bg-shifter absolute inset-0 p-1">
        <div className="bg-p-black w-full h-full"></div>
      </div>
    </div>
  );
};

export default Button;
