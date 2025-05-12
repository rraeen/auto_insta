import React, { useRef } from 'react';
import { TextField } from '@mui/material';

const InputField = React.memo(({ onChange, value, ...props }) => {
  const inputRef = useRef(null);

  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      inputRef={inputRef} 
      value={inputRef.current ? inputRef.current.value : value} 
      onInput={handleChange}
      {...props}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: "transparent", // Transparent background
          // borderRadius: "9999px", // Fully rounded border
          color: "#fff", // White text color
          border: "1px solid rgba(255, 255, 255, 0.5)", // Semi-transparent white border
          "&:hover fieldset": {
            borderColor: "#fff", // White border on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "#3b82f6", // Blue border when focused
          },
        },
        "& .MuiInputLabel-root": {
          color: "rgba(255, 255, 255, 0.7)", // White label with opacity
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#3b82f6", // Blue label on focus
        },
      }}
    />
  );
});

export default InputField;
