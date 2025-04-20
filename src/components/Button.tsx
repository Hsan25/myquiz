import React from "react";

const Button = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const classNames: string =
    className || "p-2 bg-violet-700 hover:bg-violet-600 rounded";
  return (
    <>
      <button className={classNames} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
