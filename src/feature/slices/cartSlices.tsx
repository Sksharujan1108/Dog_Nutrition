import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the CartItem and CartState interfaces
interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  }
  
  interface CartState {
    items: CartItem[];
    total: number;
  }

  const INITIAL_STATE: CartState = {
    items: [],
    total: 0,
  };

const CartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        resetCheckOutSlice: () => {
            return INITIAL_STATE;
        },

        // Add an item to the cart or increment the quantity if the item already exists
        addToCart: (
            state: CartState,
            action: PayloadAction<CartItem>
        ) => {
            console.log("Adding to cart: ", action.payload); // Log the payload to check
            const existingItem = state.items.find(item => item.id == action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
            state.total += action.payload.price
        },

        // Remove an item from the cart
        deleteFromCart: (state: CartState, action: PayloadAction<CartItem>) => {
            const index = state.items.findIndex(item => item.id == action.payload.id);
            if (index !== -1) {
                state.total -= state.items[index].price * state.items[index].quantity;
                state.items.splice(index, 1);
            }
        },

        // Increment the quantity of an item in the cart
        incrementQuantity: (state: CartState, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id == action.payload);
            if (item) {
                item.quantity += 1;
                state.total += item.price
            }
        },

        // Decrement the quantity of an item in the cart, but not below 1
        decrementQuantity: (state: CartState, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id == action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.total -= item.price
            }
        }
    }
})

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity, resetCheckOutSlice } = CartSlice.actions;

export default CartSlice;
