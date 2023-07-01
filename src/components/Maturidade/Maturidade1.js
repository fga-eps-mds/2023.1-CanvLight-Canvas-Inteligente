import "./Maturidade1.css";

import React, { useState } from "react";

function Maturidade1(){
    function fecharFormIntuicao(e) {
        e.preventDefault();
        let modalOverlay = document.querySelector(".modal-overlay");
        if (modalOverlay) {
          modalOverlay.parentNode.removeChild(modalOverlay);
        }
    
        let modal = document.querySelector(".Maturidade1");
    
        modal.style.display = "none";
        let medel = document.querySelector(".tela_3_form_interacao");
        medel.style.display = "none";
        let modal2 = document.querySelector(".confirma");
        modal2.style.display = "block";
    }
    
    function clicouNaDuvida(){
        alert('duvida clicada!')
    }
    
    return(
        <div className="benchmarking">
                <div className='centerObs1'>
                <button className="close_obs" onClick={(e) => fecharFormIntuicao(e)}></button>
                    <div className="dot2_obs"></div>
                    <div className="dot3_obs"></div>
                    <h2>Benchmarking</h2>
                    <div onClick={clicouNaDuvida}  className='duvida1'></div>
                    <div className="concorrente">
                        <p>Concorrente</p>
                        <table>
                            <tr>
                                <th className="primeiro-canto">Empresa, serviços ou protutos</th>
                                <th>Diferenciais</th>
                                <th>Porte</th>
                                <th>O que o concorrente não faz ou faz mal?</th>
                                <th>Localização</th>
                                <th>O que pode ser imitado?</th>
                                <th className="segundo-canto">O que podemos fazer diferente/melhor?</th>
                            </tr>
                        </table>

                        <div className='clear'></div>
                    </div>

                    <div className="parceiro">

                        <div className='clear'></div>

                        <p>Parceiro</p>
                        <table>
                            <tr>
                                <th className="primeiro-canto">Empresas</th>
                                <th>Insumos</th>
                                <th>Beneficios da parceria</th>
                                <th>Até quanto consegui fornecer?</th>
                                <th>Qual o risco?</th>
                                <th>Por que não verticalizar?</th>
                                <th className="segundo-canto">nota de 1 a 5</th>
                            </tr>

                        </table>
                    </div>

                    <div className='clear'></div>
                
                    <div className='perfil'>
                        <div onClick={clicouNaDuvida} className='duvida2'></div>

                        <div className='clear'></div>

                        <h2>Perfil dos clientes</h2>

                        <div className='dir'>
                            <div className='img-perfil'></div>
  
                        </div>

                        <div className='esq'>
                        <div className='img-perfil'></div>
 
                        <div className='clear'></div>
                    </div>
                    
                </div>

            

            </div>
        </div>
        
    );
}

export default Maturidade1;