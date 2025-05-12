import { Tabs, Tab, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'




function CustomButtonTabs({value,handleChange,tablist}) {
  const theme = useTheme()
  const tabStyle={
    p: 0.5,
  
    display: 'flex',
    '& .MuiTab-root': {
      textTransform: 'none',
      fontSize: '0.8rem',
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.s,
      padding: '4px 4px',
      minHeight: '30px',
      borderRadius: '4px',
      flex: 1,
      marginRight: '8px',
      '&:last-of-type': {
        marginRight: 0,
      },
      '&:hover': {
        backgroundColor: theme.palette.s,
        color: theme.palette.primary.o,
      },
      '&.Mui-selected': {
        backgroundColor: theme.palette.p,
        color: theme.palette.primary.contrastText,
      },
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  }
 

  return (
    <Box
      sx={{
        background: theme.palette.s,
        borderRadius: '8px',
        height: '40px',
        mb: 0.5,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="full width tabs with spacing"
        sx={tabStyle}
      >
       {tablist.map((o,i)=>
        <Tab key={i} label={o} />
       )}
      </Tabs>
    </Box>
  )
}

export default CustomButtonTabs
