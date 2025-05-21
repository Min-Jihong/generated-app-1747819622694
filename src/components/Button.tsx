import React from 'react';

interface ButtonProps {
  type: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

const buttonStyles = {
  primary: {
    backgroundColor: '#007BFF',
    color: '#FFFFFF',
    borderRadius: '4px'
  },
  secondary: {
    backgroundColor: '#6C757D',
    color: '#FFFFFF',
    borderRadius: '4px'
  }
};

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button
      style={{ ...buttonStyles[type] }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);