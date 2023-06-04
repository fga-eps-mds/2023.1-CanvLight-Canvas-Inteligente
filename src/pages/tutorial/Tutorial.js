import React from "react";
import "./tutorial.css";
import logo from "../../images/logo_canvlight.png";
import { Link } from "react-router-dom";

function Tutorial() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Link to="/2023.1-CanvLight-Canvas-Inteligente">
            <img src={logo} alt="Logo" className="logo_navbar" />
            <p className="name_navbar">CanvLight</p>
          </Link>
        </div>

        <nav className="desktop">
          <ul>
            <Link to="/tutorial">
              <li>Como usar?</li>
            </Link>
            <Link to="/canvas">
              <li>Gerar canvas</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Tutorial;
