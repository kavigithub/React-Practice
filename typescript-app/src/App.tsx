import React from 'react';
import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
        <Greet name="React" messageCount={20} isLogged={true}></Greet>
    </div>
  );
}

export default App;
