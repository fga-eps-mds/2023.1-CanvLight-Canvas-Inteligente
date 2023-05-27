import React from 'react';
import './Canvas.css';
import logo from '../../images/logo_canvlight.png'
import arrowIcon from '../../images/arrow.png';
import Interacao from './Interacao.js';
import checkIcon from "../../images/check.png";
import dateIntuition from "../../images/dateIntuition.png";

function Canvas() {
  function handleArrowClick() {
    alert("Seta clicada!");
  }

  function clicouNaDuvida() {
    alert("duvida clicada!");
  }

  function formIntuicaoTerminado() {
    alert("form feito");
  }

  /*Chamadas para o form de Intuição*/ 
  function abrirFormIntuicao(e){
    e.preventDefault();

    let modal = document.querySelector(".form");

    modal.style.display = "block";
  }

  function fecharFormIntuicao(e) {
    e.preventDefault();

    let modal = document.querySelector(".form");

    modal.style.display = "none";
  }

/*Chamadas para o form de Interção*/ 
  function abrirFormInteracao(e){
    e.preventDefault();

    let modal = document.querySelector('.form_interacao');

    <Interacao/>

    modal.style.display = "block";
  }

  return (
    <div className="body">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo_navbar" />
        </div>
        <div className="container">
                
          <div className="rectangle">

            <div className="dot"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
            <button className='button1' onClick={(e) => abrirFormIntuicao(e)}>Intuição</button>
            <button className='button2'>Observação</button>
            <button className='button3' onClick={(e) => abrirFormInteracao(e)} >Interação</button>
            <div className="arrow" onClick={() => handleArrowClick()}></div> 

          </div>   
        </div>
      </div>

      <div className="form">
        <div className="center">
          <button onClick={(e) => fecharFormIntuicao(e)}></button>
          <div className="esquerda">
            <div className="parte1">
              <form>
                <div>
                  <span>Projeto:</span>
                  <input type="text" />
                  <span></span>
                </div>
              </form>
            </div> 
            <div className="parte1_2">
              <form>
                  <div>
                    <p>Equipe:</p>
                    <input type="text" />
                  </div>
              </form>
            </div>

            <div className="tabela1">
              <table>
                <tr>
                  <th>CONCEITO DNA</th>
                  <th>DNA DE NEGÓCIO</th>
                  <th>IMAGEM PAINEL SEMÂNTICO</th>
                </tr>

                <tr>
                  <td className="tecnico">TÉCNICO</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <td className="resiliencia">RESILIENTE</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <td className="emocional">EMOCIONAL</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <td className="mercadologico">MERCADOLÓGICO</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <td className="integrador">INTEGRADOR</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </table>
            </div>

            <div onClick={clicouNaDuvida} className="duvida1"></div>

            <div className="parte2">
              <p>Ikigai:</p>
              <input type="text" />
            </div>

            <div onClick={clicouNaDuvida} className="duvida2"></div>

            <div className="clear"></div>
          </div>

          <div className="direita">
            <div>
                <img
                  src={dateIntuition}
                  alt="DataIntuicao"
                  className="dateInt"
                />
              </div>
            <div className="tabela2">
              <h2>4P's do projeto</h2>

              <table>
                <tr>
                  <td>
                    P1:
                    <input type="text" />
                  </td>
                  <td>
                    P2:
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <td>
                    P3:
                    <input type="text" />
                  </td>
                  <td>
                    P4:
                    <input type="text" />
                  </td>
                </tr>
              </table>
            </div>

            <div onClick={clicouNaDuvida} className="duvida3"></div>

            <div className="tabela3">
              <h2>Síntese</h2>
              <table>
                <tr>
                  <th>POTENCIALIDADES</th>
                  <th>RESULTADOS ESPERADOS</th>
                </tr>

                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </table>
            </div>

            <div onClick={clicouNaDuvida} className="duvida4"></div>

            <div>
              <img
                src={checkIcon}
                alt="ConfirmaIntuicao"
                className="feito" 
                onClick={formIntuicaoTerminado}
              />
            </div>

            <div className="clear"></div>
          </div>
        </div>
      </div>
        <Interacao/>
      <img
        src={arrowIcon}
        alt="Seta"
        className="arrow-button"
        onClick={handleArrowClick}
      />
      <div>
              <img
                src={checkIcon}
                alt="Confirma"
                className="confirma" 
              />
            </div>
    </div>
  );
}

export default Canvas;
