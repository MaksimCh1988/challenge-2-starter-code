import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartContextProvider from './store/CartContextProvider';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCardHandler = () => {
    setCartIsVisible(true);
  };

  const hideCardHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart = {hideCardHandler} />}
      <Header onShowCart = {showCardHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
