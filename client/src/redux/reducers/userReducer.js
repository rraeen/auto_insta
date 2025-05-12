import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import _ from 'lodash'
import {
  loginApi,
  registerApi,
  resetPasswordApi,
  userValidationApi,
} from '../../services/auth/userServices'


export const throttleThunk = (type, asyncFn, delay="10000") => {
  const throttledFn = _.throttle(asyncFn, delay);

  return createAsyncThunk(type, async (args, thunkAPI) => {
    return throttledFn(args, thunkAPI);
  });
};


export const isValidUser = throttleThunk('user/isAuth', async (obj) => {
  try {
    const res = await userValidationApi(obj)
    return res.data
  } catch (err) {
    return 'failed'
  }
})
export const loginUser = createAsyncThunk('user/loginUser', async (obj) => {
  try {
    const res = await loginApi(obj)
    return res.data
  } catch (err) {
    return 'failed'
  }
})
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (obj) => {
    try {
      const res = await registerApi(obj)
      return res.data
    } catch (err) {
      return 'failed'
    }
  },
)
export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async (obj) => {
    try {
      const res = await resetPasswordApi(obj)
      return res.data
    } catch (err) {
      return 'failed'
    }
  },
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    error: null,
    loading: false,
    notification: {
      message: '',
      type: '',
      isVisible: false,
    },
    path:"dashboard",
    barOpen:true,
    theam:"dark",
    dialer:false,
    appointment:{
      tab:0,
    },
    appointmentFormDetails:{},
    chat:{

    },
    instaInstanceId:""
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null
      state.token = null
    },
    setPath: (state,action) => {
      state.path = action.payload
    },
    setTheam: (state,action) => {
      state.theam = action.payload
    },
    setbar: (state,action) => {
      state.barOpen = action.payload
    },
    setdialer: (state,action) => {
      state.dialer = action.payload
    },
    setOnlineUsers: (state,action) => {
      state.chat = action.payload
    },
    setAppointment: (state,action) => {
      state.appointment ={
        ...state.appointment,
        ...action.payload
      }
    },
    setAppointmentFormDetails: (state,action) => {
      state.appointmentFormDetails ={
        ...state.appointmentFormDetails,
        ...action.payload
      }
    },
    setnotification: (state, action) => {
      state.notification = {
        isVisible: true,
        message: action.payload.message,
        type: action.payload.type,
      }
    },
    setInstaInstanceId: (state, action) => {
      state.instaInstanceId = action.payload
    },
    hidenotification: (state) => {
      state.notification = {
        isVisible: false,
        message: '',
        type: '',
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(isValidUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      // ___________________________________login__________________________________

      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        if (action?.payload) {
          state.user = action.payload
        } else {
          state.user = null
          state.token = null
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.error = action.payload
      })

      // ___________________________________register__________________________________
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // ___________________________________reset__________________________________

      .addCase(resetPassword.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const {
  setPath,
  setbar,
  setdialer,
  setTheam,
  logoutUser,
  setAppointment,
  setnotification,
  hidenotification,
  setAppointmentFormDetails,
  setOnlineUsers,
  setInstaInstanceId
} = userSlice.actions

export default userSlice.reducer
