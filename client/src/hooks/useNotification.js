import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import { hidenotification, setnotification } from '../redux/reducers/userReducer';

const useNotification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.user.notification);

  const setNotification = (message, type = 'success') => {
    dispatch(setnotification({ message, type }));
  };

  const handleClose = () => {
    dispatch(hidenotification());
  };

  const Notification = () => (
    <Snackbar
      open={notification.isVisible}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity={notification.type} sx={{ width: '100%' }}>
        {notification.message}
      </Alert>
    </Snackbar>
  );

  return { Notification:<Notification/>, setNotification};
};

export default useNotification;
