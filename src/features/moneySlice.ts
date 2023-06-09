import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoneyState {
  amount: number;
}

const initialState: MoneyState = {
  amount: 0,
};

const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    increaseMoney: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    resetMoney: (state) => {
      state.amount = 0;
    },
  },
});

export const { increaseMoney, resetMoney } = moneySlice.actions;
export default moneySlice.reducer;
