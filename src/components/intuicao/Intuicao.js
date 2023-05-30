import "./Intuicao.css";
import dateIntuition from "../../images/dateIntuition.png";

function Intuicao() {
  function clicouNaDuvida() {
    alert("duvida clicada!");
  }

  function formIntuicaoTerminado() {
    alert("form feito");
  }

  function fecharFormIntuicao(e) {
    e.preventDefault();

    let modal = document.querySelector(".form");

    modal.style.display = "none";
  }

  return (
    <div className="form">
      <div className="centerInt">
        <button
          className="close_int"
          onClick={(e) => fecharFormIntuicao(e)}
        ></button>
        <div className="dot2_int"></div>
        <div className="dot3_int"></div>
        <div className="esquerda">
          <div className="parte1">
            <form>
              <div>
                <h2>Projeto:</h2>
                <input className="inputProjeto" type="text" />
              </div>

              <h2>Equipe:</h2>
              <input className="inputEquipe" type="text" />
            </form>
            <div className="clear"></div>
          </div>

          <div className="tabela1">
            <h2 className="tituloDNA">DNA do negócio:</h2>
            <table>
              <tr>
                <th className="primeiro-canto">CONCEITO DNA</th>
                <th>DNA DE NEGÓCIO</th>
                <th className="segundo-canto">IMAGEM PAINEL SEMÂNTICO</th>
              </tr>

              <tr>
                <td className="tecnico">TÉCNICO</td>
                <td>
                  <input type="text" />
                </td>
                <td className="espacoA1">
                  <input type="text" />
                </td>
              </tr>

              <tr>
                <td className="resiliencia">RESILIENTE</td>
                <td>
                  <input type="text" />
                </td>
                <td className="espacoA2">
                  <input type="text" />
                </td>
              </tr>

              <tr>
                <td className="emocional">EMOCIONAL</td>
                <td>
                  <input type="text" />
                </td>
                <td className="espacoA3">
                  <input type="text" />
                </td>
              </tr>

              <tr>
                <td className="mercadologico">MERCADOLÓGICO</td>
                <td>
                  <input type="text" />
                </td>
                <td className="espacoA4">
                  <input type="text" />
                </td>
              </tr>

              <tr>
                <td className="integrador">INTEGRADOR</td>
                <td>
                  <input type="text" />
                </td>
                <td className="quarto-canto">
                  <input className="quarto-canto" type="text" />
                </td>
              </tr>
            </table>
          </div>

          <div onClick={clicouNaDuvida} className="duvidaDNA_int"></div>

          <div className="parte2">
            <h2>Ikigai:</h2>
            <br />
            <textarea type="text" />
          </div>

          <div onClick={clicouNaDuvida} className="duvidaIkigai_int"></div>

          <div className="clear"></div>
        </div>

        <div className="direita">
          <div>
            <img src={dateIntuition} alt="DataIntuicao" className="dateInt" />
          </div>

          <div className="tabela22">
            <h2>4P's do projeto</h2>
            <table className="four_ps">
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
                <th className="primeiro-canto">POTENCIALIDADES</th>
                <th className="segundo-canto">RESULTADOS ESPERADOS</th>
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
                <td className="quarto-canto">
                  <input className="quarto-canto" type="text" />
                </td>
                <td className="terceiro-canto">
                  <input className="teceiro-canto" type="text" />
                </td>
              </tr>
            </table>
          </div>

          <div onClick={clicouNaDuvida} className="duvida4"></div>

          <div onClick={formIntuicaoTerminado} className="feito"></div>

          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Intuicao;
