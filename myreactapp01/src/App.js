import './App.css';
import Button from './TwoComponents/Button';
import Calculator from './CalC/Calculator'
import{BrowserRouter,Route, Routes} from "react-router-dom";
import NavBar from './Reactrouter/NavBar';
import Home from './Reactrouter/Home';
import Dashbord from './Reactrouter/Dashbord';
import About from './Reactrouter/About';
import Control from './ContronandUncontrolled/Control';

function App() {
  return (
    <div className="App">
      <h2>App Component</h2>
      {/* <Calculator></Calculator> */}
      {/* <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path='/'  element = {<Home/>}></Route>
        <Route path='/Dashbord'  element = {<Dashbord/>}></Route>
        <Route path='/About'  element = {<About/>}></Route>
      </Routes>
      </BrowserRouter> */}
      <Control/>
    </div>
  );
}

export default App;
