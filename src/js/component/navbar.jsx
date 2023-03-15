import React from "react";

function Navbar (){
    return (<nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a className="navbar-brand text-white container" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toogle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active text-white" href="#">Home <span class="sr-only">(current)</span></a>
        <a className="nav-item nav-link text-white" href="#">About</a>
        <a className="nav-item nav-link text-white" href="#">Service</a>
        <a className="nav-item nav-link text-white" href="#">Contact</a>
      </div>
    </div>
  </nav>)}
 

export default Navbar;
