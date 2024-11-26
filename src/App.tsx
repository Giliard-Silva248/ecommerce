import { NavBar } from './components/NavBar/NavBar';
import { Home } from './Pages/Home/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

import { Route, Routes } from "react-router-dom";
import { Login } from './Pages/Login/Login';




function App() {
  return (
    <Provider store={store}>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
