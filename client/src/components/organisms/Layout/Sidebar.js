import { Box, List, ListItem, ListItemText, Drawer, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { sidebarOptions } from '../../../constents/routpath'
import { iconList } from '../../atoms/icons'
import { setPath, setbar } from '../../../redux/reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { useTheme } from '@emotion/react'

const Sidebar = ({ role }) => {
  const {
    palette: { text, primary, background },
    cusomStyle: { font },
  } = useTheme()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const menuItems = sidebarOptions?.[role] || []

  const handleItemClick = (path) => {
    dispatch(setPath(path))
    navigate(path)
    if(path=="help-support"){
      dispatch(setbar(!user?.barOpen))
    }
  }

  const toggleSidebar = () => {
    dispatch(setbar(!user?.barOpen))
  }


  // ___________style_____________________

  const itemListStyle = {
    cursor: 'pointer',
    borderRadius: '5px',
    m: 0,
    py: 1,
    mx: 1,
    my: 0.5,
    transition: 'width 0.5s ease',
    width: user?.barOpen ? 180 : 42,
    height: '40px',
  }
  const drowerStyle = {
    width: user?.barOpen ? 200 : 55, // Adjust width dynamically
    flexShrink: 0,
    zIndex: 1,
    position: "relative",
    transition: "width 0.3s ease-in-out", // Smooth animation
    "& .MuiDrawer-paper": {
      border: "none",
      top: "64px",
      width: user?.barOpen ? 200 : 55, // Ensure drawer width changes
      transition: "width 0.3s ease-in-out",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      background: background.default,
    },
  }
  const boxStyle = {
    width: user?.barOpen ? 200 : 55,
    transition: "width 0.3s ease-in-out",
    height: "100vh",
  }

  const itemTextStyle = {
    opacity: user?.barOpen ? 1 : 0,
    transform: user?.barOpen ? 'translateX(0)' : 'translateX(-20px)',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: text.primary,
  }
  const typeStyle = {
    style: {
      fontSize: font?.f2 || '0.8rem',
    },
  }

  return (
    <Drawer variant="permanent" anchor="left" sx={drowerStyle}>
      <Box sx={boxStyle} onDoubleClick={toggleSidebar}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleItemClick(item.path)}
              sx={{
                ...itemListStyle,
                backgroundColor:
                  user.path === item.path ? background.light : 'transparent',
                '&:hover': {
                  backgroundColor:
                    user.path === item.path
                      ? 'rgba(0, 0, 0, 0.2)'
                      : background.light,
                },
              }}
            >
              <span
                style={{
                  paddingRight: '8px',
                  marginLeft: '-8px',
                  color: user.path === item.path ? 'dodgerblue' : text.primary,
                }}
              >
                {iconList?.[item.name] || ''}
              </span>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={typeStyle}
                sx={itemTextStyle}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default Sidebar
