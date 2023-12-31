import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem  from './CartItem'
import { clearCart, totalItems } from '../features/cart/cartSlice'
import { openModal } from '../features/modal/modalSlice'

const CartContainer = () => {

    const { cartItems, amount, total } = useSelector((store) => store.cart)
    // console.log(amount)
    const dispatch = useDispatch()

    const clearCartItems = () => {
        dispatch(
            openModal()
        )
    }

    useEffect(() => {
        dispatch(totalItems())
    }, [cartItems])

    if(amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {
                    cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />
                    })
                }
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total <span>$ {total} </span> </h4>
                </div>
                <button className="btn clear-btn" onClick={clearCartItems}>clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer