import React, { useState } from "react";
import { Link} from "react-router-dom";
import "./Canvas.css";
import logo from "../../images/logo_canvlight.png";
import arrowIcon from "../../images/arrow.png";
import Intuicao from "../../components/intuicao/Intuicao.js";
import Observacao1 from "../../components/observacao/Observacao1.js";
import Observacao2 from "../../components/observacao/Observacao2.js";
import Observacao3 from "../../components/observacao/Observacao3.js";
import Interacao from "../../components/Interacao/Interacao.js";
import checkIcon from "../../images/check.png";

import { jsPDF } from "jspdf";
import GeradorPDF from "../../components/GeradorPDF/GeradorPDF.js";

function Canvas() {

  const [empresa, setEmpresa] = useState({});
  const [diferenca, setDiferenca] = useState({});
  const [porte, setPorte] = useState({});
  const [concorrencia, setConcorrencia] = useState({});

  const handleConcorrenciaChange = (novosDadosConcorrencia) =>{
    setConcorrencia(novosDadosConcorrencia);
  }

  const handlePorteChange = (novosDadosPorte) =>{
    setPorte(novosDadosPorte);
  }

  const handleDiferencaChange = (novosDadosDiferenca)=>{
    setDiferenca(novosDadosDiferenca);
  }

  const handleEmpresaChange = (novosDadosEmpresa) => {
    setEmpresa(novosDadosEmpresa);
  };

/*   const [projeto, setProjeto] = useState("");
  const [equipe, setEquipe] = useState(""); */


  /*Chamadas para o form de Intuição*/
  function abrirFormIntuicao(e) {
    e.preventDefault();

    let modal = document.querySelector(".form");

    modal.style.display = "block";
  }

  /*Chamadas para o form de Interção*/
  function abrirFormInteracao(e) {
    e.preventDefault();

    let modal = document.querySelector(".form_interacao");

    <Interacao />;

    modal.style.display = "block";
  }

  function abrirFromObservação(e) {
    e.preventDefault();

    let modal = document.querySelector(".benchmarking");

    modal.style.display = "block";
  }

  return (
    <div className="body">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo_navbar" />
          <p className="name_navbar">CanvLight</p>
          <p className="cnvgen_navbar">Gerar Canvas</p>
          <div className="clear"></div>
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
      </div>
      <Intuicao />

      <Observacao1 
        onEmpresaChange={handleEmpresaChange}
        onDiferencaChange={handleDiferencaChange}
        onPorteChange={handlePorteChange}
        onConcorrenciaChange={handleConcorrenciaChange}
      />

      <Observacao2 />

      <Observacao3 />

      <Interacao />

      <GeradorPDF
        empresa={empresa}
        diferenca={diferenca}
        porte={porte}
        concorrencia={concorrencia}
      />
      <Link to="/2023.1-CanvLight-Canvas-Inteligente">
      <img
        src={arrowIcon}
        alt="Seta"
        className="arrow-button"
      />
      </Link>
      <div>
        <img src={checkIcon} alt="Confirma" className="confirma" />
      </div>
    </div>
  );
}

export default Canvas;
