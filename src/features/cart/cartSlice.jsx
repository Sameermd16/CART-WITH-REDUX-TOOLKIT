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
        },
        increase: (state, action) => {
            console.log(action)
            const matchedItem = state.cartItems.find((item) => {
                return item.id === action.payload.id 
            })
            matchedItem.amount = matchedItem.amount + 1
        },
        decrease: (state, action) => {
            const matchedItem = state.cartItems.find((item) => {
                return item.id === action.payload.id 
            })
            matchedItem.amount = matchedItem.amount - 1
        },
        totalItems: (state, action) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach((item) => {
                amount += item.amount 
                total += item.amount * item.price 
            })
            state.amount = amount 
            state.total = total.toFixed(2) 
        }
    }
})

// console.log(cartSlice)
// console.log(cartSlice.reducer)

export const { clearCart, removeItem, increase, decrease, totalItems } = cartSlice.actions 

export default cartSlice.reducer 