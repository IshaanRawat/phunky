import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  disabled,
}) => {
  const backgroundClass = disabled ? "bg-slate-600" : "bg-shifter";
  const classNames =
    "relative w-content h-12 overflow-visible pt-2 " + className;

  return (
    <div className={classNames}>
      <button
        className={`${backgroundClass} px-6 py-3 text-white font-semibold flex items-center relative z-10 -top-4 -left-2 active:-top-2 active:-left-1 flex items-center disabled:top-0 disabled:left-0`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
      <div className={`${backgroundClass} absolute inset-0 p-1`}>
        <div className="bg-p-black w-full h-full"></div>
      </div>
    </div>
  );
};

export default Button;
