import React from 'react';
import './App.css';
import CalculatorOutlet from './components/CalculatorOutlet';

function App() {
  return (
   <div className='h-screen flex items-center justify-center'>
    <CalculatorOutlet></CalculatorOutlet>
   </div>
  );
}

export default App;
