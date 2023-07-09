import "./Observacao1.css";
import React, { useState } from "react";

function Observacao1({
  onEmpresaChange,
  onDiferencaChange,
  onPorteChange,
  onConcorrenciaChange,
  onLocalizacaoChange,
  onImitadoChange,
  onMelhorarChange,
  onParceiroChange,
  onInsumosChange,
  onBeneficiosChange,
  onFornecerChange,
  onRiscoChange,
  onVerticalizarChange,
  onNotaChange,
  onPerfil1Change,
  onPerfil2Change,
}) {
  function irParaObservacao2(e) {
    e.preventDefault();

    let modal = document.querySelector(".benchmarking");
    let modal2 = document.querySelector(".Observacao2");

    modal.style.display = "none";
    modal2.style.display = "block";
  }

  function fecharFormIntuicao(e) {
    e.preventDefault();
    let modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.parentNode.removeChild(modalOverlay);
    }

    let modal = document.querySelector(".benchmarking");

    modal.style.display = "none";
    let medel = document.querySelector(".tela_3_form_interacao");
    medel.style.display = "none";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "block";
  }

  const [primeiraLinhaEmpresa, setPrimeiraLinhaEmpresa] = useState();
  const [segundaLinhaEmpresa, setSegundaLinhaEmpresa] = useState();
  const [terceiraLinhaEmpresa, setTerceiraLinhaEmpresa] = useState();
  const [primeiraLinhaDiferenca, setPrimeiraLinhaDiferenca] = useState();
  const [segundaLinhaDiferenca, setSegundaLinhaDiferenca] = useState();
  const [terceiraLinhaDiferenca, setTerceiraLinhaDiferenca] = useState();
  const [primeiraLinhaPorte, setPrimeiraLinhaPorte] = useState();
  const [segundaLinhaPorte, setSegundaLinhaPorte] = useState();
  const [terceiraLinhaPorte, setTerceiraLinhaPorte] = useState();
  const [primeiraLinhaConcorrencia, setPrimeiraLinhaConcorrencia] = useState();
  const [segundaLinhaConcorrencia, setSegundaLinhaConcorrencia] = useState();
  const [terceiraLinhaConcorrencia, setTerceiraLinhaConcorrencia] = useState();
  const [primeiraLinhaLocalizacao, setPrimeiraLinhaLocalizacao] = useState();
  const [segundaLinhaLocalizacao, setSegundaLinhaLocalizacao] = useState();
  const [terceiraLinhaLocalizacao, setTerceiraLinhaLocalizacao] = useState();
  const [primeiraLinhaImitado, setPrimeiraLinhaImitado] = useState();
  const [segundaLinhaImitado, setSegundaLinhaImitado] = useState();
  const [terceiraLinhaImitado, setTerceiraLinhaImitado] = useState();
  const [primeiraLinhaMelhorar, setPrimeiraLinhaMelhorar] = useState();
  const [segundaLinhaMelhorar, setSegundaLinhaMelhorar] = useState();
  const [terceiraLinhaMelhorar, setTerceiraLinhaMelhorar] = useState();
  const [primeiraLinhaParceiro, setPrimeiraLinhaParceiro] = useState();
  const [segundaLinhaParceiro, setSegundaLinhaParceiro] = useState();
  const [terceiraLinhaParceiro, setTerceiraLinhaParceiro] = useState();
  const [primeiraLinhaInsumos, setPrimeiraLinhaInsumos] = useState();
  const [segundaLinhaInsumos, setSegundaLinhaInsumos] = useState();
  const [terceiraLinhaInsumos, setTerceiraLinhaInsumos] = useState();
  const [primeiraLinhaBeneficios, setPrimeiraLinhaBeneficios] = useState();
  const [segundaLinhaBeneficios, setSegundaLinhaBeneficios] = useState();
  const [terceiraLinhaBeneficios, setTerceiraLinhaBeneficios] = useState();
  const [primeiraLinhaFornecer, setPrimeiraLinhaFornecer] = useState();
  const [segundaLinhaFornecer, setSegundaLinhaFornecer] = useState();
  const [terceiraLinhaFornecer, setTerceiraLinhaFornecer] = useState();
  const [primeiraLinhaRisco, setPrimeiraLinhaRisco] = useState();
  const [segundaLinhaRisco, setSegundaLinhaRisco] = useState();
  const [terceiraLinhaRisco, setTerceiraLinhaRisco] = useState();
  const [primeiraLinhaVerticalizar, setPrimeiraLinhaVerticalizar] = useState();
  const [segundaLinhaVerticalizar, setSegundaLinhaVerticalizar] = useState();
  const [terceiraLinhaVerticalizar, setTerceiraLinhaVerticalizar] = useState();
  const [primeiraLinhaNota, setPrimeiraLinhaNota] = useState();
  const [segundaLinhaNota, setSegundaLinhaNota] = useState();
  const [terceiraLinhaNota, setTerceiraLinhaNota] = useState();
  const [primeiraLinhaPerfil1, setPrimeiraLinhaPerfil1] = useState();
  const [segundaLinhaPerfil1, setSegundaLinhaPerfil1] = useState();
  const [terceiraLinhaPerfil1, setTerceiraLinhaPerfil1] = useState();
  const [primeiraLinhaPerfil2, setPrimeiraLinhaPerfil2] = useState();
  const [segundaLinhaPerfil2, setSegundaLinhaPerfil2] = useState();
  const [terceiraLinhaPerfil2, setTerceiraLinhaPerfil2] = useState();

  const handleInputChangePerfil2 = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaPerfil2") {
      setPrimeiraLinhaPerfil2(value);
    } else if (name === "segundaLinhaPerfil2") {
      setSegundaLinhaPerfil2(value);
    } else if (name === "terceiraLinhaPerfil2") {
      setTerceiraLinhaPerfil2(value);
    }

    const novosDadosPerfil2 = {
      primeiraLinhaPerfil2:
        name === "primeiraLinhaPerfil2" ? value : primeiraLinhaPerfil2,
      segundaLinhaPerfil2:
        name === "segundaLinhaPerfil2" ? value : segundaLinhaPerfil2,
      terceiraLinhaPerfil2:
        name === "terceiraLinhaPerfil2" ? value : terceiraLinhaPerfil2,
    };

    onPerfil2Change(novosDadosPerfil2);
  };

  const handleInputChangePerfil1 = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaPerfil1") {
      setPrimeiraLinhaPerfil1(value);
    } else if (name === "segundaLinhaPerfil1") {
      setSegundaLinhaPerfil1(value);
    } else if (name === "terceiraLinhaPerfil1") {
      setTerceiraLinhaPerfil1(value);
    }

    const novosDadosPerfil1 = {
      primeiraLinhaPerfil1:
        name === "primeiraLinhaPerfil1" ? value : primeiraLinhaPerfil1,
      segundaLinhaPerfil1:
        name === "segundaLinhaPerfil1" ? value : segundaLinhaPerfil1,
      terceiraLinhaPerfil1:
        name === "terceiraLinhaPerfil1" ? value : terceiraLinhaPerfil1,
    };

    onPerfil1Change(novosDadosPerfil1);
  };

  const handleInputChangeNota = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaNota") {
      setPrimeiraLinhaNota(value);
    } else if (name === "segundaLinhaNota") {
      setSegundaLinhaNota(value);
    } else if (name === "terceiraLinhaNota") {
      setTerceiraLinhaNota(value);
    }

    const novosDadosNota = {
      primeiraLinhaNota:
        name === "primeiraLinhaNota" ? value : primeiraLinhaNota,
      segundaLinhaNota: name === "segundaLinhaNota" ? value : segundaLinhaNota,
      terceiraLinhaNota:
        name === "terceiraLinhaNota" ? value : terceiraLinhaNota,
    };

    onNotaChange(novosDadosNota);
  };

  const handleInputChangeVerticalizar = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaVerticalizar") {
      setPrimeiraLinhaVerticalizar(value);
    } else if (name === "segundaLinhaVerticalizar") {
      setSegundaLinhaVerticalizar(value);
    } else if (name === "terceiraLinhaVerticalizar") {
      setTerceiraLinhaVerticalizar(value);
    }

    const novosDadosVerticalizar = {
      primeiraLinhaVerticalizar:
        name === "primeiraLinhaVerticalizar"
          ? value
          : primeiraLinhaVerticalizar,
      segundaLinhaVerticalizar:
        name === "segundaLinhaVerticalizar" ? value : segundaLinhaVerticalizar,
      terceiraLinhaVerticalizar:
        name === "terceiraLinhaVerticalizar"
          ? value
          : terceiraLinhaVerticalizar,
    };

    onVerticalizarChange(novosDadosVerticalizar);
  };

  const handleInputChangeRisco = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaRisco") {
      setPrimeiraLinhaRisco(value);
    } else if (name === "segundaLinhaRisco") {
      setSegundaLinhaRisco(value);
    } else if (name === "terceiraLinhaRisco") {
      setTerceiraLinhaRisco(value);
    }

    const novosDadosRisco = {
      primeiraLinhaRisco:
        name === "primeiraLinhaRisco" ? value : primeiraLinhaRisco,
      segundaLinhaRisco:
        name === "segundaLinhaRisco" ? value : segundaLinhaRisco,
      terceiraLinhaRisco:
        name === "terceiraLinhaRisco" ? value : terceiraLinhaRisco,
    };

    onRiscoChange(novosDadosRisco);
  };

  const handleInputChangeFornecer = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaFornecer") {
      setPrimeiraLinhaFornecer(value);
    } else if (name === "segundaLinhaFornecer") {
      setSegundaLinhaFornecer(value);
    } else if (name === "terceiraLinhaFornecer") {
      setTerceiraLinhaFornecer(value);
    }

    const novosDadosFornecer = {
      primeiraLinhaFornecer:
        name === "primeiraLinhaFornecer" ? value : primeiraLinhaFornecer,
      segundaLinhaFornecer:
        name === "segundaLinhaFornecer" ? value : segundaLinhaFornecer,
      terceiraLinhaFornecer:
        name === "terceiraLinhaFornecer" ? value : terceiraLinhaFornecer,
    };

    onFornecerChange(novosDadosFornecer);
  };

  const handleInputChangeBeneficios = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaBeneficios") {
      setPrimeiraLinhaBeneficios(value);
    } else if (name === "segundaLinhaBeneficios") {
      setSegundaLinhaBeneficios(value);
    } else if (name === "terceiraLinhaBeneficios") {
      setTerceiraLinhaBeneficios(value);
    }

    const novosDadosBeneficios = {
      primeiraLinhaBeneficios:
        name === "primeiraLinhaBeneficios" ? value : primeiraLinhaBeneficios,
      segundaLinhaBeneficios:
        name === "segundaLinhaBeneficios" ? value : segundaLinhaBeneficios,
      terceiraLinhaBeneficios:
        name === "terceiraLinhaBeneficios" ? value : terceiraLinhaBeneficios,
    };

    onBeneficiosChange(novosDadosBeneficios);
  };

  const handleInputChangeInsumos = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaInsumos") {
      setPrimeiraLinhaInsumos(value);
    } else if (name === "segundaLinhaInsumos") {
      setSegundaLinhaInsumos(value);
    } else if (name === "terceiraLinhaInsumos") {
      setTerceiraLinhaInsumos(value);
    }

    const novosDadosInsumos = {
      primeiraLinhaInsumos:
        name === "primeiraLinhaInsumos" ? value : primeiraLinhaInsumos,
      segundaLinhaInsumos:
        name === "segundaLinhaInsumos" ? value : segundaLinhaInsumos,
      terceiraLinhaInsumos:
        name === "terceiraLinhaInsumos" ? value : terceiraLinhaInsumos,
    };

    onInsumosChange(novosDadosInsumos);
  };

  const handleInputChangeParceiro = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaParceiro") {
      setPrimeiraLinhaParceiro(value);
    } else if (name === "segundaLinhaParceiro") {
      setSegundaLinhaParceiro(value);
    } else if (name === "terceiraLinhaParceiro") {
      setTerceiraLinhaParceiro(value);
    }

    const novosDadosParceiro = {
      primeiraLinhaParceiro:
        name === "primeiraLinhaParceiro" ? value : primeiraLinhaParceiro,
      segundaLinhaParceiro:
        name === "segundaLinhaParceiro" ? value : segundaLinhaParceiro,
      terceiraLinhaParceiro:
        name === "terceiraLinhaParceiro" ? value : terceiraLinhaParceiro,
    };

    onParceiroChange(novosDadosParceiro);
  };

  const handleInputChangeMelhorar = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaMelhorar") {
      setPrimeiraLinhaMelhorar(value);
    } else if (name === "segundaLinhaMelhorar") {
      setSegundaLinhaMelhorar(value);
    } else if (name === "terceiraLinhaMelhorar") {
      setTerceiraLinhaMelhorar(value);
    }

    const novosDadosMelhorar = {
      primeiraLinhaMelhorar:
        name === "primeiraLinhaMelhorar" ? value : primeiraLinhaMelhorar,
      segundaLinhaMelhorar:
        name === "segundaLinhaMelhorar" ? value : segundaLinhaMelhorar,
      terceiraLinhaMelhorar:
        name === "terceiraLinhaMelhorar" ? value : terceiraLinhaMelhorar,
    };

    onMelhorarChange(novosDadosMelhorar);
  };

  const handleInputChangeImitado = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaImitado") {
      setPrimeiraLinhaImitado(value);
    } else if (name === "segundaLinhaImitado") {
      setSegundaLinhaImitado(value);
    } else if (name === "terceiraLinhaImitado") {
      setTerceiraLinhaImitado(value);
    }

    const novosDadosImitado = {
      primeiraLinhaImitado:
        name === "primeiraLinhaImitado" ? value : primeiraLinhaImitado,
      segundaLinhaImitado:
        name === "segundaLinhaImitado" ? value : segundaLinhaImitado,
      terceiraLinhaImitado:
        name === "terceiraLinhaImitado" ? value : terceiraLinhaImitado,
    };

    onImitadoChange(novosDadosImitado);
  };

  const handleInputChangeLocalizacao = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaLocalizacao") {
      setPrimeiraLinhaLocalizacao(value);
    } else if (name === "segundaLinhaLocalizacao") {
      setSegundaLinhaLocalizacao(value);
    } else if (name === "terceiraLinhaLocalizacao") {
      setTerceiraLinhaLocalizacao(value);
    }

    const novosDadosLocalizacao = {
      primeiraLinhaLocalizacao:
        name === "primeiraLinhaLocalizacao" ? value : primeiraLinhaLocalizacao,
      segundaLinhaLocalizacao:
        name === "segundaLinhaLocalizacao" ? value : segundaLinhaLocalizacao,
      terceiraLinhaLocalizacao:
        name === "terceiraLinhaLocalizacao" ? value : terceiraLinhaLocalizacao,
    };

    onLocalizacaoChange(novosDadosLocalizacao);
  };

  const handleInputChangeConcorrencia = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaConcorrencia") {
      setPrimeiraLinhaConcorrencia(value);
    } else if (name === "segundaLinhaConcorrencia") {
      setSegundaLinhaConcorrencia(value);
    } else if (name === "terceiraLinhaConcorrencia") {
      setTerceiraLinhaConcorrencia(value);
    }

    const novosDadosConcorrencia = {
      primeiraLinhaConcorrencia:
        name === "primeiraLinhaConcorrencia"
          ? value
          : primeiraLinhaConcorrencia,
      segundaLinhaConcorrencia:
        name === "segundaLinhaConcorrencia" ? value : segundaLinhaConcorrencia,
      terceiraLinhaConcorrencia:
        name === "terceiraLinhaConcorrencia"
          ? value
          : terceiraLinhaConcorrencia,
    };

    onConcorrenciaChange(novosDadosConcorrencia);
  };

  const handleInputChangePorte = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaPorte") {
      setPrimeiraLinhaPorte(value);
    } else if (name === "segundaLinhaPorte") {
      setSegundaLinhaPorte(value);
    } else if (name === "terceiraLinhaPorte") {
      setTerceiraLinhaPorte(value);
    }

    const novosDadosPorte = {
      primeiraLinhaPorte:
        name === "primeiraLinhaPorte" ? value : primeiraLinhaPorte,
      segundaLinhaPorte:
        name === "segundaLinhaPorte" ? value : segundaLinhaPorte,
      terceiraLinhaPorte:
        name === "terceiraLinhaPorte" ? value : terceiraLinhaPorte,
    };

    onPorteChange(novosDadosPorte);
  };

  const handleInputChangeDiferenca = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaDiferenca") {
      setPrimeiraLinhaDiferenca(value);
    } else if (name === "segundaLinhaDiferenca") {
      setSegundaLinhaDiferenca(value);
    } else if (name === "terceiraLinhaDiferenca") {
      setTerceiraLinhaDiferenca(value);
    }

    const novosDadosDiferenca = {
      primeiraLinhaDiferenca:
        name === "primeiraLinhaDiferenca" ? value : primeiraLinhaDiferenca,
      segundaLinhaDiferenca:
        name === "segundaLinhaDiferenca" ? value : segundaLinhaDiferenca,
      terceiraLinhaDiferenca:
        name === "terceiraLinhaDiferenca" ? value : terceiraLinhaDiferenca,
    };

    onDiferencaChange(novosDadosDiferenca);
  };

  const handleInputChangeEmpresa = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaEmpresa") {
      setPrimeiraLinhaEmpresa(value);
    } else if (name === "segundaLinhaEmpresa") {
      setSegundaLinhaEmpresa(value);
    } else if (name === "terceiraLinhaEmpresa") {
      setTerceiraLinhaEmpresa(value);
    }

    const novosDadosEmpresa = {
      primeiraLinhaEmpresa:
        name === "primeiraLinhaEmpresa" ? value : primeiraLinhaEmpresa,
      segundaLinhaEmpresa:
        name === "segundaLinhaEmpresa" ? value : segundaLinhaEmpresa,
      terceiraLinhaEmpresa:
        name === "terceiraLinhaEmpresa" ? value : terceiraLinhaEmpresa,
    };

    onEmpresaChange(novosDadosEmpresa);
  };

  return (
    <div className="benchmarking">
      <div className="centerObs1">
        <button
          className="close_obs"
          onClick={(e) => fecharFormIntuicao(e)}
        ></button>
        <div className="dot2_obs"></div>
        <div className="dot3_obs"></div>
        <h2>Benchmarking</h2>
        <div
          onClick={() => {
            window.open("tutorial#tut_sintese", "_blank");
          }}
          className="duvida_benchmarking"
        ></div>
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
              <th className="segundo-canto">
                O que podemos fazer diferente/melhor?
              </th>
            </tr>

            <tr>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaEmpresa"
                  value={primeiraLinhaEmpresa}
                  onChange={handleInputChangeEmpresa}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaDiferenca"
                  value={primeiraLinhaDiferenca}
                  onChange={handleInputChangeDiferenca}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaPorte"
                  value={primeiraLinhaPorte}
                  onChange={handleInputChangePorte}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaConcorrencia"
                  value={primeiraLinhaConcorrencia}
                  onChange={handleInputChangeConcorrencia}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaLocalizacao"
                  value={primeiraLinhaLocalizacao}
                  onChange={handleInputChangeLocalizacao}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaImitado"
                  value={primeiraLinhaImitado}
                  onChange={handleInputChangeImitado}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaMelhorar"
                  value={primeiraLinhaMelhorar}
                  onChange={handleInputChangeMelhorar}
                  maxLength={16}
                />
              </td>
            </tr>

            <tr>
              <td>
                <input
                  type="text"
                  name="segundaLinhaEmpresa"
                  value={segundaLinhaEmpresa}
                  onChange={handleInputChangeEmpresa}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaDiferenca"
                  value={segundaLinhaDiferenca}
                  onChange={handleInputChangeDiferenca}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaPorte"
                  value={segundaLinhaPorte}
                  onChange={handleInputChangePorte}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaConcorrencia"
                  value={segundaLinhaConcorrencia}
                  onChange={handleInputChangeConcorrencia}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaLocalizacao"
                  value={segundaLinhaLocalizacao}
                  onChange={handleInputChangeLocalizacao}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaImitado"
                  value={segundaLinhaImitado}
                  onChange={handleInputChangeImitado}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaMelhorar"
                  value={segundaLinhaMelhorar}
                  onChange={handleInputChangeMelhorar}
                  maxLength={16}
                />
              </td>
            </tr>

            <tr>
              <td className="quarto-canto">
                <input
                  className="quarto-canto"
                  type="text"
                  name="terceiraLinhaEmpresa"
                  value={terceiraLinhaEmpresa}
                  onChange={handleInputChangeEmpresa}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaDiferenca"
                  value={terceiraLinhaDiferenca}
                  onChange={handleInputChangeDiferenca}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaPorte"
                  value={terceiraLinhaPorte}
                  onChange={handleInputChangePorte}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaConcorrencia"
                  value={terceiraLinhaConcorrencia}
                  onChange={handleInputChangeConcorrencia}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaLocalizacao"
                  value={terceiraLinhaLocalizacao}
                  onChange={handleInputChangeLocalizacao}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaImitado"
                  value={terceiraLinhaImitado}
                  onChange={handleInputChangeImitado}
                  maxLength={16}
                />
              </td>
              <td className="terceiro-canto">
                <input
                  className="terceiro-canto"
                  type="text"
                  name="terceiraLinhaMelhorar"
                  value={terceiraLinhaMelhorar}
                  onChange={handleInputChangeMelhorar}
                  maxLength={16}
                />
              </td>
            </tr>
          </table>

          <div className="clear"></div>
        </div>

        <div className="parceiro">
          <div className="clear"></div>

          <p>Parceiro</p>
          <table>
            <tr>
              <th className="primeiro-canto">Empresas</th>
              <th>Insumos</th>
              <th>Beneficios da parceria</th>
              <th>Até quanto consegui fornecer?</th>
              <th>Qual o risco?</th>
              <th>Por que não verticalizar?</th>
              <th className="segundo-canto">Nota de 1 a 5</th>
            </tr>

            <tr>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaParceiro"
                  value={primeiraLinhaParceiro}
                  onChange={handleInputChangeParceiro}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaInsumos"
                  value={primeiraLinhaInsumos}
                  onChange={handleInputChangeInsumos}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaBeneficios"
                  value={primeiraLinhaBeneficios}
                  onChange={handleInputChangeBeneficios}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaFornecer"
                  value={primeiraLinhaFornecer}
                  onChange={handleInputChangeFornecer}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaRisco"
                  value={primeiraLinhaRisco}
                  onChange={handleInputChangeRisco}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaVerticalizar"
                  value={primeiraLinhaVerticalizar}
                  onChange={handleInputChangeVerticalizar}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="primeiraLinhaNota"
                  value={primeiraLinhaNota}
                  onChange={handleInputChangeNota}
                  maxLength={16}
                />
              </td>
            </tr>

            <tr>
              <td>
                <input
                  type="text"
                  name="segundaLinhaParceiro"
                  value={segundaLinhaParceiro}
                  onChange={handleInputChangeParceiro}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaInsumos"
                  value={segundaLinhaInsumos}
                  onChange={handleInputChangeInsumos}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaBeneficios"
                  value={segundaLinhaBeneficios}
                  onChange={handleInputChangeBeneficios}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaFornecer"
                  value={segundaLinhaFornecer}
                  onChange={handleInputChangeFornecer}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaRisco"
                  value={segundaLinhaRisco}
                  onChange={handleInputChangeRisco}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaVerticalizar"
                  value={segundaLinhaVerticalizar}
                  onChange={handleInputChangeVerticalizar}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="segundaLinhaNota"
                  value={segundaLinhaNota}
                  onChange={handleInputChangeNota}
                  maxLength={16}
                />
              </td>
            </tr>

            <tr>
              <td className="quarto-canto">
                <input
                  className="quarto-canto"
                  type="text"
                  name="terceiraLinhaParceiro"
                  value={terceiraLinhaParceiro}
                  onChange={handleInputChangeParceiro}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaInsumos"
                  value={terceiraLinhaInsumos}
                  onChange={handleInputChangeInsumos}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaBeneficios"
                  value={terceiraLinhaBeneficios}
                  onChange={handleInputChangeBeneficios}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaFornecer"
                  value={terceiraLinhaFornecer}
                  onChange={handleInputChangeFornecer}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaRisco"
                  value={terceiraLinhaRisco}
                  onChange={handleInputChangeRisco}
                  maxLength={16}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="terceiraLinhaVerticalizar"
                  value={terceiraLinhaVerticalizar}
                  onChange={handleInputChangeVerticalizar}
                  maxLength={16}
                />
              </td>
              <td className="terceiro-canto">
                <input
                  className="terceiro-canto"
                  type="text"
                  name="terceiraLinhaNota"
                  value={terceiraLinhaNota}
                  onChange={handleInputChangeNota}
                  maxLength={16}
                />
              </td>
            </tr>
          </table>
        </div>

        <div className="clear"></div>

        <div className="perfil">
          <div
            onClick={() => {
              window.open("tutorial#tut_benchmaking", "_blank");
            }}
            className="duvida_perfis"
          ></div>

          <div className="clear"></div>

          <h2>Perfil dos clientes</h2>

          <div className="dir">
            <div className="txt-perfil">Perfil 2</div>
            <div
              className="img-perfil"
              title="Perfil e persona do Cliente 2"
            ></div>
            <input
              placeholder="Perfil e persona"
              className="primeiro-input"
              type="text"
              name="primeiraLinhaPerfil2"
              value={primeiraLinhaPerfil2}
              onChange={handleInputChangePerfil2}
              maxLength={36}
            />

            <div
              className="crescendo"
              title="Como a proposta potencializa os ganhos do Cliente 2?"
            ></div>
            <input
              placeholder="Ganhos"
              className="segundo-input"
              type="text"
              name="segundaLinhaPerfil2"
              value={segundaLinhaPerfil2}
              onChange={handleInputChangePerfil2}
              maxLength={36}
            />

            <div
              className="dores"
              title="Como a proposta de valor minimiza as dores do Cliente 2?"
            ></div>
            <input
              placeholder="Dores minimizadas"
              className="terceiro-input"
              type="text"
              name="terceiraLinhaPerfil2"
              value={terceiraLinhaPerfil2}
              onChange={handleInputChangePerfil2}
              maxLength={36}
            />
          </div>

          <div className="esq">
            <div className="txt-perfil">Perfil 1</div>
            <div
              className="img-perfil"
              title="Perfil e persona do Cliente 1"
            ></div>
            <input
              placeholder="Perfil e persona"
              type="text"
              name="primeiraLinhaPerfil1"
              value={primeiraLinhaPerfil1}
              onChange={handleInputChangePerfil1}
              maxLength={36}
            />

            <div
              className="crescendo"
              title="Como a proposta potencializa os ganhos do Cliente 1?"
            ></div>
            <input
              placeholder="Ganhos"
              type="text"
              name="segundaLinhaPerfil1"
              value={segundaLinhaPerfil1}
              onChange={handleInputChangePerfil1}
              maxLength={36}
            />

            <div
              className="dores"
              title="Como a proposta de valor minimiza as dores do Cliente 1?"
            ></div>
            <input
              placeholder="Dores minimizadas"
              type="text"
              name="terceiraLinhaPerfil1"
              value={terceiraLinhaPerfil1}
              onChange={handleInputChangePerfil1}
              maxLength={36}
            />
          </div>
          <div className="clear"></div>
        </div>

        <div onClick={(e) => irParaObservacao2(e)} className="setas"></div>
      </div>
    </div>
  );
}

export default Observacao1;
