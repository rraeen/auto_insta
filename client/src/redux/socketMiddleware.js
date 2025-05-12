import io from 'socket.io-client';
import { addMessage, setOnlineNotification, setOnlineUsers } from './socketReducer';

let socket;

const socketMiddleware = (store) => (next) => (action) => {
  const { dispatch, getState } = store;
  const { user } = getState();
  switch (action.type) {
    case 'online-user/connectSocket': {

      if (!socket && user?.user?.token) {
        socket = io('https://api.kiistbazar.com', {
        // socket = io('http://localhost:5000', {
          auth: {
            token: user?.user?.token,
          },
        });

        socket.on('connect', () => {
          console.log('Connected to server');
        });

        socket.on('onlineUsers', (users) => {
          dispatch(setOnlineUsers(users));
        });
        socket.on('dbChange', (change) => {
          dispatch(setOnlineNotification());
        });

        socket.on('receiveMessage', (messageData) => {
          dispatch(addMessage(messageData));
        });

        socket.on('disconnect', () => {
          console.log('Disconnected from server');
        });
      }
      break;
    }

    case 'online-user/disconnectSocket': {
      if (socket) {
        socket.disconnect();
        socket = null;
      }
      break;
    }

    case 'user/sendMessage': {
      if (socket) {
        socket.emit('sendMessage', action.payload);
      }
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default socketMiddleware;
