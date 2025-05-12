
import React, { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme, customTheme } from './theams';


const theamTemplate={
  dark:darkTheme,
  light:lightTheme
}
const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const {theam} = useSelector((state) => state.user)

  const themeTamp = useMemo(
    () => {
      const selectedTheme = createTheme(theamTemplate[theam]);
      const combinedTheme = createTheme({
        ...selectedTheme,
        ...customTheme,
      });
      return combinedTheme
    },
    [theam]
  );

  useEffect(() => {
   
    if (theam === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.querySelector('html').setAttribute('data-theme', theam);
    console.log(`Theme mode applied: ${theam}`);
  }, [theam]);

  return (
    <ThemeContext.Provider value={{ themeType: theam }}>
      <ThemeProvider theme={themeTamp}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
