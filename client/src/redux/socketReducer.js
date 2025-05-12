import { createSlice } from '@reduxjs/toolkit';
import { throttleThunk } from './reducers/userReducer';
import { getChat } from '../services/userServices/allServices.js';



export const getConverstationUser = throttleThunk('user/getUserChat', async (id) => {
  try {
    const res = await getChat(id)
    return res.data
  } catch (err) {
    return 'failed'
  }
})

const onlineUserSlice = createSlice({
  name: 'online-user',
  initialState: {
    user: null,
    onlineUsers: [],
    messages: [],
    onlineNotification:false
  },
  reducers: {
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setOnlineNotification: (state, action) => {
      state.onlineNotification=!state.onlineNotification
    },

    connectSocket: () => {
     
    }, 
    disconnectSocket: () => {},
    sendMessage: (state, action) => {}, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConverstationUser.fulfilled, (state, action) => {
        state.loading = false
        state.conversation = action.payload
      })

    }
});

export const { setOnlineUsers, addMessage, connectSocket, disconnectSocket, sendMessage,setOnlineNotification } = onlineUserSlice.actions;
export default onlineUserSlice.reducer;
