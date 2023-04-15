import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from '@/redux/slices/themeSlice';
import authReducer from '@/redux/slices/authSlice';
import authUserReducer from '@/redux/slices/authUserSlice';
import api from './api';

const themeConfig = {
  key: 'theme',
  storage,
};

const authConfig = {
  key: 'auth',
  storage,
};

const rootReducer = combineReducers({
  theme: persistReducer(themeConfig, themeReducer),
  auth: persistReducer(authConfig, authReducer),
  authUser: authUserReducer,

  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
