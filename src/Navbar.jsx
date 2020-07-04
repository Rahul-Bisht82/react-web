import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar=()=>{
    return(<>
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className= "col-10 mx-auto">
          

            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <NavLink exact className="navbar-brand" to="/">Rahul-Bisht</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact  className="nav-link"  activeClassName="active-class"   aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link"  activeClassName="active-class" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link"  activeClassName="active-class" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link"  activeClassName="active-class" to="/contact">Contact</NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
          

          </div>
      </div>
    </div>

    </>);
}

export default Navbar;