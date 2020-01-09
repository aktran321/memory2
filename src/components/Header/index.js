import React from "react";
import "./style.css";

 const Header = props => (
  <div className = "main-container">
    <nav className = "navbar sticky-top navbar-light bg-light justify-content-end">
      <h5 className = "text-muted">Current Score: {props.currentScore} | Top Score: {props.topScore}</h5>
    </nav>
    <div className = "jumbotron text-muted">
      <h1>Memory Game</h1>
    </div>
  </div>
 )

export default Header;
