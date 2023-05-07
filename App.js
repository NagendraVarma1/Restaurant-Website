import React,{Fragment} from 'react';
import Header from './Components/Header/Header';
import Summary from './Components/Summary/Summary';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <Summary />
      <Meals />
    </Fragment>
  );
}

export default App;
