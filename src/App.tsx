import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';


function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <Home/>
    </Provider>
  );
}

export default App;
