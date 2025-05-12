import React, { useState } from 'react';

const GlassDropdown = ({
  label = null,
  name = '',
  required = false,
  placeholder = 'Select an option...',
  options = [],
  value="",
  onChange
}) => {
  const [focused, setFocused] = useState(false);

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
        <select
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className="w-full bg-transparent text-white border border-gray-700 rounded-md 
         placeholder-white/80 py-3 px-4 outline-none appearance-none 
          focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
   >
           <option value="" disabled className="bg-gray-900 text-white">
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option 
            key={index} 
            value={option.value || option.label} 
            className="bg-gray-900 text-white"
          >
            {option.label}
          </option>
        ))}

          
        </select>

        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-white/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const DropDownInput = ({
    value="",
    onChange,
    name

}) => {
  return (
    <GlassDropdown
    value={value}
    onChange={onChange}
    label="Model"
    name="mode"
    required
    placeholder="Select a model"
    options={[
      { value: 'Chat GPT', label: 'Chat GPT' },
      { value: 'Gemani', label: 'Gemani' },
      { value: 'llama', label: 'llama' },
    ]}
  />
  );
};

export default DropDownInput;
