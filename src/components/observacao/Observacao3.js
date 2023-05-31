import "./Observacao3.css";

function Observacao3() {
  function clicouNaDuvida() {
    alert("duvida clicada!");
  }

  function irParaObservacao2(e) {
    e.preventDefault();

    let modal = document.querySelector(".Observacao2");
    let modal2 = document.querySelector(".Observacao3");

    modal.style.display = "block";
    modal2.style.display = "none";
  }
  function observacaoFinalizada(e) {
    e.preventDefault();

    let modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.parentNode.removeChild(modalOverlay);
    }

    let modal = document.querySelector(".Observacao3");

    modal.style.display = "none";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "block";
  }

  return (
    <div className="Observacao3">
      <div className="centerObs3">
        <div className="Modelo">
          <p>Modelo:</p>
          <div onClick={clicouNaDuvida} className="duvida5"></div>
          <table>
            <tr>
              <th className="primeiro-canto">Ferramentas/Procedimentos</th>
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
              <td className="terceiro-canto">
                <input className="terceiro-canto" type="text" />
              </td>
            </tr>
          </table>
        </div>

        <div className="clear"></div>

        <div className="Prototipo">
          <p>Protótipo:</p>
          <div onClick={clicouNaDuvida} className="duvida6"></div>
          <table>
            <tr>
              <th className="primeiro-canto">Ferramentas/Procedimentos</th>
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
              <td className="terceiro-canto">
                <input className="terceiro-canto" type="text" />
              </td>
            </tr>
          </table>
        </div>

        <div
          onClick={(e) => irParaObservacao2(e)}
          className="seta-esquerda"
        ></div>
        <div
          className="Observacao-finalizada"
          onClick={(e) => observacaoFinalizada(e)}
        ></div>

        <div className="clear"></div>
      </div>
    </div>
  );
}
export default Observacao3;
