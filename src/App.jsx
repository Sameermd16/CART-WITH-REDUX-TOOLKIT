import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import CartItem from "./components/CartItem";
import Modal from "./components/Modal";

function App() {
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
