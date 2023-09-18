import React from 'react'
import { useSelector } from 'react-redux'


export default function CartItem() {

    const { cartItems, amount, total } = useSelector((store) => store.cart)

    return (
        <div>cart item</div>
    )
}