import React, { useState } from 'react';
import '../index.css'

type Change = (text: string) => void;

let timeout: NodeJS.Timeout | null = null;

type Props = {
  label: string;
  defaultValue?: string;
  onChange: Change;
  clientContext: { darkMode: boolean; }
};

export default (props: Props) => {
  const { clientContext, label, onChange } = props;
  const [value, setValue] = useState('')
  const className = `basic-text-input-component ${clientContext?.darkMode ? 'dark' : ''}`;

  const handleChange = newValue => {
    setValue(newValue);
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      onChange(newValue);
    }, 500);
  }

  return (
      <div className={className}>
        <label>{label}
          <input
            type="text" 
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        </label>
      </div>
    )
}