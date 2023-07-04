import "./Maturidade2.css";
import React, { useState } from "react";

function Maturidade2(){
    function fecharFormMaturidade2(e) {
        e.preventDefault();
        let modalOverlay = document.querySelector(".modal-overlay");
        if (modalOverlay) {
          modalOverlay.parentNode.removeChild(modalOverlay);
        }
    
        let modal = document.querySelector(".areaRh");
        modal.style.display = "none";

        let modal2 = document.querySelector(".confirma");
        modal2.style.display = "block";
      }
    
    function irParaAreaFin(e) {
        e.preventDefault();
    
        let modal = document.querySelector(".areaRh");
        modal.style.display = "none";

        let modal2 = document.querySelector(".areaFin");
        modal2.style.display = "block";
    }

    function clicouNaDuvida(){
        alert('duvida clicada!')
    }

    return(
        <div className="areaRh">
            <div className="formRh">
                <button className="close_area2" onClick={(e) => fecharFormMaturidade2(e)}></button>
                <div className="dot2_area2"></div>
                <div className="dot3_area2"></div>
                <h2 className="titulo">Área de Recursos Humanos</h2>
                <div onClick={clicouNaDuvida}  className='duvidaFin'></div>
                <div onClick={() => {window.open("tutorial#tut_canais_venda", "_blank");
                }}className="duvidaFin"></div>
                 <div onClick={(e) => irParaAreaFin(e)} className='setaDireita'></div>
            </div> 
        </div>      
    );            

}

export default Maturidade2