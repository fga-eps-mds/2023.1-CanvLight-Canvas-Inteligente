import "./Intuicao.css";
import checkImg from "../../images/check.png";

import React, { useState } from "react";

function Intuicao({
  onSintesePotencialidadesChange,
  onSinteseResultadosChange,
  onIntuQuatroPChange,
  onIntuTecnicoChange,
  onIntuResilienteChange,
  onIntuEmocionalChange,
  onIntuMercadologicoChange,
  onIntuIntegradorChange,
  onIntuTextosChange,
}) {
  const [primeiraLinhaIntuTextos, setPrimeiraLinhaIntuTextos] = useState("");
  const [segundaLinhaIntuTextos, setSegundaLinhaIntuTextos] = useState("");
  const [terceiraLinhaIntuTextos, setTerceiraLinhaIntuTextos] = useState("");

  const handleInputChangeIntuTextos = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaIntuTextos") {
      setPrimeiraLinhaIntuTextos(value);
    } else if (name === "segundaLinhaIntuTextos") {
      setSegundaLinhaIntuTextos(value);
    } else if (name === "terceiraLinhaIntuTextos") {
      setTerceiraLinhaIntuTextos(value);
    }

    const novosDadosIntuTextos = {
      primeiraLinhaIntuTextos:
        name === "primeiraLinhaIntuTextos" ? value : primeiraLinhaIntuTextos,
      segundaLinhaIntuTextos:
        name === "segundaLinhaIntuTextos" ? value : segundaLinhaIntuTextos,
      terceiraLinhaIntuTextos:
        name === "terceiraLinhaIntuTextos" ? value : terceiraLinhaIntuTextos,
    };

    onIntuTextosChange(novosDadosIntuTextos);
  };

  const [primeiraLinhaIntuIntegrador, setPrimeiraLinhaIntuIntegrador] =
    useState("");
  const [segundaLinhaIntuIntegrador, setSegundaLinhaIntuIntegrador] =
    useState("");

  const handleInputChangeIntuIntegrador = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaIntuIntegrador") {
      setPrimeiraLinhaIntuIntegrador(value);
    } else if (name === "segundaLinhaIntuIntegrador") {
      setSegundaLinhaIntuIntegrador(value);
    }

    const novosDadosIntuIntegrador = {
      primeiraLinhaIntuIntegrador:
        name === "primeiraLinhaIntuIntegrador"
          ? value
          : primeiraLinhaIntuIntegrador,
      segundaLinhaIntuIntegrador:
        name === "segundaLinhaIntuIntegrador"
          ? value
          : segundaLinhaIntuIntegrador,
    };

    onIntuIntegradorChange(novosDadosIntuIntegrador);
  };

  const [primeiraLinhaIntuMercadologico, setPrimeiraLinhaIntuMercadologico] =
    useState("");
  const [segundaLinhaIntuMercadologico, setSegundaLinhaIntuMercadologico] =
    useState("");

  const handleInputChangeIntuMercadologico = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaIntuMercadologico") {
      setPrimeiraLinhaIntuMercadologico(value);
    } else if (name === "segundaLinhaIntuMercadologico") {
      setSegundaLinhaIntuMercadologico(value);
    }

    const novosDadosIntuMercadologico = {
      primeiraLinhaIntuMercadologico:
        name === "primeiraLinhaIntuMercadologico"
          ? value
          : primeiraLinhaIntuMercadologico,
      segundaLinhaIntuMercadologico:
        name === "segundaLinhaIntuMercadologico"
          ? value
          : segundaLinhaIntuMercadologico,
    };

    onIntuMercadologicoChange(novosDadosIntuMercadologico);
  };

  const [primeiraLinhaIntuEmocional, setPrimeiraLinhaIntuEmocional] =
    useState("");
  const [segundaLinhaIntuEmocional, setSegundaLinhaIntuEmocional] =
    useState("");

  const handleInputChangeIntuEmocional = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaIntuEmocional") {
      setPrimeiraLinhaIntuEmocional(value);
    } else if (name === "segundaLinhaIntuEmocional") {
      setSegundaLinhaIntuEmocional(value);
    }

    const novosDadosIntuEmocional = {
      primeiraLinhaIntuEmocional:
        name === "primeiraLinhaIntuEmocional"
          ? value
          : primeiraLinhaIntuEmocional,
      segundaLinhaIntuEmocional:
        name === "segundaLinhaIntuEmocional"
          ? value
          : segundaLinhaIntuEmocional,
    };

    onIntuEmocionalChange(novosDadosIntuEmocional);
  };

  const [primeiraLinhaIntuResiliente, setPrimeiraLinhaIntuResiliente] =
    useState("");
  const [segundaLinhaIntuResiliente, setSegundaLinhaIntuResiliente] =
    useState("");

  const handleInputChangeIntuResiliente = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaIntuResiliente") {
      setPrimeiraLinhaIntuResiliente(value);
    } else if (name === "segundaLinhaIntuResiliente") {
      setSegundaLinhaIntuResiliente(value);
    }

    const novosDadosIntuResiliente = {
      primeiraLinhaIntuResiliente:
        name === "primeiraLinhaIntuResiliente"
          ? value
          : primeiraLinhaIntuResiliente,
      segundaLinhaIntuResiliente:
        name === "segundaLinhaIntuResiliente"
          ? value
          : segundaLinhaIntuResiliente,
    };

    onIntuResilienteChange(novosDadosIntuResiliente);
  };

  const [primeiraLinhaIntuTecnico, setPrimeiraLinhaIntuTecnico] = useState("");
  const [segundaLinhaIntuTecnico, setSegundaLinhaIntuTecnico] = useState("");

  const handleInputChangeIntuTecnico = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaIntuTecnico") {
      setPrimeiraLinhaIntuTecnico(value);
    } else if (name === "segundaLinhaIntuTecnico") {
      setSegundaLinhaIntuTecnico(value);
    }

    const novosDadosIntuTecnico = {
      primeiraLinhaIntuTecnico:
        name === "primeiraLinhaIntuTecnico" ? value : primeiraLinhaIntuTecnico,
      segundaLinhaIntuTecnico:
        name === "segundaLinhaIntuTecnico" ? value : segundaLinhaIntuTecnico,
    };

    onIntuTecnicoChange(novosDadosIntuTecnico);
  };

  const [
    primeiraLinhaSintesePotencialidades,
    setPrimeiraLinhaSintesePotencialidades,
  ] = useState("");
  const [
    segundaLinhaSintesePotencialidades,
    setSegundaLinhaSintesePotencialidades,
  ] = useState("");
  const [
    terceiraLinhaSintesePotencialidades,
    setTerceiraLinhaSintesePotencialidades,
  ] = useState("");

  const handleInputChangeSintesePotencialidades = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaSintesePotencialidades") {
      setPrimeiraLinhaSintesePotencialidades(value);
    } else if (name === "segundaLinhaSintesePotencialidades") {
      setSegundaLinhaSintesePotencialidades(value);
    } else if (name === "terceiraLinhaSintesePotencialidades") {
      setTerceiraLinhaSintesePotencialidades(value);
    }

    const novosDadosSintesePotencialidades = {
      primeiraLinhaSintesePotencialidades:
        name === "primeiraLinhaSintesePotencialidades"
          ? value
          : primeiraLinhaSintesePotencialidades,
      segundaLinhaSintesePotencialidades:
        name === "segundaLinhaSintesePotencialidades"
          ? value
          : segundaLinhaSintesePotencialidades,
      terceiraLinhaSintesePotencialidades:
        name === "terceiraLinhaSintesePotencialidades"
          ? value
          : terceiraLinhaSintesePotencialidades,
    };

    onSintesePotencialidadesChange(novosDadosSintesePotencialidades);
  };

  const [primeiraLinhaSinteseResultados, setPrimeiraLinhaSinteseResultados] =
    useState("");
  const [segundaLinhaSinteseResultados, setSegundaLinhaSinteseResultados] =
    useState("");
  const [terceiraLinhaSinteseResultados, setTerceiraLinhaSinteseResultados] =
    useState("");

  const handleInputChangeSinteseResultados = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaSinteseResultados") {
      setPrimeiraLinhaSinteseResultados(value);
    } else if (name === "segundaLinhaSinteseResultados") {
      setSegundaLinhaSinteseResultados(value);
    } else if (name === "terceiraLinhaSinteseResultados") {
      setTerceiraLinhaSinteseResultados(value);
    }

    const novosDadosSinteseResultados = {
      primeiraLinhaSinteseResultados:
        name === "primeiraLinhaSinteseResultados"
          ? value
          : primeiraLinhaSinteseResultados,
      segundaLinhaSinteseResultados:
        name === "segundaLinhaSinteseResultados"
          ? value
          : segundaLinhaSinteseResultados,
      terceiraLinhaSinteseResultados:
        name === "terceiraLinhaSinteseResultados"
          ? value
          : terceiraLinhaSinteseResultados,
    };

    onSinteseResultadosChange(novosDadosSinteseResultados);
  };

  const [primeiraLinhaIntuQuatroP, setPrimeiraLinhaIntuQuatroP] = useState("");
  const [segundaLinhaIntuQuatroP, setSegundaLinhaIntuQuatroP] = useState("");
  const [terceiraLinhaIntuQuatroP, setTerceiraLinhaIntuQuatroP] = useState("");
  const [quartaLinhaIntuQuatroP, setQuartaLinhaIntuQuatroP] = useState("");

  const handleInputChangeIntuQuatroP = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaIntuQuatroP") {
      setPrimeiraLinhaIntuQuatroP(value);
    } else if (name === "segundaLinhaIntuQuatroP") {
      setSegundaLinhaIntuQuatroP(value);
    } else if (name === "terceiraLinhaIntuQuatroP") {
      setTerceiraLinhaIntuQuatroP(value);
    } else if (name === "quartaLinhaIntuQuatroP") {
      setQuartaLinhaIntuQuatroP(value);
    }

    const novosDadosIntuQuatroP = {
      primeiraLinhaIntuQuatroP:
        name === "primeiraLinhaIntuQuatroP" ? value : primeiraLinhaIntuQuatroP,
      segundaLinhaIntuQuatroP:
        name === "segundaLinhaIntuQuatroP" ? value : segundaLinhaIntuQuatroP,
      terceiraLinhaIntuQuatroP:
        name === "terceiraLinhaIntuQuatroP" ? value : terceiraLinhaIntuQuatroP,
      quartaLinhaIntuQuatroP:
        name === "quartaLinhaIntuQuatroP" ? value : quartaLinhaIntuQuatroP,
    };
    onIntuQuatroPChange(novosDadosIntuQuatroP);
  };

  //===============================================================================================

  function fecharFormIntuicao(e) {
    e.preventDefault();
    let modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.parentNode.removeChild(modalOverlay);
    }

    let modal = document.querySelector(".form");

    modal.style.display = "none";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "block";
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
                <h2 className="h2_project">Projeto:</h2>
                <input
                  className="inputProjeto"
                  name="primeiraLinhaIntuTextos"
                  value={primeiraLinhaIntuTextos}
                  onChange={handleInputChangeIntuTextos}
                  maxlength="53"
                />
              </div>

              <h2 className="h2_equipe">Equipe:</h2>
              <textarea
                className="inputEquipe"
                name="segundaLinhaIntuTextos"
                value={segundaLinhaIntuTextos}
                onChange={handleInputChangeIntuTextos}
                maxlength="66"
              />
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
                  <input
                    type="text"
                    name="primeiraLinhaIntuTecnico"
                    value={primeiraLinhaIntuTecnico}
                    onChange={handleInputChangeIntuTecnico}
                    maxlength="26"
                  />
                </td>
                <td className="espacoA1">
                  <input
                    type="text"
                    name="segundaLinhaIntuTecnico"
                    value={segundaLinhaIntuTecnico}
                    onChange={handleInputChangeIntuTecnico}
                    maxlength="31"
                  />
                </td>
              </tr>

              <tr>
                <td className="resiliencia">RESILIENTE</td>
                <td>
                  <input
                    type="text"
                    name="primeiraLinhaIntuResiliente"
                    value={primeiraLinhaIntuResiliente}
                    onChange={handleInputChangeIntuResiliente}
                    maxlength="26"
                  />
                </td>
                <td className="espacoA2">
                  <input
                    type="text"
                    name="segundaLinhaIntuResiliente"
                    value={segundaLinhaIntuResiliente}
                    onChange={handleInputChangeIntuResiliente}
                    maxlength="31"
                  />
                </td>
              </tr>

              <tr>
                <td className="emocional">EMOCIONAL</td>
                <td>
                  <input
                    type="text"
                    name="primeiraLinhaIntuEmocional"
                    value={primeiraLinhaIntuEmocional}
                    onChange={handleInputChangeIntuEmocional}
                    maxlength="26"
                  />
                </td>
                <td className="espacoA3">
                  <input
                    type="text"
                    name="segundaLinhaIntuEmocional"
                    value={segundaLinhaIntuEmocional}
                    onChange={handleInputChangeIntuEmocional}
                    maxlength="31"
                  />
                </td>
              </tr>

              <tr>
                <td className="mercadologico">MERCADOLÓGICO</td>
                <td>
                  <input
                    type="text"
                    name="primeiraLinhaIntuMercadologico"
                    value={primeiraLinhaIntuMercadologico}
                    onChange={handleInputChangeIntuMercadologico}
                    maxlength="26"
                  />
                </td>
                <td className="espacoA4">
                  <input
                    type="text"
                    name="segundaLinhaIntuMercadologico"
                    value={segundaLinhaIntuMercadologico}
                    onChange={handleInputChangeIntuMercadologico}
                    maxlength="31"
                  />
                </td>
              </tr>

              <tr>
                <td className="integrador">INTEGRADOR</td>
                <td>
                  <input
                    type="text"
                    name="primeiraLinhaIntuIntegrador"
                    value={primeiraLinhaIntuIntegrador}
                    onChange={handleInputChangeIntuIntegrador}
                    maxlength="26"
                  />
                </td>

                <td className="quarto-canto">
                  <input
                    className="quarto-canto"
                    type="text"
                    name="segundaLinhaIntuIntegrador"
                    value={segundaLinhaIntuIntegrador}
                    onChange={handleInputChangeIntuIntegrador}
                    maxlength="31"
                  />
                </td>
              </tr>
            </table>
          </div>

          <div
            onClick={() => {
              window.open("tutorial#breakpoint_introducao", "_blank");
            }}
            className="duvidaDNA_int"
          ></div>

          <div className="parte2">
            <h2 className="h2_Ikigai">Ikigai:</h2>
            <br />
            <textarea
              type="text"
              name="terceiraLinhaIntuTextos"
              value={terceiraLinhaIntuTextos}
              onChange={handleInputChangeIntuTextos}
              maxlength="79"
            />
          </div>

          <div
            onClick={() => {
              window.open("tutorial#tut_dna", "_blank");
            }}
            className="duvidaIkigai_int"
          ></div>

          <div className="clear"></div>
        </div>

        <div className="direita">
          <div className="tabela_4ps">
            <h2>4P's do projeto:</h2>
            <table className="four_ps">
              <tr>
                <td>
                  P1:
                  <textarea
                    type="text"
                    name="primeiraLinhaIntuQuatroP"
                    value={primeiraLinhaIntuQuatroP}
                    onChange={handleInputChangeIntuQuatroP}
                    maxlength="13"
                  />
                </td>
                <td>
                  P2:
                  <textarea
                    type="text"
                    name="segundaLinhaIntuQuatroP"
                    value={segundaLinhaIntuQuatroP}
                    onChange={handleInputChangeIntuQuatroP}
                    maxlength="13"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  P3:
                  <textarea
                    type="text"
                    name="terceiraLinhaIntuQuatroP"
                    value={terceiraLinhaIntuQuatroP}
                    onChange={handleInputChangeIntuQuatroP}
                    maxlength="13"
                  />
                </td>
                <td>
                  P4:
                  <textarea
                    type="text"
                    name="quartaLinhaIntuQuatroP"
                    value={quartaLinhaIntuQuatroP}
                    onChange={handleInputChangeIntuQuatroP}
                    maxlength="13"
                  />
                </td>
              </tr>
            </table>
          </div>

          <div
            onClick={() => {
              window.open("tutorial#tut_ikigai", "_blank");
            }}
            className="duvida_fourps_int"
          ></div>

          <div className="tabela3">
            <h2>Síntese:</h2>
            <table>
              <tr>
                <th className="primeiro-canto">POTENCIALIDADES</th>
                <th className="segundo-canto">RESULTADOS ESPERADOS</th>
              </tr>

              <tr>
                <td>
                  <input
                    type="text"
                    name="primeiraLinhaSintesePotencialidades"
                    value={primeiraLinhaSintesePotencialidades}
                    onChange={handleInputChangeSintesePotencialidades}
                    maxlength="25"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="primeiraLinhaSinteseResultados"
                    value={primeiraLinhaSinteseResultados}
                    onChange={handleInputChangeSinteseResultados}
                    maxlength="25"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="text"
                    name="segundaLinhaSintesePotencialidades"
                    value={segundaLinhaSintesePotencialidades}
                    onChange={handleInputChangeSintesePotencialidades}
                    maxlength="25"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="segundaLinhaSinteseResultados"
                    value={segundaLinhaSinteseResultados}
                    onChange={handleInputChangeSinteseResultados}
                    maxlength="25"
                  />
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
                  <input
                    className="quarto-canto"
                    type="text"
                    name="terceiraLinhaSintesePotencialidades"
                    value={terceiraLinhaSintesePotencialidades}
                    onChange={handleInputChangeSintesePotencialidades}
                    maxlength="25"
                  />
                </td>
                <td className="terceiro-canto">
                  <input
                    className="teceiro-canto"
                    type="text"
                    name="terceiraLinhaSinteseResultados"
                    value={terceiraLinhaSinteseResultados}
                    onChange={handleInputChangeSinteseResultados}
                    maxlength="25"
                  />
                </td>
              </tr>
            </table>
          </div>

          <div
            onClick={() => {
              window.open("tutorial#tut_fourps", "_blank");
            }}
            className="duvida_sintese_int"
          ></div>

          <div onClick={(e) => fecharFormIntuicao(e)} className="feito_int">
            <img src={checkImg} className="feito_int" alt="confirma_int" />
          </div>

          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Intuicao;
