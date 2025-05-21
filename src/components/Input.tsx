import React from 'react';

interface InputProps {
  label: string;
  type: 'text' | 'password' | 'email';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, name, value, onChange }) => {
  return (
    <div style={{ margin: '8px 0' }}>
      <label htmlFor={name} style={{ color: '#212529' }}>{label}:</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        style={{
          border: 'solid 2px #6C757D',
          borderRadius: '4px',
          padding: '8px 12px',
          display: 'block',
          width: '100%'
        }}
      />
    </div>
  );
};

export default React.memo(Input);