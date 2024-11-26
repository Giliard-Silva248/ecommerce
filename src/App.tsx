import { Provider } from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import { store } from './redux/store/store';


function App() {
  return (
    <Provider store={store}>
        <section className='bg-cor5'>
      
          <NavBar />
        
     
        </section>
    </Provider>
  );
}

export default App;
