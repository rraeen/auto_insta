import React, { useRef, useState } from 'react';
import "./index.css"; // Ensure to include your CSS file for styles

// const GlassInput = React.memo(({ onChange, value, ...props }) => {
//   const inputRef = useRef(null);

//   const handleChange = (event) => {
//     if (onChange) {
//       onChange(event);
//     }
//   };
//   return (
//     // <div id="poda" style={{marginTop:"10px"}}>
//     // <div className="glow"></div>
//     // <div className="darkBorderBg"></div>
//     // <div className="darkBorderBg"></div>
//     // <div className="darkBorderBg"></div>
//     // <div className="white"></div>
//     // <div className="border"></div>
//     // <div id="main">
//     <input type="text" placeholder="Type here" className="input" />
//     // </div>
//   // </div>
   
//   );
// });





const GlassInput = ({ 
  onChange,
  value,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  
  return (
    <div className="w-full mb-4">
      {props.label && (
        <label 
          htmlFor={props.name} 
         className="block text-white text-sm font-medium mb-2 text-left"
        >
          {props.label} {props?.required && <span className="text-red-400">*</span>}
        </label>
      )}
      
      <div 
        className={`relative bg-white/10 backdrop-blur-md border ${focused ? 'border-white/40' : 'border-white/20'} rounded-lg overflow-hidden transition-all duration-300 ${focused ? 'shadow-lg' : 'shadow'}`}
      >
        {props?.icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70">
            {props?.icon}
          </div>
        )}
        
        <input
          {...props}
          onChange={onChange}
          required={props.required}
          className={`w-full bg-transparent text-white placeholder-white/50 py-3 px-4 outline-none ${props?.icon ? 'pl-10' : ''}`}
        />
      </div>
    </div>
  );
};
export default GlassInput;