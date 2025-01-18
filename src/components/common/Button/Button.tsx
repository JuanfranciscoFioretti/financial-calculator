import React, { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
