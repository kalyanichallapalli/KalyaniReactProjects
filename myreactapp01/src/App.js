import './App.css';
import AgeCount from './Redux/AgeCount';
import Reducer from './Redux/Reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import NavBar from './Reactrouter/NavBar';
import { BrowserRouter,router,route } from 'react-router-dom';
const store = createStore(Reducer)
function App() {
  return (
    <div className="App">
      {/* <Provider store={store}>
      <AgeCount/>
      </Provider> */}
     <NavBar></NavBar>
    </div>
  );
}

export default App;
