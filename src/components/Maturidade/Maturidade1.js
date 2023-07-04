import "./Maturidade1.css";
import React, { useState } from "react";

function Maturidade1(){
    function fecharFormMaturidade1(e) {
        e.preventDefault();
        let modalOverlay = document.querySelector(".modal-overlay");
        if (modalOverlay) {
          modalOverlay.parentNode.removeChild(modalOverlay);
        }
    
        let modal = document.querySelector(".areaAdm");
        modal.style.display = "none";

        let modal2 = document.querySelector(".confirma");
        modal2.style.display = "block";
      }
    
    function irParaAreaRh(e) {
        e.preventDefault();
    
        let modal = document.querySelector(".areaAdm");
        modal.style.display = "none";

        let modal2 = document.querySelector(".areaRh");
        modal2.style.display = "block";
    }

    return(
        <div className="areaAdm">
            <div className="formAdm">
                <button className="close_area1" onClick={(e) => fecharFormMaturidade1(e)}></button>
                <div className="dot2_area1"></div>
                <div className="dot3_area1"></div>
                <h2 className="titulo">Área Administrativa</h2>
                <div onClick={() => {window.open("tutorial#tut_canais_venda", "_blank");
                }}className="duvidaAdm"></div>
                <div onClick={(e) => irParaObservacao2(e)} className='setaDireita'></div>
            </div>
        </div>
        
    );
}

export default Maturidade1;