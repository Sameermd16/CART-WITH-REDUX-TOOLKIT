import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import CartItem from "./components/CartItem";
import Modal from "./components/Modal";
import { getCartItems } from './features/cart/cartSlice'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {

  const { isLoading } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log('app -> effect ran')
    dispatch(getCartItems())
  }, [])

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
      <CartItem />
      <Modal />
    </main>
  )
}
export default App;
