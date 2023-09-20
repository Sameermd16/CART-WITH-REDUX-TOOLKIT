import { createAsyncThunk, createSlice } from '@reduxjs/toolkit' 
import cartItems from '../../cartItems'
import axios from 'axios'

const initialState = {
    cartItems: [],
    amount: 2,
    total: 0,
    isLoading: false 
}

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk("cart/getCartItems",
    async (thunkAPI) => {
        try{
            const resp = await axios.get(url)
            return resp.data 
        } catch(error) {
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)
// console.log(getCartItems)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            // console.log(action)
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
            state.total = Number(total.toFixed(2))
        },
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            console.log(action)
            state.isLoading = false 
            state.cartItems = action.payload 
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false 
        }
    }
})

// console.log(cartSlice)
// console.log(cartSlice.reducer)

export const { clearCart, removeItem, increase, decrease, totalItems } = cartSlice.actions 

export default cartSlice.reducer 