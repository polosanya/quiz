import { configureStore } from '@reduxjs/toolkit';
import moneyReducer from './moneySlice';

export const store = configureStore({
  reducer: {
    money: moneyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
