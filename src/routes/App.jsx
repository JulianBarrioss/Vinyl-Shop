import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import { Home } from '../pages/Home';
import { Checkout } from '../pages/Checkout';
import { Login } from '../pages/Login';
import { AppContext } from '../context/AppContext';
import { useInitialState } from '../hooks/useInitialState';
import '../styles/routes/App.css';

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={ <Home />}/>
            <Route exact path='/Checkout' element={ <Checkout />}/>
            <Route exact path='/checkout/login' element={ <Login />}/>
          </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
export { App };
