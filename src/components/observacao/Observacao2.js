import "./Observacao2.css";
import React, { useState } from "react";

function Observacao2({
  onPsObserChange,
  onAproximadosChange,
  onFerramentasChange,
  onRequisitosChange,
  onOportunidadesChange,
  onIndicadoChange,
  onOrientacaoChange,
  onResultadoChange,
})

  const [primeiroP, setPrimeiroP] = useState();
  const [segundoP, setSegundoP] = useState();
  const [terceiroP, setTerceiroP] = useState();
  const [quartoP, setQuartoP] = useState();
  const [alinhadosObser2, setAlinhadosObser2] = useState();
  const [proximos, setProximos] = useState();
  const [concorrenteObser2, setConcorrenteOser2] = useState();
  const [primeiraLinhaFerramentas, setPrimeiraLinhaFerramentas] = useState();
  const [segundaLinhaFerramentas, setSegundaLinhaFerramentas] = useState();
  const [terceiraLinhaFerramentas, setTerceiraLinhaFerramentas] = useState();
  const [primeiraLinhaRequisitos, setPrimeiraLinhaRequisitos] = useState();
  const [segundaLinhaRequisitos, setSegundaLinhaRequisitos] = useState();
  const [terceiraLinhaRequisitos, setTerceiraLinhaRequisitos] = useState();
  const [primeiraLinhaOportunidades, setPrimeiraLinhaOportunidades] =
    useState();
  const [segundaLinhaOportunidades, setSegundaLinhaOportunidades] = useState();
  const [terceiraLinhaOportunidades, setTerceiraLinhaOportunidades] =
    useState();
  const [primeiraLinhaIndicado, setPrimeiraLinhaIndicado] = useState();
  const [segundaLinhaIndicado, setSegundaLinhaIndicado] = useState();
  const [terceiraLinhaIndicado, setTerceiraLinhaIndicado] = useState();
  const [primeiraLinhaOrientacao, setPrimeiraLinhaOrientacao] = useState();
  const [segundaLinhaOrientacao, setSegundaLinhaOrientacao] = useState();
  const [terceiraLinhaOrientacao, setTerceiraLinhaOrientacao] = useState();
  const [primeiraLinhaResultado, setPrimeiraLinhaResultado] = useState();
  const [segundaLinhaResultado, setSegundaLinhaResultado] = useState();
  const [terceiraLinhaResultado, setTerceiraLinhaResultado] = useState();

  const handleInputChangeResultado = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaResultado") {
      setPrimeiraLinhaResultado(value);
    } else if (name === "segundaLinhaResultado") {
      setSegundaLinhaResultado(value);
    } else if (name === "terceiraLinhaResultado") {
      setTerceiraLinhaResultado(value);
    }

    const novosDadosResultado = {
      primeiraLinhaResultado:
        name === "primeiraLinhaResultado" ? value : primeiraLinhaResultado,
      segundaLinhaResultado:
        name === "segundaLinhaResultado" ? value : segundaLinhaResultado,
      terceiraLinhaResultado:
        name === "terceiraLinhaResultado" ? value : terceiraLinhaResultado,
    };

    onResultadoChange(novosDadosResultado);
  };

  const handleInputChangeOrientacao = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaOrientacao") {
      setPrimeiraLinhaOrientacao(value);
    } else if (name === "segundaLinhaOrientacao") {
      setSegundaLinhaOrientacao(value);
    } else if (name === "terceiraLinhaOrientacao") {
      setTerceiraLinhaOrientacao(value);
    }

    const novosDadosOrientacao = {
      primeiraLinhaOrientacao:
        name === "primeiraLinhaOrientacao" ? value : primeiraLinhaOrientacao,
      segundaLinhaOrientacao:
        name === "segundaLinhaOrientacao" ? value : segundaLinhaOrientacao,
      terceiraLinhaOrientacao:
        name === "terceiraLinhaOrientacao" ? value : terceiraLinhaOrientacao,
    };

    onOrientacaoChange(novosDadosOrientacao);
  };

  const handleInputChangeIndicado = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaIndicado") {
      setPrimeiraLinhaIndicado(value);
    } else if (name === "segundaLinhaIndicado") {
      setSegundaLinhaIndicado(value);
    } else if (name === "terceiraLinhaIndicado") {
      setTerceiraLinhaIndicado(value);
    }

    const novosDadosIndicado = {
      primeiraLinhaIndicado:
        name === "primeiraLinhaIndicado" ? value : primeiraLinhaIndicado,
      segundaLinhaIndicado:
        name === "segundaLinhaIndicado" ? value : segundaLinhaIndicado,
      terceiraLinhaIndicado:
        name === "terceiraLinhaIndicado" ? value : terceiraLinhaIndicado,
    };

    onIndicadoChange(novosDadosIndicado);
  };

  const handleInputChangeOportunidades = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaOportunidades") {
      setPrimeiraLinhaOportunidades(value);
    } else if (name === "segundaLinhaOportunidades") {
      setSegundaLinhaOportunidades(value);
    } else if (name === "terceiraLinhaOportunidades") {
      setTerceiraLinhaOportunidades(value);
    }

    const novosDadosOportunidades = {
      primeiraLinhaOportunidades:
        name === "primeiraLinhaOportunidades"
          ? value
          : primeiraLinhaOportunidades,
      segundaLinhaOportunidades:
        name === "segundaLinhaOportunidades"
          ? value
          : segundaLinhaOportunidades,
      terceiraLinhaOportunidades:
        name === "terceiraLinhaOportunidades"
          ? value
          : terceiraLinhaOportunidades,
    };

    onOportunidadesChange(novosDadosOportunidades);
  };

  const handleInputChangeRequisitos = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaRequisitos") {
      setPrimeiraLinhaRequisitos(value);
    } else if (name === "segundaLinhaRequisitos") {
      setSegundaLinhaRequisitos(value);
    } else if (name === "terceiraLinhaRequisitos") {
      setTerceiraLinhaRequisitos(value);
    }

    const novosDadosRequisitos = {
      primeiraLinhaRequisitos:
        name === "primeiraLinhaRequisitos" ? value : primeiraLinhaRequisitos,
      segundaLinhaRequisitos:
        name === "segundaLinhaRequisitos" ? value : segundaLinhaRequisitos,
      terceiraLinhaRequisitos:
        name === "terceiraLinhaRequisitos" ? value : terceiraLinhaRequisitos,
    };

    onRequisitosChange(novosDadosRequisitos);
  };

  const handleInputChangeFerramentas = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaFerramentas") {
      setPrimeiraLinhaFerramentas(value);
    } else if (name === "segundaLinhaFerramentas") {
      setSegundaLinhaFerramentas(value);
    } else if (name === "terceiraLinhaFerramentas") {
      setTerceiraLinhaFerramentas(value);
    }

    const novosDadosFerramentas = {
      primeiraLinhaFerramentas:
        name === "primeiraLinhaFerramentas" ? value : primeiraLinhaFerramentas,
      segundaLinhaFerramentas:
        name === "segundaLinhaFerramentas" ? value : segundaLinhaFerramentas,
      terceiraLinhaFerramentas:
        name === "terceiraLinhaFerramentas" ? value : terceiraLinhaFerramentas,
    };

    onFerramentasChange(novosDadosFerramentas);
  };

  const handleInputChangeAproximados = (e) => {
    const { name, value } = e.target;
    if (name === "alinhadosObser2") {
      setAlinhadosObser2(value);
    } else if (name === "proximos") {
      setProximos(value);
    } else if (name === "concorrenteObser2") {
      setConcorrenteOser2(value);
    }

    const novosDadosAproximados = {
      setAlinhadosObser2: name === "alinhadosObser2" ? value : alinhadosObser2,
      setProximos: name === "proximos" ? value : proximos,
      setConcorrenteOser2:
        name === "concorrenteObser2" ? value : concorrenteObser2,
    };

    onAproximadosChange(novosDadosAproximados);
  };

  const handleInputChangePsObser = (e) => {
    const { name, value } = e.target;
    if (name === "primeiroP") {
      setPrimeiroP(value);
    } else if (name === "segundoP") {
      setSegundoP(value);
    } else if (name === "terceiroP") {
      setTerceiroP(value);
    } else if (name === "quartoP") {
      setQuartoP(value);
    }

    const novosDadosPsObser = {
      primeiroP: name === "primeiroP" ? value : primeiroP,
      segundoP: name === "segundoP" ? value : segundoP,
      terceiroP: name === "terceiroP" ? value : terceiroP,
      quartoP: name === "quartoP" ? value : terceiroP,
    };

    onPsObserChange(novosDadosPsObser);
  };

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
        <div className="psdoprojeto"></div>
        <div className="psdoprojeto">
          <h2>Revisão dos 4P's do projeto</h2>
          <div
            onClick={() => {
              window.open("tutorial#tut_ikigai", "_blank");
            }}
            className="duvida_4ps"
          ></div>
          <table>
            <tr>
              <td>
                P1:
                <input
                  type="text"
                  name="primeiroP"
                  value={primeiroP}
                  onChange={handleInputChangePsObser}
                />
              </td>
              <td>
                P2:
                <input
                  type="text"
                  name="segundoP"
                  value={segundoP}
                  onChange={handleInputChangePsObser}
                />
              </td>
            </tr>

            <tr>
              <td>
                P3:
                <input
                  type="text"
                  name="terceiroP"
                  value={terceiroP}
                  onChange={handleInputChangePsObser}
                />
              </td>
              <td>
                P4:
                <input
                  type="text"
                  name="quartoP"
                  value={quartoP}
                  onChange={handleInputChangePsObser}
                />
              </td>
            </tr>
          </table>
        </div>

        <div className="clear"></div>

        <div className="Relacionamento">
          <h2>Relacionamentos</h2>
          <div className="Single1">
            <span>Quais parceiros são mais alinhados ao meu negócio?</span>
            <input
              type="text"
              name="alinhadosObser2"
              value={alinhadosObser2}
              onChange={handleInputChangeAproximados}
            />{" "}
          </div>

          <div className="Single2">
            <span>De quais parceiros devemos nos aproximar?</span>
            <input
              type="text"
              name="proximos"
              value={proximos}
              onChange={handleInputChangeAproximados}
            />{" "}
          </div>

          <div className="Single3">
            <span>Conseguimos transformar algum concorrente em parceiro?</span>
            <input
              type="text"
              name="concorrenteObser2"
              value={concorrenteObser2}
              onChange={handleInputChangeAproximados}
            />
          </div>
        </div>

        <div className="conceito">
          <h2>Conceito:</h2>
          <div
            onClick={() => {
              window.open("tutorial#tut_proposta_valor", "_blank");
            }}
            className="duvida_conceito"
          ></div>
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
                <input
                  type="text"
                  name="primeiraLinhaFerramentas"
                  value={primeiraLinhaFerramentas}
                  onChange={handleInputChangeFerramentas}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaRequisitos"
                  value={primeiraLinhaRequisitos}
                  onChange={handleInputChangeRequisitos}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaOportunidades"
                  value={primeiraLinhaOportunidades}
                  onChange={handleInputChangeOportunidades}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaIndicado"
                  value={primeiraLinhaIndicado}
                  onChange={handleInputChangeIndicado}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaOrientacao"
                  value={primeiraLinhaOrientacao}
                  onChange={handleInputChangeOrientacao}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaResultado"
                  value={primeiraLinhaResultado}
                  onChange={handleInputChangeResultado}
                />
              </td>
            </tr>

            <tr>
              <td>
                <input
                  type="text"
                  name="segundaLinhaFerramentas"
                  value={segundaLinhaFerramentas}
                  onChange={handleInputChangeFerramentas}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaRequisitos"
                  value={segundaLinhaRequisitos}
                  onChange={handleInputChangeRequisitos}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaOportunidades"
                  value={segundaLinhaOportunidades}
                  onChange={handleInputChangeOportunidades}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaindicado"
                  value={segundaLinhaIndicado}
                  onChange={handleInputChangeIndicado}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaOrientacao"
                  value={segundaLinhaOrientacao}
                  onChange={handleInputChangeOrientacao}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaResultado"
                  value={segundaLinhaResultado}
                  onChange={handleInputChangeResultado}
                />
              </td>
            </tr>

            <tr>
              <td className="quarto-canto">
                <input
                  className="quarto-canto"
                  type="text"
                  name="terceiraLinhaFerramentas"
                  value={terceiraLinhaFerramentas}
                  onChange={handleInputChangeFerramentas}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaRequisitos"
                  value={terceiraLinhaRequisitos}
                  onChange={handleInputChangeRequisitos}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaOportunidades"
                  value={terceiraLinhaOportunidades}
                  onChange={handleInputChangeOportunidades}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaindicado"
                  value={terceiraLinhaIndicado}
                  onChange={handleInputChangeIndicado}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaOrientacao"
                  value={terceiraLinhaOrientacao}
                  onChange={handleInputChangeOrientacao}
                />
              </td>
              <td className="terceiro-canto">
                <input
                  className="terceiro-canto"
                  type="text"
                  name="terceiraLinhaResultado"
                  value={terceiraLinhaResultado}
                  onChange={handleInputChangeResultado}
                />
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
