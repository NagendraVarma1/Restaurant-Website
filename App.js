import React,{useState, Fragment} from 'react';
import Header from './Components/Header/Header';
import Summary from './Components/Summary/Summary';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
  const [cartEnable, setCartEnable] = useState(false);

  const cartEnableHandler = () => {
    setCartEnable(true);
  }

  const cartCloseHandler = () => {
    setCartEnable(false);
  }
  
  return (
    <Fragment>
      {cartEnable && <Cart onClose = {cartCloseHandler}/>}
      <Header onCartClick={cartEnableHandler}/>
      <Summary />
      <Meals />
    </Fragment>
  );
}

export default App;
