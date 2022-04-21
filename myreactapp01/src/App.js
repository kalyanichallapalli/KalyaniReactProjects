import './App.css';
import AgeCount from './Redux/AgeCount';
import Reducer from './Redux/Reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
const store = createStore(Reducer)
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <AgeCount/>
      </Provider>
     
    </div>
  );
}

export default App;
