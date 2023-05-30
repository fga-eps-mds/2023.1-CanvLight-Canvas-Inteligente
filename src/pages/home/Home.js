import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import logo from "../../images/logo_canvlight.png";

function Home() {
 

  function formulario(){
   
  }


  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo_navbar" />
        </div>
        <p className="name_navbar">CanvLight</p>

        <nav className="desktop">
          <ul>
            <li className="ativo">Home</li>
            <li>Tutorial</li>
            <li>Gerar canvas</li>
          </ul>
        </nav>
      </div>

      <div className="sol-bg">
        <button className="main-btn" /*onClick={tutorial()}*/>
          Como usar?
        </button>

        <button className="main-btn1" onClick={formulario()}>
          Gerar Canvas
        </button>

        <div className="sol-inv"></div>
      </div>

      <div className="sobre">
        <h2>Quem Somos</h2>

        <p>
          Bem-vindo ao nosso projeto da matéria de Métodos e Desenvolvimento de
          Software (MDS). Nós somos um grupo de estudantes apaixonados por
          tecnologia e inovação, e criamos este Canvas Inteligente para ajudar
          as pessoas a organizar e gerenciar suas ideias de forma mais
          eficiente. Nosso projeto foi desenvolvido usando as mais recentes
          tecnologias e práticas de desenvolvimento de software, para garantir
          que ele seja rápido, confiável e fácil de usar. Nosso Canvas
          Inteligente é intuitivo e totalmente personalizável, permitindo que
          você organize suas ideias e projetos da maneira que melhor se adapta a
          você.
        </p>

        <div className="membros">
          <nav>
            <ul>
              <a href="https://github.com/pkbceira03" target="_black">
                <li className="cabeceira"></li>
              </a>
              <a href="https://github.com/LimirioGuimaraes" target="_black">
                <li className="limirio"></li>
              </a>
              <a href="https://github.com/fsousac" target="_black">
                <li className="felipe"></li>
              </a>
              <a href="https://github.com/brenoalexandre0" target="_black">
                <li className="breno"></li>
              </a>
              <a href="https://github.com/raquel-andrade" target="_black">
                <li className="raquel"></li>
              </a>
              <a href="https://github.com/HeBatalha" target="_black">
                <li className="henrique"></li>
              </a>
              <a href="https://github.com/brunotarquinio" target="_black">
                <li className="bruno"></li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Home;
