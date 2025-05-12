import React, { useState } from 'react';

const GlassTextArea = ({
  label = null,
  name = '',
  required = false,
  placeholder = 'Enter your text...',
  rows = 4,
  value,
  onChange
}) => {
  const [focused, setFocused] = useState(false);
//   const [value, setValue] = useState('');

  return (
    <div className="w-full  mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-white text-sm font-medium mb-2 text-left"
        >
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}

      <div
        className={`relative bg-white/10 backdrop-blur-md border ${
          focused ? 'border-white/40' : 'border-white/20'
        } rounded-lg overflow-hidden transition-all duration-300 ${
          focused ? 'shadow-lg' : 'shadow'
        }`}
      >
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className="w-full bg-transparent text-white placeholder-white/50 py-3 px-4 outline-none resize-none"
        ></textarea>
      </div>
    </div>
  );
};

const TextAreaInput = ({name,value,onChange}) => {
  return (
    <GlassTextArea
      label="System Prompt"
      name={name}
      required
      placeholder="Enter a detailed Prompt..."
      rows={6}
      value={value}
      onChange={onChange}
      
    />
  );
};

export default TextAreaInput;
