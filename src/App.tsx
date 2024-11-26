import { NavBar } from './components/NavBar/NavBar';
import { Home } from './Pages/Home/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Login/Login';




function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className='bg-cor5'>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </section>
      </Router>
    </Provider>
  );
}

export default App;

