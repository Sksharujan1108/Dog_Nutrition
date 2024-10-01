import { combineReducers } from '@reduxjs/toolkit';
import CartSlice from './slices/cartSlices';

const rootReducer = combineReducers({
  cart: CartSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
