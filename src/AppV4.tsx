import React from 'react';
import './AppV4.css';
import Navbar from './components/NavBar';
import Downloads from './components/Downloads';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <Downloads />
      </div>
    </div>
  );
}

export default App;
