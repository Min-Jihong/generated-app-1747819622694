import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderRadius: '4px',
      padding: '16px',
      margin: '16px 0'
    }}>
      {children}
    </div>
  );
};

export default React.memo(Card);