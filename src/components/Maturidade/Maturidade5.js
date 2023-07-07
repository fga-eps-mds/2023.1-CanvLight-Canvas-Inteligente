import "./Maturidade5.css";
import Situacao1 from "../../images/situacao1.png";
import Situacao2 from "../../images/situacao2.png";
import Situacao3 from "../../images/situacao3.png";
import Situacao4 from "../../images/situacao4.png";
import Situacao5 from "../../images/situacao5.png";
import Descricao1 from "./descricao1.json";
import Descricao2 from "./descricao2.json";
import Descricao3 from "./descricao3.json";
import Descricao4 from "./descricao4.json";
import Descricao5 from "./descricao5.json";
import React, { useState } from "react";

function Maturidade5(){

    function fecharFormMaturidade5(e) {
        e.preventDefault();
        let modalOverlay = document.querySelector(".modal-overlay");
        if (modalOverlay) {
          modalOverlay.parentNode.removeChild(modalOverlay);
        }
    
        let modal = document.querySelector(".areaResult");
        modal.style.display = "none";

        let modal2 = document.querySelector(".confirma");
        modal2.style.display = "block";
    }

    function irParaFormMaturidade4(e) {
        e.preventDefault();
    
        let modal = document.querySelector(".areaMkt");
        modal.style.display = "block";

        let modal2 = document.querySelector(".areaResult");
        modal2.style.display = "none";
    }

    const nivel = 1;
    var imgSituacao = null;
    var textSituacao = null;
    if(nivel === 1){
        imgSituacao = Situacao1;
        textSituacao = Descricao1;
    }else if(nivel === 2){
        imgSituacao = Situacao2;
        textSituacao = Descricao2;
    }else if(nivel === 3){
        imgSituacao = Situacao3;
        textSituacao = Descricao3;
    }else if(nivel === 4){
        imgSituacao = Situacao4;
        textSituacao = Descricao4;
    }else if(nivel === 5){
        imgSituacao = Situacao5;
        textSituacao = Descricao5;
    }

    return(
        <div className="areaResult">
            <div className="formResult">
                <button className="close_area4" onClick={(e) => fecharFormMaturidade5(e)}></button>
                <div className="dot2_area4"></div>
                <div className="dot3_area4"></div>
                <h2 className="titulo">Maturidade Nível</h2>
                <h2 className="tituloNivel">{nivel}</h2>
                <img className="situacao" alt="situacao" src={imgSituacao}/>
                <div className="descMaturidade">{textSituacao}</div>
                <table className="tabelaResult"></table>
                <div  onClick={(e) => irParaFormMaturidade4(e)} className='setaEsquerda' ></div>
                <div  onClick={(e) => fecharFormMaturidade5(e)} className='feitoMaturidade' ></div>
            </div>
        </div>
    );
}

export default Maturidade5;