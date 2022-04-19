import './App.css';
import InputRef from './UseRef/input';
// import Button from './TwoComponents/Button';
// import Calculator from './CalC/Calculator'
// import{BrowserRouter,Route, Routes} from "react-router-dom";
// import NavBar from './Reactrouter/NavBar';
// import Home from './Reactrouter/Home';
// import Dashbord from './Reactrouter/Dashbord';
// import About from './Reactrouter/About';
// import Control from './ContronandUncontrolled/Control';
// import Uncontrol from './ContronandUncontrolled/Uncontrol';
// import NornalComp from './HOC/NornalComp';
// import UseEffect from './Hooks/UseEffect';
// import UseState from './Hooks/useState';
import input from './UseRef/input';
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path='/'  element = {<Home/>}></Route>
        <Route path='/Dashbord'  element = {<Dashbord/>}></Route>
        <Route path='/About'  element = {<About/>}></Route>
      </Routes>
      </BrowserRouter> */}
      {/* <Control/>
      <Uncontrol/> */}
      {/* <NornalComp></NornalComp> */}
      {/* <UseState></UseState> */}
      {/* <UseEffect></UseEffect> */}
      <input></input>
    </div>
  );
}

export default App;
