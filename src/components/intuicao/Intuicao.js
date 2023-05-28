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
      <div className="center">
        <button onClick={(e) => fecharFormIntuicao(e)}></button>
        <div className="esquerda">
          <div className="parte1">
            <form>
              <div>
                <span>Projeto:</span>
                <input className="margin" type="text" />
              </div>

              <p>Equipe:</p>
              <input type="text" />
            </form>
            <div onClick={clicouNaDuvida} className="duvida"></div>
          </div>

          <div className="tabela1">
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
                <td className="canto">
                  <input type="text" />
                </td>
              </tr>

              <tr>
                <td className="resiliencia">RESILIENTE</td>
                <td>
                  <input type="text" />
                </td>
                <td className="canto">
                  <input type="text" />
                </td>
              </tr>

              <tr>
                <td className="emocional">EMOCIONAL</td>
                <td>
                  <input type="text" />
                </td>
                <td className="canto">
                  <input type="text" />
                </td>
              </tr>

              <tr>
                <td className="mercadologico">MERCADOLÓGICO</td>
                <td>
                  <input type="text" />
                </td>
                <td className="canto">
                  <input type="text" />
                </td>
              </tr>

              <tr>
                <td className="integrador">INTEGRADOR</td>
                <td className="inferior">
                  <input type="text" />
                </td>
                <td className="terceiro-canto">
                  <input className="input-terceiro-canto" type="text" />
                </td>
              </tr>
            </table>
          </div>

          <div onClick={clicouNaDuvida} className="duvida"></div>

          <div className="parte2">
            <p>ikigai:</p>
            <input type="text" />
          </div>

          <div onClick={clicouNaDuvida} className="duvida"></div>

          <div className="clear"></div>
        </div>

        <div className="direita">
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

          <div onClick={clicouNaDuvida} className="duvida"></div>

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

          <div onClick={clicouNaDuvida} className="duvida"></div>

          <div onClick={formIntuicaoTerminado} className="feito"></div>

          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Intuicao;
