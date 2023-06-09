import { combineReducers } from 'redux';
import moneyReducer from './moneySlice';

const rootReducer = combineReducers({
  money: moneyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
