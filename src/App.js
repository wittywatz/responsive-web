import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </>
  );
}

export default App;
