import React from "react";
import '../styles/NavBar.css'

function NavBar(){
    return(
    <header>
            <div className="logo">
               
          <h1>GreenScope<em>Environmental</em></h1> 
        </div>
        <nav>
            <ul>
         <li>Home</li>
            <li>About</li>
            <li>Services</li>
            
         </ul>
        </nav>
        <div >
        <button>CONTACT US</button>
        </div>
    </header> 
    )
}
export default NavBar;