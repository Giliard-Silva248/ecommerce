import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

import { Route, Routes } from "react-router-dom";
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';


function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
