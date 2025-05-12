import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tempReducer from './reducers/tempReducer';
import userReducer from './reducers/userReducer';
import { thunk } from 'redux-thunk';
import socketMiddleware from './socketMiddleware';
import socketReducer from './socketReducer';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['user', 'token',"path","barOpen","theam"], 
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const rootReducer = combineReducers({
  user: persistedUserReducer,
  temp: tempReducer, 
  socket: socketReducer, 
});


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(socketMiddleware,thunk), 
});

export const persistor = persistStore(store);
export default store;
