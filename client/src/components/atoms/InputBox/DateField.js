// import React from 'react';
// import { TextField } from '@mui/material';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';

// const DateField = React.memo(({ onChange, value, ...props }) => {
//   const handleChange = (newValue) => {
//     if (onChange) {
//       onChange(newValue);
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DesktopDatePicker
//         value={value ? dayjs(value) : null}
//         onChange={handleChange}
//         renderInput={(params) => <TextField {...params} fullWidth margin="normal" variant="outlined" />}
//         {...props}
//       />
//     </LocalizationProvider>
//   );
// });

// export default DateField;
