import "./Observacao3.css";
import React, { useState } from "react";

function Observacao3({
  onFerramentasObser3Change,
  onIndicadoParaChange,
  onOrientacaoUsoChange,
  onResultadoEsparadoChange,
  onFerramentasObser3PChange,
  onIndicadoParaPChange,
  onOrientacaoUsoPChange,
  onResultadoEsparadoPChange,
}) {
  const [primeiraLinhaFerramentaObser3, setPrimeiraLinhaFerramentaObser3] =
    useState();
  const [segundaLinhaFerramentaObser3, setSegundaLinhaFerramentaObser3] =
    useState();
  const [primeiraLinhaIndicadoPara, setPrimeiraLinhaIndicadoPara] = useState();
  const [segundaLinhaIndicadoPara, setSegundaLinhaIndicadoPara] = useState();
  const [primeiraLinhaOrientacaoUso, setPrimeiraLinhaOrientacaoUso] =
    useState();
  const [segundaLinhaOrientacaoUso, setSegundaLinhaOrientacaoUso] = useState();
  const [primeiraLinhaResultadoEsparado, setPrimeiraLinhaResultadoEsparado] =
    useState();
  const [segundaLinhaResultadoEsparado, setSegundaLinhaResultadoEsparado] =
    useState();
  const [primeiraLinhaFerramentaObser3P, setPrimeiraLinhaFerramentaObser3P] =
    useState();
  const [segundaLinhaFerramentaObser3P, setSegundaLinhaFerramentaObser3P] =
    useState();
  const [primeiraLinhaIndicadoParaP, setPrimeiraLinhaIndicadoParaP] =
    useState();
  const [segundaLinhaIndicadoParaP, setSegundaLinhaIndicadoParaP] = useState();
  const [primeiraLinhaOrientacaoUsoP, setPrimeiraLinhaOrientacaoUsoP] =
    useState();
  const [segundaLinhaOrientacaoUsoP, setSegundaLinhaOrientacaoUsoP] =
    useState();
  const [primeiraLinhaResultadoEsparadoP, setPrimeiraLinhaResultadoEsparadoP] =
    useState();
  const [segundaLinhaResultadoEsparadoP, setSegundaLinhaResultadoEsparadoP] =
    useState();

  const handleInputChangeResultadoEsparadoP = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaResultadoEsparadoP") {
      setPrimeiraLinhaResultadoEsparadoP(value);
    } else if (name === "segundaLinhaResultadoEsparadoP") {
      setSegundaLinhaResultadoEsparadoP(value);
    }

    const novosDadosResultadoEsparadoP = {
      primeiraLinhaResultadoEsparadoP:
        name === "primeiraLinhaResultadoEsparadoP"
          ? value
          : primeiraLinhaResultadoEsparadoP,
      segundaLinhaResultadoEsparadoP:
        name === "segundaLinhaResultadoEsparadoP"
          ? value
          : segundaLinhaResultadoEsparadoP,
    };

    onResultadoEsparadoPChange(novosDadosResultadoEsparadoP);
  };

  const handleInputChangeOrientacaoUsoP = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaOrientacaoUsoP") {
      setPrimeiraLinhaOrientacaoUsoP(value);
    } else if (name === "segundaLinhaOrientacaoUsoP") {
      setSegundaLinhaOrientacaoUsoP(value);
    }

    const novosDadosOrientacaoUsoP = {
      primeiraLinhaOrientacaoUsoP:
        name === "primeiraLinhaOrientacaoUsoP"
          ? value
          : primeiraLinhaOrientacaoUsoP,
      segundaLinhaOrientacaoUsoP:
        name === "segundaLinhaOrientacaoUsoP"
          ? value
          : segundaLinhaOrientacaoUsoP,
    };

    onOrientacaoUsoPChange(novosDadosOrientacaoUsoP);
  };

  const handleInputChangeIndicadoParaP = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaIndicadoParaP") {
      setPrimeiraLinhaIndicadoParaP(value);
    } else if (name === "segundaLinhaIndicadoParaP") {
      setSegundaLinhaIndicadoParaP(value);
    }

    const novosDadosIndicadoParaP = {
      primeiraLinhaIndicadoParaP:
        name === "primeiraLinhaIndicadoParaP"
          ? value
          : primeiraLinhaIndicadoParaP,
      segundaLinhaIndicadoParaP:
        name === "segundaLinhaIndicadoParaP"
          ? value
          : segundaLinhaIndicadoParaP,
    };

    onIndicadoParaPChange(novosDadosIndicadoParaP);
  };

  const handleInputChangeFerramentaObser3P = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaFerramentaObser3P") {
      setPrimeiraLinhaFerramentaObser3P(value);
    } else if (name === "segundaLinhaFerramentaObser3P") {
      setSegundaLinhaFerramentaObser3P(value);
    }

    const novosDadosFerramentaObser3P = {
      primeiraLinhaFerramentaObser3P:
        name === "primeiraLinhaFerramentaObser3P"
          ? value
          : primeiraLinhaFerramentaObser3P,
      segundaLinhaFerramentaObser3P:
        name === "segundaLinhaFerramentaObser3P"
          ? value
          : segundaLinhaFerramentaObser3P,
    };

    onFerramentasObser3PChange(novosDadosFerramentaObser3P);
  };

  const handleInputChangeResultadoEsparado = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaResultadoEsparado") {
      setPrimeiraLinhaResultadoEsparado(value);
    } else if (name === "segundaLinhaResultadoEsparado") {
      setSegundaLinhaResultadoEsparado(value);
    }

    const novosDadosResultadoEsparado = {
      primeiraLinhaResultadoEsparado:
        name === "primeiraLinhaResultadoEsparado"
          ? value
          : primeiraLinhaResultadoEsparado,
      segundaLinhaResultadoEsparado:
        name === "segundaLinhaResultadoEsparado"
          ? value
          : segundaLinhaResultadoEsparado,
    };

    onResultadoEsparadoChange(novosDadosResultadoEsparado);
  };

  const handleInputChangeOrientacaoUso = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaOrientacaoUso") {
      setPrimeiraLinhaOrientacaoUso(value);
    } else if (name === "segundaLinhaOrientacaoUso") {
      setSegundaLinhaOrientacaoUso(value);
    }

    const novosDadosOrientacaoUso = {
      primeiraLinhaOrientacaoUso:
        name === "primeiraLinhaOrientacaoUso"
          ? value
          : primeiraLinhaOrientacaoUso,
      segundaLinhaOrientacaoUso:
        name === "segundaLinhaOrientacaoUso"
          ? value
          : segundaLinhaOrientacaoUso,
    };

    onOrientacaoUsoChange(novosDadosOrientacaoUso);
  };

  const handleInputChangeIndicadoPara = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaIndicadoPara") {
      setPrimeiraLinhaIndicadoPara(value);
    } else if (name === "segundaLinhaIndicadoPara") {
      setSegundaLinhaIndicadoPara(value);
    }

    const novosDadosIndicadoPara = {
      primeiraLinhaIndicadoPara:
        name === "primeiraLinhaIndicadoPara"
          ? value
          : primeiraLinhaIndicadoPara,
      segundaLinhaIndicadoPara:
        name === "segundaLinhaIndicadoPara" ? value : segundaLinhaIndicadoPara,
    };

    onIndicadoParaChange(novosDadosIndicadoPara);
  };

  const handleInputChangeFerramentaObser3 = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaFerramentaObser3") {
      setPrimeiraLinhaFerramentaObser3(value);
    } else if (name === "segundaLinhaFerramentaObser3") {
      setSegundaLinhaFerramentaObser3(value);
    }

    const novosDadosFerramentaObser3 = {
      primeiraLinhaFerramentaObser3:
        name === "primeiraLinhaFerramentaObser3"
          ? value
          : primeiraLinhaFerramentaObser3,
      segundaLinhaFerramentaObser3:
        name === "segundaLinhaFerramentaObser3"
          ? value
          : segundaLinhaFerramentaObser3,
    };

    onFerramentasObser3Change(novosDadosFerramentaObser3);
  };

  function irParaObservacao2(e) {
    e.preventDefault();

    let modal = document.querySelector(".Observacao2");
    let modal2 = document.querySelector(".Observacao3");

    modal.style.display = "block";
    modal2.style.display = "none";
    window.scrollTo(0, 0);
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
    window.scrollTo(0, 0);
  }
  function fecharFormIntuicao(e) {
    e.preventDefault();
    let modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.parentNode.removeChild(modalOverlay);
    }

    let modal = document.querySelector(".Observacao3");

    modal.style.display = "none";
    let medel = document.querySelector(".tela_3_form_interacao");
    medel.style.display = "none";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "block";
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      fecharFormIntuicao(e);
    }
  });

  return (
    <div className="Observacao3">
      <div className="centerObs3">
        <button
          className="close_obs"
          onClick={(e) => fecharFormIntuicao(e)}
        ></button>
        <div className="dot2_obs"></div>
        <div className="dot3_obs"></div>
        <div className="psdoprojeto"></div>
        <div className="psdoprojeto"></div>
        <div className="Modelo">
          <p className="Modelo_obs3">Modelo:</p>
          <div
            onClick={() => {
              window.open("tutorial#tut_conceito", "_blank");
            }}
            className="duvida_modelo"
          ></div>
          <table>
            <tr>
              <th className="primeiro-canto">Ferramentas/Procedimentos</th>
              <th>Indicado para</th>
              <th>Orientações de uso</th>
              <th className="segundo-canto">Resultado esperado</th>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaFerramentaObser3"
                  value={primeiraLinhaFerramentaObser3}
                  onChange={handleInputChangeFerramentaObser3}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaIndicadoPara"
                  value={primeiraLinhaIndicadoPara}
                  onChange={handleInputChangeIndicadoPara}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaOrientacaoUso"
                  value={primeiraLinhaOrientacaoUso}
                  onChange={handleInputChangeOrientacaoUso}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaResultadoEsparado"
                  value={primeiraLinhaResultadoEsparado}
                  onChange={handleInputChangeResultadoEsparado}
                />
              </td>
            </tr>

            <tr>
              <td className="quarto-canto">
                <input
                  className="quarto-canto"
                  type="text"
                  name="segundaLinhaFerramentaObser3"
                  value={segundaLinhaFerramentaObser3}
                  onChange={handleInputChangeFerramentaObser3}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaIndicadoPara"
                  value={segundaLinhaIndicadoPara}
                  onChange={handleInputChangeIndicadoPara}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaOrientacaoUso"
                  value={segundaLinhaOrientacaoUso}
                  onChange={handleInputChangeOrientacaoUso}
                />
              </td>
              <td className="terceiro-canto">
                <input
                  className="terceiro-canto"
                  type="text"
                  name="segundaLinhaResultadoEsparado"
                  value={segundaLinhaResultadoEsparado}
                  onChange={handleInputChangeResultadoEsparado}
                />
              </td>
            </tr>
          </table>
        </div>

        <div className="clear"></div>

        <div className="Prototipo">
          <p className="Prototipo_obs3">Protótipo:</p>
          <div
            onClick={() => {
              window.open("tutorial#tut_modelo", "_blank");
            }}
            className="duvida_prototipo"
          ></div>
          <table>
            <tr>
              <th className="primeiro-canto">Ferramentas/Procedimentos</th>
              <th>Indicado para</th>
              <th>Orientações de uso</th>
              <th className="segundo-canto">Resultado esperado</th>
            </tr>

            <tr>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaFerramentaObser3P"
                  value={primeiraLinhaFerramentaObser3P}
                  onChange={handleInputChangeFerramentaObser3P}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaIndicadoParaP"
                  value={primeiraLinhaIndicadoParaP}
                  onChange={handleInputChangeIndicadoParaP}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaOrientacaoUsoP"
                  value={primeiraLinhaOrientacaoUsoP}
                  onChange={handleInputChangeOrientacaoUsoP}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaResultadoEsparadoP"
                  value={primeiraLinhaResultadoEsparadoP}
                  onChange={handleInputChangeResultadoEsparadoP}
                />
              </td>
            </tr>

            <tr>
              <td className="quarto-canto">
                <input
                  className="quarto-canto"
                  type="text"
                  name="segundaLinhaFerramentaObser3P"
                  value={segundaLinhaFerramentaObser3P}
                  onChange={handleInputChangeFerramentaObser3P}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaIndicadoParaP"
                  value={segundaLinhaIndicadoParaP}
                  onChange={handleInputChangeIndicadoParaP}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaOrientacaoUsoP"
                  value={segundaLinhaOrientacaoUsoP}
                  onChange={handleInputChangeOrientacaoUsoP}
                />
              </td>
              <td className="terceiro-canto">
                <input
                  className="terceiro-canto"
                  type="text"
                  name="segundaLinhaResultadoEsparadoP"
                  value={segundaLinhaResultadoEsparadoP}
                  onChange={handleInputChangeResultadoEsparadoP}
                />
              </td>
            </tr>
          </table>
        </div>

        <div
          onClick={(e) => irParaObservacao2(e)}
          className="seta-esquerda_obs3"
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
