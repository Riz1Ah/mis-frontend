import React from 'react';
import './Portal.css';
import Navbar from './NavBar';
import Downloads from './Downloads';
import useAuth from '../hooks/useAuth';

function Portal() {
  return (
    <div className="Portal">
      <Navbar />
      <div className="container mt-5">
        <Downloads />
      </div>
    </div>
  );
}

export default Portal;
