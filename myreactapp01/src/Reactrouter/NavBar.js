import React from 'react';
import{Link} from "react-router-dom";
function NavBar() {
  return (
    <div>
        <ul>
           <Link to="/"><li>Home</li></Link> 
           <Link to="/dashbord"><li>Dashbord</li></Link>
           <Link to="/about"><li>About</li></Link> 

        </ul>
    </div>
  )
}
export default NavBar