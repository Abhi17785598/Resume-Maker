// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    
    </>
  );
};

export default App;
