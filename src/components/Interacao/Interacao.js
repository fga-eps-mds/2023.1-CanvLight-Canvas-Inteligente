import rightArrow from "../../images/next-arrow.png";
import zap from "../../images/zap.png";
import insta from "../../images/insta.png";
import twitter from "../../images/twitter.png";
import face from "../../images/face.png";
import linkedin from "../../images/linkedin.png";
import sad from "../../images/sad.png";
import normal from "../../images/normal.png";
import happy from "../../images/happy.png";
import "./Interacao.css";

import React, { useState } from "react";
/* import GeradorPDF from "../GeradorPDF/GeradorPDF"; */

function Interacao( {onDescricaoChange, onAnalisePrecoChange, onAnaliseQuantidadeChange, onAnaliseCustoChange, onAnaliseDiferencialChange, onAnalisePreDifChange, 
  onMvpProdutoChange, onMvpIndicadoChange, onMvpOrientacoesChange, onMvpResultadoChange }) {

  const [primeiraLinhaDescricao, setPrimeiraLinhaDescricao] = useState("");
  const [segundaLinhaDescricao, setSegundaLinhaDescricao] = useState("");
  const [terceiraLinhaDescricao, setTerceiraLinhaDescricao] = useState("");

  const handleInputChangeDescricao = (e) => {
    const { name, value } = e.target;
    if (name === 'primeiraLinhaDescricao') {
      setPrimeiraLinhaDescricao(value);
    } else if (name === 'segundaLinhaDescricao') {
      setSegundaLinhaDescricao(value);
    } else if (name === 'terceiraLinhaDescricao') {
      setTerceiraLinhaDescricao(value);
    }

    const novosDadosDescricao = {
      primeiraLinhaDescricao: name === 'primeiraLinhaDescricao' ? value : primeiraLinhaDescricao,
      segundaLinhaDescricao: name === 'segundaLinhaDescricao' ? value : segundaLinhaDescricao,
      terceiraLinhaDescricao: name === 'terceiraLinhaDescricao' ? value : terceiraLinhaDescricao,
    };

    onDescricaoChange(novosDadosDescricao);
  }

  const [primeiraLinhaAnalisePreco, setPrimeiraLinhaAnalisePreco] = useState("");
  const [segundaLinhaAnalisePreco, setSegundaLinhaAnalisePreco] = useState("");
  const [terceiraLinhaAnalisePreco, setTerceiraLinhaAnalisePreco] = useState("");

  const handleInputChangeAnalisePreco = (e) => {
    const { name, value } = e.target;
    if (name === 'primeiraLinhaAnalisePreco') {
      setPrimeiraLinhaAnalisePreco(value);
    } else if (name === 'segundaLinhaAnalisePreco') {
      setSegundaLinhaAnalisePreco(value);
    } else if (name === 'terceiraLinhaAnalisePreco') {
      setTerceiraLinhaAnalisePreco(value);
    }

    const novosDadosAnalisePreco = {
      primeiraLinhaAnalisePreco: name === 'primeiraLinhaAnalisePreco' ? value : primeiraLinhaAnalisePreco,
      segundaLinhaAnalisePreco: name === 'segundaLinhaAnalisePreco' ? value : segundaLinhaAnalisePreco,
      terceiraLinhaAnalisePreco: name === 'terceiraLinhaAnalisePreco' ? value : terceiraLinhaAnalisePreco,
    };

    onAnalisePrecoChange(novosDadosAnalisePreco);
  }

  const [primeiraLinhaAnaliseQuantidade, setPrimeiraLinhaAnaliseQuantidade] = useState("");
  const [segundaLinhaAnaliseQuantidade, setSegundaLinhaAnaliseQuantidade] = useState("");
  const [terceiraLinhaAnaliseQuantidade, setTerceiraLinhaAnaliseQuantidade] = useState("");

  const handleInputChangeAnaliseQuantidade = (e) => {
    const { name, value } = e.target;
    if (name === 'primeiraLinhaAnaliseQuantidade') {
      setPrimeiraLinhaAnaliseQuantidade(value);
    } else if (name === 'segundaLinhaAnaliseQuantidade') {
      setSegundaLinhaAnaliseQuantidade(value);
    } else if (name === 'terceiraLinhaAnaliseQuantidade') {
      setTerceiraLinhaAnaliseQuantidade(value);
    }

    const novosDadosAnaliseQuantidade = {
      primeiraLinhaAnaliseQuantidade: name === 'primeiraLinhaAnaliseQuantidade' ? value : primeiraLinhaAnaliseQuantidade,
      segundaLinhaAnaliseQuantidade: name === 'segundaLinhaAnaliseQuantidade' ? value : segundaLinhaAnaliseQuantidade,
      terceiraLinhaAnaliseQuantidade: name === 'terceiraLinhaAnaliseQuantidade' ? value : terceiraLinhaAnaliseQuantidade,
    };

    onAnaliseQuantidadeChange(novosDadosAnaliseQuantidade);
  }

  const [primeiraLinhaAnaliseCusto, setPrimeiraLinhaAnaliseCusto] = useState("");
  const [segundaLinhaAnaliseCusto, setSegundaLinhaAnaliseCusto] = useState("");
  const [terceiraLinhaAnaliseCusto, setTerceiraLinhaAnaliseCusto] = useState("");

  const handleInputChangeAnaliseCusto = (e) => {
    const { name, value } = e.target;
    if (name === 'primeiraLinhaAnaliseCusto') {
      setPrimeiraLinhaAnaliseCusto(value);
    } else if (name === 'segundaLinhaAnaliseCusto') {
      setSegundaLinhaAnaliseCusto(value);
    } else if (name === 'terceiraLinhaAnaliseCusto') {
      setTerceiraLinhaAnaliseCusto(value);
    }

    const novosDadosAnaliseCusto = {
      primeiraLinhaAnaliseCusto: name === 'primeiraLinhaAnaliseCusto' ? value : primeiraLinhaAnaliseCusto,
      segundaLinhaAnaliseCusto: name === 'segundaLinhaAnaliseCusto' ? value : segundaLinhaAnaliseCusto,
      terceiraLinhaAnaliseCusto: name === 'terceiraLinhaAnaliseCusto' ? value : terceiraLinhaAnaliseCusto,
    };

    onAnaliseCustoChange(novosDadosAnaliseCusto);
  }

  const [primeiraLinhaAnaliseDiferencial, setPrimeiraLinhaAnaliseDiferencial] = useState("");
  const [segundaLinhaAnaliseDiferencial, setSegundaLinhaAnaliseDiferencial] = useState("");
  const [terceiraLinhaAnaliseDiferencial, setTerceiraLinhaAnaliseDiferencial] = useState("");
  const [quartaLinhaAnaliseDiferencial, setQuartaLinhaAnaliseDiferencial] = useState("");
  const [quintaLinhaAnaliseDiferencial, setQuintaLinhaAnaliseDiferencial] = useState("");

  const handleInputChangeAnaliseDiferencial = (e) => {
    const { name, value } = e.target;
    if (name === 'primeiraLinhaAnaliseDiferencial') {
      setPrimeiraLinhaAnaliseDiferencial(value);
    } else if (name === 'segundaLinhaAnaliseDiferencial') {
      setSegundaLinhaAnaliseDiferencial(value);
    } else if (name === 'terceiraLinhaAnaliseDiferencial') {
      setTerceiraLinhaAnaliseDiferencial(value);
    } else if (name === 'quartaLinhaAnaliseDiferencial') {
      setQuartaLinhaAnaliseDiferencial(value);
    } else if (name === 'quintaLinhaAnaliseDiferencial') {
      setQuintaLinhaAnaliseDiferencial(value);
    }

    const novosDadosAnaliseDiferencial = {
      primeiraLinhaAnaliseDiferencial: name === 'primeiraLinhaAnaliseDiferencial' ? value : primeiraLinhaAnaliseDiferencial,
      segundaLinhaAnaliseDiferencial: name === 'segundaLinhaAnaliseDiferencial' ? value : segundaLinhaAnaliseDiferencial,
      terceiraLinhaAnaliseDiferencial: name === 'terceiraLinhaAnaliseDiferencial' ? value : terceiraLinhaAnaliseDiferencial,
      quartaLinhaAnaliseDiferencial: name === 'quartaLinhaAnaliseDiferencial' ? value : quartaLinhaAnaliseDiferencial,
      quintaLinhaAnaliseDiferencial: name === 'quintaLinhaAnaliseDiferencial' ? value : quintaLinhaAnaliseDiferencial,
    };
    onAnaliseDiferencialChange(novosDadosAnaliseDiferencial);
  }

  const [primeiraLinhaAnalisePreDif, setPrimeiraLinhaAnalisePreDif] = useState("");
  const [segundaLinhaAnalisePreDif, setSegundaLinhaAnalisePreDif] = useState("");
  const [terceiraLinhaAnalisePreDif, setTerceiraLinhaAnalisePreDif] = useState("");
  const [quartaLinhaAnalisePreDif, setQuartaLinhaAnalisePreDif] = useState("");
  const [quintaLinhaAnalisePreDif, setQuintaLinhaAnalisePreDif] = useState("");

  const handleInputChangeAnalisePreDif = (e) => {
    const { name, value } = e.target;
    if (name === 'primeiraLinhaAnalisePreDif') {
      setPrimeiraLinhaAnalisePreDif(value);
    } else if (name === 'segundaLinhaAnalisePreDif') {
      setSegundaLinhaAnalisePreDif(value);
    } else if (name === 'terceiraLinhaAnalisePreDif') {
      setTerceiraLinhaAnalisePreDif(value);
    } else if (name === 'quartaLinhaAnalisePreDif') {
      setQuartaLinhaAnalisePreDif(value);
    } else if (name === 'quintaLinhaAnalisePreDif') {
      setQuintaLinhaAnalisePreDif(value);
    }

    const novosDadosAnalisePreDif = {
      primeiraLinhaAnalisePreDif: name === 'primeiraLinhaAnalisePreDif' ? value : primeiraLinhaAnalisePreDif,
      segundaLinhaAnalisePreDif: name === 'segundaLinhaAnalisePreDif' ? value : segundaLinhaAnalisePreDif,
      terceiraLinhaAnalisePreDif: name === 'terceiraLinhaAnalisePreDif' ? value : terceiraLinhaAnalisePreDif,
      quartaLinhaAnalisePreDif: name === 'quartaLinhaAnalisePreDif' ? value : quartaLinhaAnalisePreDif,
      quintaLinhaAnalisePreDif: name === 'quintaLinhaAnalisePreDif' ? value : quintaLinhaAnalisePreDif,
    };
    onAnalisePreDifChange(novosDadosAnalisePreDif);
  }

  const [primeiraLinhaMvpProduto, setPrimeiraLinhaMvpProduto] = useState("");
  const [segundaLinhaMvpProduto, setSegundaLinhaMvpProduto] = useState("");
  const [terceiraLinhaMvpProduto, setTerceiraLinhaMvpProduto] = useState("");
  const [quartaLinhaMvpProduto, setQuartaLinhaMvpProduto] = useState("");

  const handleInputChangeMvpProduto = (e) => {
    const { name, value } = e.target;
    if (name === 'primeiraLinhaMvpProduto') {
      setPrimeiraLinhaMvpProduto(value);
    } else if (name === 'segundaLinhaMvpProduto') {
      setSegundaLinhaMvpProduto(value);
    } else if (name === 'terceiraLinhaMvpProduto') {
      setTerceiraLinhaMvpProduto(value);
    } else if (name === 'quartaLinhaMvpProduto') {
      setQuartaLinhaMvpProduto(value);
    } 

    const novosDadosMvpProduto = {
      primeiraLinhaMvpProduto: name === 'primeiraLinhaMvpProduto' ? value : primeiraLinhaMvpProduto,
      segundaLinhaMvpProduto: name === 'segundaLinhaMvpProduto' ? value : segundaLinhaMvpProduto,
      terceiraLinhaMvpProduto: name === 'terceiraLinhaMvpProduto' ? value : terceiraLinhaMvpProduto,
      quartaLinhaMvpProduto: name === 'quartaLinhaMvpProduto' ? value : quartaLinhaMvpProduto,
    };
    onMvpProdutoChange(novosDadosMvpProduto);
  }

  const [primeiraLinhaMvpIndicado, setPrimeiraLinhaMvpIndicado] = useState("");
  const [segundaLinhaMvpIndicado, setSegundaLinhaMvpIndicado] = useState("");
  const [terceiraLinhaMvpIndicado, setTerceiraLinhaMvpIndicado] = useState("");
  const [quartaLinhaMvpIndicado, setQuartaLinhaMvpIndicado] = useState("");

  const handleInputChangeMvpIndicado = (e) => {
    const { name, value } = e.target;
    if (name === 'primeiraLinhaMvpIndicado') {
      setPrimeiraLinhaMvpIndicado(value);
    } else if (name === 'segundaLinhaMvpIndicado') {
      setSegundaLinhaMvpIndicado(value);
    } else if (name === 'terceiraLinhaMvpIndicado') {
      setTerceiraLinhaMvpIndicado(value);
    } else if (name === 'quartaLinhaMvpIndicado') {
      setQuartaLinhaMvpIndicado(value);
    } 

    const novosDadosMvpIndicado = {
      primeiraLinhaMvpIndicado: name === 'primeiraLinhaMvpIndicado' ? value : primeiraLinhaMvpIndicado,
      segundaLinhaMvpIndicado: name === 'segundaLinhaMvpIndicado' ? value : segundaLinhaMvpIndicado,
      terceiraLinhaMvpIndicado: name === 'terceiraLinhaMvpIndicado' ? value : terceiraLinhaMvpIndicado,
      quartaLinhaMvpIndicado: name === 'quartaLinhaMvpIndicado' ? value : quartaLinhaMvpIndicado,
    };
    onMvpIndicadoChange(novosDadosMvpIndicado);
  }

  const [primeiraLinhaMvpOrientacoes, setPrimeiraLinhaMvpOrientacoes] = useState("");
  const [segundaLinhaMvpOrientacoes, setSegundaLinhaMvpOrientacoes] = useState("");
  const [terceiraLinhaMvpOrientacoes, setTerceiraLinhaMvpOrientacoes] = useState("");
  const [quartaLinhaMvpOrientacoes, setQuartaLinhaMvpOrientacoes] = useState("");

  const handleInputChangeMvpOrientacoes = (e) => {
    const { name, value } = e.target;
    if (name === 'primeiraLinhaMvpOrientacoes') {
      setPrimeiraLinhaMvpOrientacoes(value);
    } else if (name === 'segundaLinhaMvpOrientacoes') {
      setSegundaLinhaMvpOrientacoes(value);
    } else if (name === 'terceiraLinhaMvpOrientacoes') {
      setTerceiraLinhaMvpOrientacoes(value);
    } else if (name === 'quartaLinhaMvpOrientacoes') {
      setQuartaLinhaMvpOrientacoes(value);
    } 

    const novosDadosMvpOrientacoes = {
      primeiraLinhaMvpOrientacoes: name === 'primeiraLinhaMvpOrientacoes' ? value : primeiraLinhaMvpOrientacoes,
      segundaLinhaMvpOrientacoes: name === 'segundaLinhaMvpOrientacoes' ? value : segundaLinhaMvpOrientacoes,
      terceiraLinhaMvpOrientacoes: name === 'terceiraLinhaMvpOrientacoes' ? value : terceiraLinhaMvpOrientacoes,
      quartaLinhaMvpOrientacoes: name === 'quartaLinhaMvpOrientacoes' ? value : quartaLinhaMvpOrientacoes,
    };
    onMvpOrientacoesChange(novosDadosMvpOrientacoes);
  }

  const [primeiraLinhaMvpResultado, setPrimeiraLinhaMvpResultado] = useState("");
  const [segundaLinhaMvpResultado, setSegundaLinhaMvpResultado] = useState("");
  const [terceiraLinhaMvpResultado, setTerceiraLinhaMvpResultado] = useState("");
  const [quartaLinhaMvpResultado, setQuartaLinhaMvpResultado] = useState("");

  const handleInputChangeMvpResultado = (e) => {
    const { name, value } = e.target;
    if (name === 'primeiraLinhaMvpResultado') {
      setPrimeiraLinhaMvpResultado(value);
    } else if (name === 'segundaLinhaMvpResultado') {
      setSegundaLinhaMvpResultado(value);
    } else if (name === 'terceiraLinhaMvpResultado') {
      setTerceiraLinhaMvpResultado(value);
    } else if (name === 'quartaLinhaMvpResultado') {
      setQuartaLinhaMvpResultado(value);
    } 

    const novosDadosMvpResultado = {
      primeiraLinhaMvpResultado: name === 'primeiraLinhaMvpResultado' ? value : primeiraLinhaMvpResultado,
      segundaLinhaMvpResultado: name === 'segundaLinhaMvpResultado' ? value : segundaLinhaMvpResultado,
      terceiraLinhaMvpResultado: name === 'terceiraLinhaMvpResultado' ? value : terceiraLinhaMvpResultado,
      quartaLinhaMvpResultado: name === 'quartaLinhaMvpResultado' ? value : quartaLinhaMvpResultado,
    };
    onMvpResultadoChange(novosDadosMvpResultado);
  }
//===============================================================================================
  function clicouNaDuvida() {
    alert("duvida clicada!");
  }

  function fecharFormInteracao(e) {
    e.preventDefault();
    let modal = document.querySelector(".form_interacao");
    modal.style.display = "none";
  }

  function fecharTela_3(e) {
    e.preventDefault();
    let modal = document.querySelector(".tela_3_form_interacao");
    modal.style.display = "none";
  }

  function nextpage1(e) {
    e.preventDefault();
    let modal = document.querySelector(".tela_2_form_interacao");
    modal.style.display = "block";
    let medel = document.querySelector(".form_interacao");
    medel.style.display = "none";
  }

  function nextpage2(e) {
    e.preventDefault();
    let modal = document.querySelector(".tela_3_form_interacao");
    modal.style.display = "block";
    let medel = document.querySelector(".tela_2_form_interacao");
    medel.style.display = "none";
  }

  function returnScreen2(e) {
    let modal = document.querySelector(".tela_2_form_interacao");
    modal.style.display = "block";
    let medel = document.querySelector(".tela_3_form_interacao");
    medel.style.display = "none";
  }

  function fecharFormInteracaoTela2(e) {
    e.preventDefault();
    let modal = document.querySelector(".tela_2_form_interacao");
    modal.style.display = "none";
  }
  function backpage1(e) {
    e.preventDefault();
    let modal = document.querySelector(".form_interacao");
    modal.style.display = "block";
    let medel = document.querySelector(".tela_2_form_interacao");
    medel.style.display = "none";
  }
  function newTask() {
    var input = document.getElementById("input-new-task");
    var valor = input.value;
    console.log(valor);
  }

  return (
    <div body>
      <div className="form_interacao">
        <div className="centerItr">
          <button
            className="close_itr"
            onClick={(e) => fecharFormInteracao(e)}
          ></button>
          <div className="dot2_itr"></div>
          <div className="dot3_itr"></div>
          <div className="tela1">
            <div className="parte1_interacao">
              <form>
                <div>
                  <p>
                    Análise de Custos:{" "}
                    <div onClick={clicouNaDuvida} className="duvida"></div>{" "}
                  </p>
                </div>
              </form>
            </div>
            <div className="tabela_analise_custos">
              <table className="table_interacao">
                <tr>
                  <th>DESCRIÇÃO</th>
                  <th>PREÇO</th>
                  <th>QUANTIDADE</th>
                  <th>CUSTO</th>
                </tr>
                <tr>
                  <td>
                    <input type="text" name='primeiraLinhaDescricao' value={primeiraLinhaDescricao} onChange={handleInputChangeDescricao} />
                  </td>
                  <td>
                    <input type="text" name="primeiraLinhaAnalisePreco" value={primeiraLinhaAnalisePreco} onChange={handleInputChangeAnalisePreco}/>
                  </td>
                  <td>
                    <input type="text" name="primeiraLinhaAnaliseQuantidade" value={primeiraLinhaAnaliseQuantidade} onChange={handleInputChangeAnaliseQuantidade} />
                  </td>
                  <td>
                    <input type="text" name="primeiraLinhaAnaliseCusto" value={primeiraLinhaAnaliseCusto} onChange={handleInputChangeAnaliseCusto} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name='segundaLinhaDescricao' value={segundaLinhaDescricao} onChange={handleInputChangeDescricao} />
                  </td>
                  <td>
                    <input type="text" name="segundaLinhaAnalisePreco" value={segundaLinhaAnalisePreco} onChange={handleInputChangeAnalisePreco} />
                  </td>
                  <td>
                    <input type="text" name="segundaLinhaAnaliseQuantidade" value={segundaLinhaAnaliseQuantidade} onChange={handleInputChangeAnaliseQuantidade} />
                  </td>
                  <td>
                    <input type="text" name="segundaLinhaAnaliseCusto" value={segundaLinhaAnaliseCusto} onChange={handleInputChangeAnaliseCusto} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name='terceiraLinhaDescricao' value={terceiraLinhaDescricao} onChange={handleInputChangeDescricao} />
                  </td>
                  <td>
                    <input type="text" name="terceiraLinhaAnalisePreco" value={terceiraLinhaAnalisePreco} onChange={handleInputChangeAnalisePreco}/>
                  </td>
                  <td>
                    <input type="text" name="terceiraLinhaAnaliseQuantidade" value={terceiraLinhaAnaliseQuantidade} onChange={handleInputChangeAnaliseQuantidade} />
                  </td>
                  <td>
                    <input type="text" name="terceiraLinhaAnaliseCusto" value={terceiraLinhaAnaliseCusto} onChange={handleInputChangeAnaliseCusto} />
                  </td>
                </tr>
                <tr>
                  <td className="nada"></td>
                  <td className="nada"></td>
                  <td className="total">TOTAL</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </table>
            </div>
            <div className="parte2_interacao">
              <form>
                <div>
                  <p>
                    Análise de Preços e Diferenciais:{" "}
                    <div onClick={clicouNaDuvida} className="duvida"></div>
                  </p>
                </div>
              </form>
            </div>
            <div className="tabela_analise_preço">
              <table className="table_interacao">
                <tr>
                  <th>DIFERENCIAL</th>
                  <td>
                    <input type="text" name="primeiraLinhaAnaliseDiferencial" value={primeiraLinhaAnaliseDiferencial} onChange={handleInputChangeAnaliseDiferencial} />
                  </td>
                  <td>
                    <input type="text" name="segundaLinhaAnaliseDiferencial" value={segundaLinhaAnaliseDiferencial} onChange={handleInputChangeAnaliseDiferencial} />
                  </td>
                  <td>
                    <input type="text" name="terceiraLinhaAnaliseDiferencial" value={terceiraLinhaAnaliseDiferencial} onChange={handleInputChangeAnaliseDiferencial} />
                  </td>
                  <td>
                    <input type="text" name="quartaLinhaAnaliseDiferencial" value={quartaLinhaAnaliseDiferencial} onChange={handleInputChangeAnaliseDiferencial} />
                  </td>
                  <td>
                    <input type="text" name="quintaLinhaAnaliseDiferencial" value={quintaLinhaAnaliseDiferencial} onChange={handleInputChangeAnaliseDiferencial} />
                  </td>
                </tr>
                <tr>
                  <th>PREÇO</th>
                  <td>
                    <input type="text"  name="primeiraLinhaAnalisePreDif" value={primeiraLinhaAnalisePreDif} onChange={handleInputChangeAnalisePreDif} />
                  </td>
                  <td>
                    <input type="text" name="segundaLinhaAnalisePreDif" value={segundaLinhaAnalisePreDif} onChange={handleInputChangeAnalisePreDif} />
                  </td>
                  <td>
                    <input type="text" name="terceiraLinhaAnalisePreDif" value={terceiraLinhaAnalisePreDif} onChange={handleInputChangeAnalisePreDif} />
                  </td>
                  <td>
                    <input type="text" name="quartaLinhaAnalisePreDif" value={quartaLinhaAnalisePreDif} onChange={handleInputChangeAnalisePreDif} />
                  </td>
                  <td>
                    <input type="text" name="quintaLinhaAnalisePreDif" value={quintaLinhaAnalisePreDif} onChange={handleInputChangeAnalisePreDif} />
                  </td>
                </tr>
              </table>
            </div>
            <div className="clear"></div>

            <img
              src={rightArrow}
              alt="Seta"
              className="right-arrow"
              onClick={(e) => nextpage1(e)}
            />
          </div>
        </div>
      </div>
      <div className="tela_2_form_interacao">
        <div className="center">
          <button
            className="close_button"
            onClick={(e) => fecharFormInteracaoTela2(e)}
          ></button>
          <div className="tela2">
            <div className="esquerda">
              <div className="parte3_interacao">
                <div>
                  <p>
                    Checklist:{" "}
                    <div onClick={clicouNaDuvida} className="duvida"></div>{" "}
                  </p>
                </div>
                <div className="Inserir_tarefa">
                  <input
                    type="text"
                    id="input-new-task"
                    placeholder="Inserir tarefa"
                  ></input>
                  <span className="button_tarefa" onClick={(e) => newTask(e)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="white"
                      class="bi bi-plus-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="direita">
              <div className="parte4_interacao">
                <p>
                  MVP: <div onClick={clicouNaDuvida} className="duvida"></div>{" "}
                </p>
              </div>
              <div className="tabela_MVP">
                <table className="table_interacao_tela2">
                  <tr>
                    <th>PRODUTO</th>
                    <td>
                      <input type="text" name="primeiraLinhaMvpProduto" value={primeiraLinhaMvpProduto} onChange={handleInputChangeMvpProduto} />
                    </td>
                    <td>
                      <input type="text" name="segundaLinhaMvpProduto" value={segundaLinhaMvpProduto} onChange={handleInputChangeMvpProduto} />
                    </td>
                    <td>
                      <input type="text" name="terceiraLinhaMvpProduto" value={terceiraLinhaMvpProduto} onChange={handleInputChangeMvpProduto} />
                    </td>
                    <td>
                      <input type="text" name="quartaLinhaMvpProduto" value={quartaLinhaMvpProduto} onChange={handleInputChangeMvpProduto}/>
                    </td>
                  </tr>
                  <tr>
                    <th>INDICADO PARA</th>
                    <td>
                      <input type="text" name="primeiraLinhaMvpIndicado" value={primeiraLinhaMvpIndicado} onChange={handleInputChangeMvpIndicado} />
                    </td>
                    <td>
                      <input type="text" name="segundaLinhaMvpIndicado" value={segundaLinhaMvpIndicado} onChange={handleInputChangeMvpIndicado} />
                    </td>
                    <td>
                      <input type="text" name="terceiraLinhaMvpIndicado" value={terceiraLinhaMvpIndicado} onChange={handleInputChangeMvpIndicado} />
                    </td>
                    <td>
                      <input type="text" name="quartaLinhaMvpIndicado" value={quartaLinhaMvpIndicado} onChange={handleInputChangeMvpIndicado}/>
                    </td>
                  </tr>
                  <tr>
                    <th>ORIENTAÇÕES DE USO</th>
                    <td>
                      <input type="text" name="primeiraLinhaMvpOrientacoes" value={primeiraLinhaMvpOrientacoes} onChange={handleInputChangeMvpOrientacoes} />
                    </td>
                    <td>
                      <input type="text" name="segundaLinhaMvpOrientacoes" value={segundaLinhaMvpOrientacoes} onChange={handleInputChangeMvpOrientacoes} />
                    </td>
                    <td>
                      <input type="text" name="terceiraLinhaMvpOrientacoes" value={terceiraLinhaMvpOrientacoes} onChange={handleInputChangeMvpOrientacoes} />
                    </td>
                    <td>
                      <input type="text" name="quartaLinhaMvpOrientacoes" value={quartaLinhaMvpOrientacoes} onChange={handleInputChangeMvpOrientacoes}/>
                    </td>
                  </tr>
                  <tr>
                    <th>RESULTADO</th>
                    <td>
                      <input type="text" name="primeiraLinhaMvpResultado" value={primeiraLinhaMvpResultado} onChange={handleInputChangeMvpResultado} />
                    </td>
                    <td>
                      <input type="text" name="segundaLinhaMvpResultado" value={segundaLinhaMvpResultado} onChange={handleInputChangeMvpResultado} />
                    </td>
                    <td>
                      <input type="text" name="terceiraLinhaMvpResultado" value={terceiraLinhaMvpResultado} onChange={handleInputChangeMvpResultado} />
                    </td>
                    <td>
                      <input type="text" name="quartaLinhaMvpResultado" value={quartaLinhaMvpResultado} onChange={handleInputChangeMvpResultado}/>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="parte5_interacao">
              <form>
                <div>
                  <p>
                    Formação do Preço:{" "}
                    <div onClick={clicouNaDuvida} className="duvida"></div>
                  </p>
                </div>
              </form>
            </div>
            <div className="tabela_formacao">
              <table className="table_interacao_tela2">
                <tr>
                  <th>DESCRIÇÃO</th>
                  <th>CUSTO</th>
                  <th>TAXA ADMINISTRATIVA</th>
                  <th>IMPOSTOS</th>
                  <th>MARGEM DE LUCRO</th>
                  <th>PREÇO</th>
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
              </table>
            </div>
            <div className="clear"></div>
            <img
              src={rightArrow}
              alt="Seta"
              className="right-arrow"
              onClick={(e) => nextpage2(e)}
            />
            <img
              src={rightArrow}
              alt="Seta"
              className="left-arrow"
              onClick={(e) => backpage1(e)}
            />
          </div>
        </div>
      </div>

      <div className="tela_3_form_interacao">
        <div className="center">
          <div className="esquerda">
            <button
              className="close_button"
              onClick={(e) => fecharTela_3(e)}
            ></button>
            <div className="digitalizacao">
              <p>
                Digitalização do Negócio:
                <div onClick={clicouNaDuvida} className="duvida"></div>
              </p>
            </div>
            <div className="emoticons">
              <img src={sad} alt="sad" className="checkbox-image_1" />
              <img src={normal} alt="normal" className="checkbox-image" />
              <img src={happy} alt="happy" className="checkbox-image" />
            </div>

            <div className="table">
              <div className="table-row">
                <div className="checkbox_dig">
                  <img src={zap} alt="zap" className="zap" />
                  <input type="checkbox" id="whatsapp_bad"></input>
                  <input type="checkbox" id="whatsapp_normal"></input>
                  <input type="checkbox" id="whatsapp_good"></input>
                </div>
              </div>

              <div className="table-row">
                <div className="checkbox_dig">
                  <img src={insta} alt="insta" className="insta" />
                  <input type="checkbox" id="instagram_bad"></input>
                  <input type="checkbox" id="instagram_normal"></input>
                  <input type="checkbox" id="instagram_good"></input>
                </div>
              </div>

              <div className="table-row">
                <div className="checkbox_dig">
                  <img src={twitter} alt="twitter" className="twitter" />
                  <input type="checkbox" id="twitter_bad"></input>
                  <input type="checkbox" id="twitter_normal"></input>
                  <input type="checkbox" id="twitter_good"></input>
                </div>
              </div>

              <div className="table-row">
                <div className="checkbox_dig">
                  <img src={face} alt="face" className="face" />
                  <input type="checkbox" id="facebook_bad"></input>
                  <input type="checkbox" id="facebook_normal"></input>
                  <input type="checkbox" id="facebook_good"></input>
                </div>
              </div>

              <div className="table-row">
                <div className="checkbox_dig">
                  <img src={linkedin} alt="linkedin" className="linkedin" />
                  <input type="checkbox" id="linkedin_bad"></input>
                  <input type="checkbox" id="linkedin_normal"></input>
                  <input type="checkbox" id="linkedin_good"></input>
                </div>
              </div>
            </div>
            <img
              src={rightArrow}
              alt="Seta"
              className="seta_pag_3"
              onClick={(e) => returnScreen2(e)}
            />
          </div>

          <div className="direita">
            <div className="canais_venda">
              <p>
                Canais de venda:
                <div onClick={clicouNaDuvida} className="duvida"></div>
              </p>
            </div>
            <div className="table-wrapper">
              <table className="tabela_canais_venda">
                <tr>
                  <th>CANAL</th>
                  <th>OBJETIVO</th>
                  <th>METRICA</th>
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
                </tr>
              </table>
            </div>
            <div className="canais_venda">
              <p>
                4 P's do Projeto:
                <div onClick={clicouNaDuvida} className="duvida"></div>
              </p>
            </div>
            <div className="tabela2">
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default Interacao;
