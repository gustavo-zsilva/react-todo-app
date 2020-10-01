import React from 'react';
import './index.css'
import Header from './components/Header'
import Todos from './components/Main'

function App() {
  return (
    <div className="App">
      <Header />
      <Todos />
    </div>
  );
}

export default App;
