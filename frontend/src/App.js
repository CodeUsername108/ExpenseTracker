import { Navigation } from './Components/Navigation/Navigation';
import { DashBoard } from './Components/Dashboard/Dashboard';
import { Incomes } from './Components/Incomes/Incomes';
import { Expenses } from './Components/Expenses/Expenses';
import './styles/App.css';
//eslint-disable-next-line
import React, { useState } from 'react';
import { useGlobalContext } from './context/globalContext';
import Footer from './Components/Footer/Footer';


function App() {
  const [active, setActive] = React.useState(1)
  const global = useGlobalContext()
  console.log(global)
  const displayData = () => {
    switch (active) {
      case 1:
        return <DashBoard />
      case 2:
        return <DashBoard />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <DashBoard />
    }
  }
  return (
    <div className="App">
      <div className='App-inside'>
        <Navigation active={active} setActive={setActive} />
        {displayData()}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
