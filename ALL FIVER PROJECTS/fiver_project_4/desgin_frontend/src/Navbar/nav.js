import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Nav,NavDropdown} from "react-bootstrap"
import "./nav.css"
function Header() {
    return (
        <div  style={{padding:"8px",borderBottomStyle:"outset",borderWidth:"1px"}}>
            <nav class="navbar navbar-expand-lg navbar-light ">
              <button class="navbar-toggler  "  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <a class="navbar-brand" href="#">dribble</a>
        <a class="navbar-brand" href="#" style={{color:"grey"}} className="signin">sign in</a>

      
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a class="nav-link" href="#">Inspiration <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Find Work</a>
            </li>
           <li>
           <a class="nav-link" href="#">Learn Design</a>
           </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Go pro</a>
            </li>
          </ul>
        
      <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"3px"}}>
      <div style={{marginLeft:"4px"}}><a class="nav-link " className="full_width_sign" style={{color:"black"}} href="#">Sign in</a></div>
    {/* <div style={{marginRight:"4px"}}> <a class="nav-link " className="full_width_sign" style={{color:"black"}} href="#">Sign up</a></div> */}
      </div>
        </div>
      </nav>
        </div>
    )
}

export default Header
