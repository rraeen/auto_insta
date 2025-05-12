const colors={
  outline:"dodgerblue",
}
const lightColor={
  p:"dodgerblue",
  s:"rgba(0, 0, 0, 0.05)",
  t:"#fff",
  o:"#000"
  
}
const darkColor={
  p:"dodgerblue",
  s:"#2B2D2E",
  t:"#000",
  o:"#fff"

}
export const lightTheme = {
    palette: {
      mode: 'light',
      primary: { main: '#1976d2',none:"#fff" },
      background: { default: '#fff',light:"rgba(0, 0, 0, 0.05)", bg: 'rgba(0, 0, 0, 0.05)',paper:"#fff" },
      text: { primary: '#000000', },
      ...lightColor
    },
  };
  
  export const darkTheme = {
    palette: {
      mode: 'dark',
      primary: { main: '#1976d2' },
      background: { default: '#242526',light:"#2B2D2E", bg: '#151617',paper:"#151617" }, 
      text: { primary: '#ffffff' }, 
      ...darkColor
   
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            scrollbarWidth: 'thin', 

          },
          '*::-webkit-scrollbar-thumb': {
            borderRadius: '8px',
             display:"none !importent"
          },
        }}}
  };

export const customTheme = {
    cusomStyle: {
      ...colors,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      font:{f0:"1rem",f1:"0.9rem",f2:"0.8rem"},
      center:{
        display:"flex",
        alignItems: 'center',
        // justifyContent: 'center',
      }

    },
  };
  
  