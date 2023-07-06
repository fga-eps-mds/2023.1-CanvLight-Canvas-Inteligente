import "./Maturidade5.css";
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

    return(
        <div className="areaResult">
            <div className="formResult">
                <button className="close_area4" onClick={(e) => fecharFormMaturidade5(e)}></button>
                <div className="dot2_area4"></div>
                <div className="dot3_area4"></div>
                <h2 className="titulo">Marketing</h2>

                
                <div  onClick={(e) => irParaFormMaturidade4(e)} className='setaEsquerda' ></div>
                <div  onClick={(e) => fecharFormMaturidade5(e)} className='feitoMaturidade' ></div>
            </div>
        </div>
        
    );
}

export default Maturidade5;