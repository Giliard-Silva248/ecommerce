import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { store } from './redux/store/store';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <Provider store={store}>
        <section className='bg-cor5'>
      
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
     
        </section>
    </Provider>
  );
}

export default App;
