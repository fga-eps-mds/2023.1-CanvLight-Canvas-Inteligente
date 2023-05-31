import React from "react";
import { Link } from "react-router-dom";
import "./Canvas.css";
import logo from "../../images/logo_canvlight.png";
import arrowIcon from "../../images/arrow.png";
import Intuicao from "../../components/intuicao/Intuicao.js";
import Observacao1 from "../../components/observacao/Observacao1.js";
import Observacao2 from "../../components/observacao/Observacao2.js";
import Observacao3 from "../../components/observacao/Observacao3.js";
import Interacao from "../../components/Interacao/Interacao.js";
import checkIcon from "../../images/check.png";

function Canvas() {
  /*Chamadas para o form de Intuição*/
  function abrirFormIntuicao(e) {
    e.preventDefault();

    let modal = document.querySelector(".form");

    modal.style.display = "block";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "none";
  }

  /*Chamadas para o form de Interção*/
  function abrirFormInteracao(e) {
    e.preventDefault();

    let modal = document.querySelector(".form_interacao");
    modal.style.display = "block";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "none";
  }

  function abrirFromObservação(e) {
    e.preventDefault();

    let modal = document.querySelector(".benchmarking");

    modal.style.display = "block";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "none";
  }

  return (
    <div className="body">
      <div className="navbar">
        <div className="logo">
          <Link to="/2023.1-CanvLight-Canvas-Inteligente">
            <img src={logo} alt="Logo" className="logo_navbar" />
          </Link>
        </div>
        <Link to="/2023.1-CanvLight-Canvas-Inteligente">
          <p className="name_navbar">CanvLight</p>
        </Link>

        <nav className="desktop">
          <ul>
            <Link to="/2023.1-CanvLight-Canvas-Inteligente">
              <li className="ativo">Home</li>
            </Link>
            <li>Tutorial</li>
            <Link to="/canvas">
              <li>Gerar canvas</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="rectangle">
          <div className="dot"></div>
          <div className="dot2"></div>
          <div className="dot3"></div>
          <button className="button1" onClick={(e) => abrirFormIntuicao(e)}>
            Intuição
          </button>
          <button className="button2" onClick={(e) => abrirFromObservação(e)}>
            Observação
          </button>
          <button className="button3" onClick={(e) => abrirFormInteracao(e)}>
            Interação
          </button>
        </div>
      </div>
      <Intuicao />

      <Observacao1 />

      <Observacao2 />

      <Observacao3 />

      <Interacao />
      <Link to="/2023.1-CanvLight-Canvas-Inteligente">
        <img src={arrowIcon} alt="Seta" className="arrow-button" />
      </Link>
      <div>
        <img src={checkIcon} alt="Confirma" className="confirma" />
      </div>
    </div>
  );
}

export default Canvas;
