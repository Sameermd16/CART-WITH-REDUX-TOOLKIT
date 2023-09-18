import React from 'react'
import { ChevronUp, ChevronDown } from '../icons'
import { useDispatch } from 'react-redux'
import { removeItem } from '../features/cart/cartSlice'


export default function CartItem({ id, title, price, img, amount }) {

    const dispatch = useDispatch()

    const removeItemFromCart = () => {
        dispatch(
            removeItem({id})
        )
    }

    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4> {title} </h4>
                <h4 className='item-price'> ${price} </h4>
                <button className="remove-btn" onClick={removeItemFromCart}>remove</button>
            </div>
            <div>
                <button className="amount-btn"> <ChevronUp /> </button>
                <p className='amount'> {amount} </p>
                <button className="amount-btn"> <ChevronDown /> </button>
            </div>
        </article>
    )
}