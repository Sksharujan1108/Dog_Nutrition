import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

// Define the CartItem and CartState interfaces
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  cart: CartItem[];
  total: number;
  itemCount: number; // Add a new property to track total items count
}

const INITIAL_STATE: CartState = {
  cart: [],
  total: 0,
  itemCount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    resetCheckOutSlice: () => {
      return INITIAL_STATE;
    },

    // Add an item to the cart or increment the quantity if the item already exists
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      console.log("Adding to cart: ", action.payload); // Log the payload to check
      const itemCard = state.cart.find((item) => item.id == action.payload.id);
      if (itemCard) {
        // Use immutability to increase the item quantity
        itemCard.quantity += 1;
      } else {
        // Add new item to the cart
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      // Update the total price
      state.total += action.payload.price;
      state.itemCount += 1; // Increment item count
    },

    // Remove item from cart and recalculate the total
    deleteFromCart: (state: CartState, action: PayloadAction<number>) => {
      const itemToRemove = state.cart.find((item) => item.id === action.payload);
      if (itemToRemove) {
        // Update total price and item count based on the quantity being removed
        state.total -= itemToRemove.price * itemToRemove.quantity;
        state.itemCount -= itemToRemove.quantity; // Decrease item count
      }
      // Filter out the removed item
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    
    // Increment the quantity of an item in the cart
    incrementQuantity: (state: CartState, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id == action.payload);
      if (item) {
        item.quantity += 1;
        state.total += item.price;
        state.itemCount += 1; // Increment item count
      }
    },

    // Decrement the quantity of an item in the cart, but not below 1
    decrementQuantity: (state: CartState, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id == action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.total -= item.price;
        state.itemCount -= 1; // Increment item count
      }
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
  resetCheckOutSlice,
} = CartSlice.actions;

export const SelectItems = (state: RootState) => state.cart.cart;
export const selectTotal = (state: RootState) => state.cart.total;
export const selectCartItemsCount = (state: RootState) => state.cart.cart.length;

export default CartSlice;
