import "./Observacao2.css";

function Observacao2() {
  function clicouNaDuvida() {
    alert("duvida clicada!");
  }

  function irParaObservacao1(e) {
    e.preventDefault();

    let modal = document.querySelector(".benchmarking");
    let modal2 = document.querySelector(".Observacao2");

    modal.style.display = "block";
    modal2.style.display = "none";
  }

  function irParaObservacao3(e) {
    e.preventDefault();

    let modal = document.querySelector(".Observacao2");
    let modal2 = document.querySelector(".Observacao3");

    modal.style.display = "none";
    modal2.style.display = "block";
  }

  function fecharFormIntuicao(e) {
    e.preventDefault();
    let modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.parentNode.removeChild(modalOverlay);
    }

    let modal = document.querySelector(".Observacao2");

    modal.style.display = "none";
    let medel = document.querySelector(".tela_3_form_interacao");
    medel.style.display = "none";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "block";
  }

  return (
    <div className="Observacao2">
      <div className="centerObs2">
        <button
          className="close_obs"
          onClick={(e) => fecharFormIntuicao(e)}
        ></button>
        <div className="dot2_obs"></div>
        <div className="dot3_obs"></div>
        <div className="psdoprojeto">
          <h2>Revisão dos 4P's do projeto:</h2>
          <div onClick={clicouNaDuvida} className="duvida3"></div>
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

        <div className="clear"></div>

        <div className="Relacionamento">
          <div className="Single1">
            <span>Quais parceiros são mais alinhados ao meu negócio?</span>
            <input type="text" />
          </div>

          <div className="Single2">
            <span>De quais parceiros devemos nos aproximar?</span>
            <input type="text" />
          </div>

          <div className="Single3">
            <span>Conseguimos transformar algum concorrente em parceiro?</span>
            <input type="text" />
          </div>
        </div>

        <div className="clear"></div>

        <div className="conceito">
          <p>Conceito:</p>
          <div onClick={clicouNaDuvida} className="duvida4"></div>
          <table>
            <tr>
              <th className="primeiro-canto">Ferramentas</th>
              <th>Requisitos</th>
              <th>Oportunidades</th>
              <th>Indicado para</th>
              <th>Orientações de uso</th>
              <th className="segundo-canto">Resultado esperado</th>
            </tr>

            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
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
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>

            <tr>
              <td className="quarto-canto">
                <input className="quarto-canto" type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td className="terceiro-canto">
                <input className="terceiro-canto" type="text" />
              </td>
            </tr>
          </table>
        </div>

        <div
          onClick={(e) => irParaObservacao1(e)}
          className="seta-esquerda_obs2"
        ></div>

        <div
          onClick={(e) => irParaObservacao3(e)}
          className="seta-direita_obs2"
        ></div>

        <div className="clear"></div>
      </div>
    </div>
  );
}

export default Observacao2;
