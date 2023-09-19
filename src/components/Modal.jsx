import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, openModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'


const Modal = () => {
    const dispatch = useDispatch()
    const { isOpen } = useSelector((store) => store.modal)

    if(isOpen) {
        return (
            <aside className="modal-container">
                <div className="modal">
                        <h4>remove all items from your shopping cart?</h4>
                        <div className="btn-container">
                        <button type='button' className='btn confirm-btn' onClick={() => {
                            dispatch(clearCart())
                            dispatch(closeModal())
                        }} >confirm</button>
                        <button type='button' className="btn confirm-btn" onClick={() => dispatch(closeModal())}>cancel</button>
                        </div>
                </div>
            </aside>
        )
    }

}

export default Modal 