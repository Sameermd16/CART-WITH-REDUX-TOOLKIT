import { createSlice } from '@reduxjs/toolkit' 
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    amount: 2,
    total: 0,
    isLoading: true
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            console.log(action)
            state.cartItems = state.cartItems.filter((item) => {
                return item.id !== action.payload.id 
            })
        }
    }
})

// console.log(cartSlice)
// console.log(cartSlice.reducer)

export const { clearCart, removeItem } = cartSlice.actions 

export default cartSlice.reducer 