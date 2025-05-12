
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '../../../constents/routpath';
import { Box, Typography } from '@mui/material';
import { Center } from '../../atoms/Link/CenterBox';
import { isValidUser } from '../../../redux/reducers/userReducer';
import Navbar from '../navbar/Navbar';
import Sidebar from './Sidebar';
import { useTheme } from '@emotion/react';
import { connectSocket, disconnectSocket } from '../../../redux/socketReducer';

const MainLayout = () => {
  const dispatch = useDispatch();
  const {palette:{background}}=useTheme()
  const nav = useNavigate();
  const dis = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [isAuth, setIsAuth] = useState(false);
  

  useEffect(() => {
    if (user?.token && user?.role) {
      setIsAuth(true);
    } else {
      nav('/login');
    }
  }, [user, nav]);

  useEffect(() => {

    if (user) {
      dis(isValidUser(user));
    }
  }, [user, dis]);

  useEffect(() => {
    dispatch(connectSocket());
    return ()=> dispatch(disconnectSocket());
  }, []);

  return isAuth ? (
    <Box  display="flex" sx={{ position:"fixed",  height: "100vh", width: "100vw",bgcolor:background.bg }}>
      {/* <Sidebar role={user?.role} /> */}
      <Box sx={{ 
         mt: 8,
         flexGrow: 1,
         transition: "margin-left 0.3s ease, width 0.3s ease",
         width: user?.barOpen ? "calc(100vw - 200px)" : "calc(100vw - 55px)", 
         overflow: "hidden",
         }}>
        <Navbar />
        <Box  id="my-layout">
        <Layout role={user?.role} />

        </Box>
      </Box>
    </Box>
  ) : (
    <Center>
      <Typography className='delayedMessage' sx={{ fontSize: '1.5rem' }}>
        Do not have access? <Link to="/login">Please Login</Link>
      </Typography>
    </Center>
  );
};

export default MainLayout;
