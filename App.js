import React,{Fragment} from 'react';
import Header from './Components/Header/Header';
import Summary from './Components/Summary/Summary';
import Meals from './Components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Header />
      <Summary />
      <Meals />
    </Fragment>
  );
}

export default App;
