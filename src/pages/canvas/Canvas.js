import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Canvas.css";
import logo from "../../images/logo_canvlight.png";
import arrowIcon from "../../images/arrow.png";
import Intuicao from "../../components/intuicao/Intuicao.js";
import Observacao1 from "../../components/observacao/Observacao1.js";
import Observacao2 from "../../components/observacao/Observacao2.js";
import Observacao3 from "../../components/observacao/Observacao3.js";
import Interacao from "../../components/Interacao/Interacao.js";
import checkIcon from "../../images/check.png";
import GeradorPDF from "../../components/GeradorPDF/GeradorPDF.js";
import gerarPDF from "../../components/GeradorPDF/GeradorPDF";

function Canvas() {
  //intuição
  const [intuTextos, setIntuTextos] = useState({});
  const [intuIntegrador, setIntuIntegrador] = useState({});
  const [intuMercadologico, setIntuMercadologico] = useState({});
  const [intuEmocional, setIntuEmocional] = useState({});
  const [intuResiliente, setIntuResiliente] = useState({});
  const [intuTecnico, setIntuTecnico] = useState({});
  const [sintesePotencialidades, setSintesePotencialidades] = useState({});
  const [sinteseResultados, setSinteseResultados] = useState({});
  const [intuQuatroP, setIntuQuatroP] = useState({});

  //observação3
  const [ferramentasObser3, setFerramentasObser3] = useState({});
  const [indicadoPara, setIndicadoPara] = useState({});
  const [orientacaoUso, setOrientacaoUso] = useState({});
  const [resultadoEsperado, setResultadoEsparado] = useState({});
  const [ferramentasObser3P, setFerramentasObser3P] = useState({});
  const [indicadoParaP, setIndicadoParaP] = useState({});
  const [orientacaoUsoP, setOrientacaoUsoP] = useState({});
  const [resultadoEsperadoP, setResultadoEsparadoP] = useState({});

  //observação2
  const [psObser, setPsObser] = useState({});
  const [aproximados, setAproximados] = useState({});
  const [ferramentas, setFerramentas] = useState({});
  const [requisitos, setRequisitos] = useState({});
  const [opotunidades, setOportunidades] = useState({});
  const [indicado, setIndicado] = useState({});
  const [orientacao, setOrientacao] = useState({});
  const [resultado, setResultado] = useState({});

  //observação1
  const [empresa, setEmpresa] = useState({});
  const [diferenca, setDiferenca] = useState({});
  const [porte, setPorte] = useState({});
  const [concorrencia, setConcorrencia] = useState({});
  const [localizacao, setLocalizacao] = useState({});
  const [imitado, setImitado] = useState({});
  const [melhorar, setMelhorar] = useState({});
  const [parceiro, setParceiro] = useState({});
  const [insumos, setInsumos] = useState({});
  const [beneficios, setBeneficios] = useState({});
  const [fornecer, setFornecer] = useState({});
  const [risco, setRisco] = useState({});
  const [verticalizar, setVerticalizar] = useState({});
  const [nota, setNota] = useState({});
  const [perfil1, setPerfil1] = useState({});
  const [perfil2, setPerfil2] = useState({});

  //interação
  const [descricao, setDescricao] = useState({});
  const [analisePreco, setAnalisePreco] = useState({});
  const [analiseQuantidade, setAnaliseQuantidade] = useState({});
  const [analiseCusto, setAnaliseCusto] = useState({});
  const [analiseDiferencial, setAnaliseDiferencial] = useState({});
  const [analisePreDif, setAnalisePreDif] = useState({});
  const [mvpProduto, setMvpProduto] = useState({});
  const [mvpIndicado, setMvpIndicado] = useState({});
  const [mvpOrientacoes, setMvpOrientacoes] = useState({});
  const [mvpResultado, setMvpResultado] = useState({});
  const [formacaoDescricao, setFormacaoDescricao] = useState({});
  const [formacaoCusto, setFormacaoCusto] = useState({});
  const [formacaoTaxa, setFormacaoTaxa] = useState({});
  const [formacaoImpostos, setFormacaoImpostos] = useState({});
  const [formacaoMargem, setFormacaoMargem] = useState({});
  const [formacaoPreco, setFormacaoPreco] = useState({});
  const [canaisCanal, setCanaisCanal] = useState({});
  const [canaisObjetivo, setCanaisObjetivo] = useState({});
  const [canaisMetrica, setCanaisMetrica] = useState({});
  const [inteQuatroP, setInteQuatroP] = useState({});

  //intuição
  const handleIntuTextosChange = (novosDadosIntuTextos) => {
    setIntuTextos(novosDadosIntuTextos);
  };

  const handleIntuIntegradorChange = (novosDadosIntuIntegrador) => {
    setIntuIntegrador(novosDadosIntuIntegrador);
  };

  const handleIntuMercadologicoChange = (novosDadosIntuMercadologico) => {
    setIntuMercadologico(novosDadosIntuMercadologico);
  };

  const handleIntuEmocionalChange = (novosDadosIntuEmocional) => {
    setIntuEmocional(novosDadosIntuEmocional);
  };

  const handleIntuResilienteChange = (novosDadosIntuResiliente) => {
    setIntuResiliente(novosDadosIntuResiliente);
  };

  const handleIntuTecnicoChange = (novosDadosIntuTecnico) => {
    setIntuTecnico(novosDadosIntuTecnico);
  };

  const handleSintesePotencialidadesChange = (
    novosDadosSintesePotencialidades
  ) => {
    setSintesePotencialidades(novosDadosSintesePotencialidades);
  };

  const handleSinteseResultadosChange = (novosDadosSinteseResultados) => {
    setSinteseResultados(novosDadosSinteseResultados);
  };

  const handleIntuQuatroPChange = (novosDadosIntuQuatroP) => {
    setIntuQuatroP(novosDadosIntuQuatroP);
  };

  //observação3
  const handleResultadoEsparadoPChange = (novosDadosResultadoEsparadoP) => {
    setResultadoEsparadoP(novosDadosResultadoEsparadoP);
  };

  const handleOrientacaoUsoPChange = (novosDadosOrientacaoUsoP) => {
    setOrientacaoUsoP(novosDadosOrientacaoUsoP);
  };

  const handleFerramentasObser3PChange = (novosDadosFerramentasObser3P) => {
    setFerramentasObser3P(novosDadosFerramentasObser3P);
  };

  const handleIndicadoParaPChange = (novosDadosIndicadoParaP) => {
    setIndicadoParaP(novosDadosIndicadoParaP);
  };

  const handleResultadoEsparadoChange = (novosDadosResultadoEsparado) => {
    setResultadoEsparado(novosDadosResultadoEsparado);
  };

  const handleOrientacaoUsoChange = (novosDadosOrientacaoUso) => {
    setOrientacaoUso(novosDadosOrientacaoUso);
  };

  const handleFerramentasObser3Change = (novosDadosFerramentasObser3) => {
    setFerramentasObser3(novosDadosFerramentasObser3);
  };

  const handleIndicadoParaChange = (novosDadosIndicadoPara) => {
    setIndicadoPara(novosDadosIndicadoPara);
  };

  //observação2
  const handleResultadoChange = (novosDadosResultado) => {
    setResultado(novosDadosResultado);
  };

  const handleOrientacaoChange = (novosDadosOrientacao) => {
    setOrientacao(novosDadosOrientacao);
  };

  const handleIndicadoChange = (novosDadosIndicado) => {
    setIndicado(novosDadosIndicado);
  };

  const handleOportunidadesChange = (novosDadosOportunidades) => {
    setOportunidades(novosDadosOportunidades);
  };

  const handleRequisitosChange = (novosDadosRequisitos) => {
    setRequisitos(novosDadosRequisitos);
  };

  const handleFerramentasChange = (novosDadosFerramentas) => {
    setFerramentas(novosDadosFerramentas);
  };

  const handleAproximadosChange = (novosDadosAproximados) => {
    setAproximados(novosDadosAproximados);
  };

  const handlePsObserChange = (novosDadosPsObser) => {
    setPsObser(novosDadosPsObser);
  };

  //observação1
  const handlePerfil2Change = (novosDadosPerfil2) => {
    setPerfil2(novosDadosPerfil2);
  };

  const handlePerfil1Change = (novosDadosPerfil1) => {
    setPerfil1(novosDadosPerfil1);
  };

  const handleNotaChange = (novosDadosNota) => {
    setNota(novosDadosNota);
  };

  const handleVerticalizarChange = (novosDadosVerticalizar) => {
    setVerticalizar(novosDadosVerticalizar);
  };

  const handleRiscoChange = (novosDadosRisco) => {
    setRisco(novosDadosRisco);
  };

  const handleFornecerChange = (novosDadosFornecer) => {
    setFornecer(novosDadosFornecer);
  };

  const handleBeneficiosChange = (novosDadosBeneficios) => {
    setBeneficios(novosDadosBeneficios);
  };

  const handleIsumosChange = (novosDadosInsumos) => {
    setInsumos(novosDadosInsumos);
  };

  const handleParceiroChange = (novosDadosParceiro) => {
    setParceiro(novosDadosParceiro);
  };

  const handleIMelhorarChange = (novosDadosMelhorar) => {
    setMelhorar(novosDadosMelhorar);
  };

  const handleImitadoChange = (novosDadosImitado) => {
    setImitado(novosDadosImitado);
  };

  const handleLocalizacaoChange = (novosDadosLocalizacao) => {
    setLocalizacao(novosDadosLocalizacao);
  };

  const handleConcorrenciaChange = (novosDadosConcorrencia) => {
    setConcorrencia(novosDadosConcorrencia);
  };

  const handlePorteChange = (novosDadosPorte) => {
    setPorte(novosDadosPorte);
  };

  const handleDiferencaChange = (novosDadosDiferenca) => {
    setDiferenca(novosDadosDiferenca);
  };

  const handleEmpresaChange = (novosDadosEmpresa) => {
    setEmpresa(novosDadosEmpresa);
  };
  //Interação
  const handleDescricaoChange = (novosDadosDescricao) => {
    setDescricao(novosDadosDescricao);
  };
  const handleAnalisePrecoChange = (novosDadosAnalisePreco) => {
    setAnalisePreco(novosDadosAnalisePreco);
  };
  const handleAnaliseQuantidadeChange = (novosDadosAnaliseQuantidade) => {
    setAnaliseQuantidade(novosDadosAnaliseQuantidade);
  };
  const handleAnaliseCustoChange = (novosDadosAnaliseCusto) => {
    setAnaliseCusto(novosDadosAnaliseCusto);
  };
  const handleAnaliseDiferencialChange = (novosDadosAnaliseDiferencial) => {
    setAnaliseDiferencial(novosDadosAnaliseDiferencial);
  };
  const handleAnalisePreDifChange = (novosDadosAnalisePreDif) => {
    setAnalisePreDif(novosDadosAnalisePreDif);
  };
  const handleMvpProdutoChange = (novosDadosMvpProduto) => {
    setMvpProduto(novosDadosMvpProduto);
  };
  const handleMvpIndicadoChange = (novosDadosMvpIndicado) => {
    setMvpIndicado(novosDadosMvpIndicado);
  };
  const handleMvpOrientacoesChange = (novosDadosMvpOrientacoes) => {
    setMvpOrientacoes(novosDadosMvpOrientacoes);
  };
  const handleMvpResultadoChange = (novosDadosMvpResultado) => {
    setMvpResultado(novosDadosMvpResultado);
  };
  const handleFormacaoDescricaoChange = (novosDadosFormacaoDescricao) => {
    setFormacaoDescricao(novosDadosFormacaoDescricao);
  };
  const handleFormacaoCustoChange = (novosDadosFormacaoCusto) => {
    setFormacaoCusto(novosDadosFormacaoCusto);
  };
  const handleFormacaoTaxaChange = (novosDadosFormacaoTaxa) => {
    setFormacaoTaxa(novosDadosFormacaoTaxa);
  };
  const handleFormacaoImpostosChange = (novosDadosFormacaoImpostos) => {
    setFormacaoImpostos(novosDadosFormacaoImpostos);
  };
  const handleFormacaoMargemChange = (novosDadosFormacaoMargem) => {
    setFormacaoMargem(novosDadosFormacaoMargem);
  };
  const handleFormacaoPrecoChange = (novosDadosFormacaoPreco) => {
    setFormacaoPreco(novosDadosFormacaoPreco);
  };
  const handleCanaisCanalChange = (novosDadosCanaisCanal) => {
    setCanaisCanal(novosDadosCanaisCanal);
  };
  const handleCanaisObjetivoChange = (novosDadosCanaisObjetivo) => {
    setCanaisObjetivo(novosDadosCanaisObjetivo);
  };
  const handleCanaisMetricaChange = (novosDadosCanaisMetrica) => {
    setCanaisMetrica(novosDadosCanaisMetrica);
  };
  const handleInteQuatroPChange = (novosDadosInteQuatroP) => {
    setInteQuatroP(novosDadosInteQuatroP);
  };

  /*Chamadas para o form de Intuição*/
  function abrirFormIntuicao(e) {
    e.preventDefault();

    let modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");
    document.body.appendChild(modalOverlay);

    let modal = document.querySelector(".form");
    modal.style.display = "block";

    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "none";
  }

  /*Chamadas para o form de Interção*/
  function abrirFormInteracao(e) {
    e.preventDefault();

    let modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");
    document.body.appendChild(modalOverlay);

    let modal = document.querySelector(".form_interacao");
    modal.style.display = "block";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "none";
  }

  function abrirFromObservação(e) {
    e.preventDefault();

    let modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");
    document.body.appendChild(modalOverlay);

    let modal = document.querySelector(".benchmarking");

    modal.style.display = "block";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "none";
  }

  return (
    <div className="body">
      <div className="navbar">
        <div className="logo">
          <Link to="/2023.1-CanvLight-Canvas-Inteligente">
            <img src={logo} alt="Logo" className="logo_navbar" />
          </Link>
        </div>
        <Link to="/2023.1-CanvLight-Canvas-Inteligente">
          <p className="name_navbar">CanvLight</p>
        </Link>

        <nav className="desktop">
          <ul>
            <Link to="/tutorial">
              <li>Como usar?</li>
            </Link>
            <Link to="/canvas">
              <li>Gerar canvas</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="rectangle">
          <div className="dot"></div>
          <div className="dot2"></div>
          <div className="dot3"></div>
          <button className="button1" onClick={(e) => abrirFormIntuicao(e)}>
            Intuição
          </button>
          <button className="button2" onClick={(e) => abrirFromObservação(e)}>
            Observação
          </button>
          <button className="button3" onClick={(e) => abrirFormInteracao(e)}>
            Interação
          </button>
        </div>
      </div>
      <Intuicao
        onIntuTextosChange={handleIntuTextosChange}
        onIntuIntegradorChange={handleIntuIntegradorChange}
        onIntuMercadologicoChange={handleIntuMercadologicoChange}
        onIntuEmocionalChange={handleIntuEmocionalChange}
        onIntuResilienteChange={handleIntuResilienteChange}
        onIntuTecnicoChange={handleIntuTecnicoChange}
        onSintesePotencialidadesChange={handleSintesePotencialidadesChange}
        onSinteseResultadosChange={handleSinteseResultadosChange}
        onIntuQuatroPChange={handleIntuQuatroPChange}
      />

      <Observacao1
        onEmpresaChange={handleEmpresaChange}
        onDiferencaChange={handleDiferencaChange}
        onPorteChange={handlePorteChange}
        onConcorrenciaChange={handleConcorrenciaChange}
        onLocalizacaoChange={handleLocalizacaoChange}
        onImitadoChange={handleImitadoChange}
        onMelhorarChange={handleIMelhorarChange}
        onParceiroChange={handleParceiroChange}
        onInsumosChange={handleIsumosChange}
        onBeneficiosChange={handleBeneficiosChange}
        onFornecerChange={handleFornecerChange}
        onRiscoChange={handleRiscoChange}
        onVerticalizarChange={handleVerticalizarChange}
        onNotaChange={handleNotaChange}
        onPerfil1Change={handlePerfil1Change}
        onPerfil2Change={handlePerfil2Change}
      />

      <Observacao2
        onPsObserChange={handlePsObserChange}
        onAproximadosChange={handleAproximadosChange}
        onFerramentasChange={handleFerramentasChange}
        onRequisitosChange={handleRequisitosChange}
        onOportunidadesChange={handleOportunidadesChange}
        onIndicadoChange={handleIndicadoChange}
        onOrientacaoChange={handleOrientacaoChange}
        onResultadoChange={handleResultadoChange}
      />

      <Observacao3
        onFerramentasObser3Change={handleFerramentasObser3Change}
        onIndicadoParaChange={handleIndicadoParaChange}
        onOrientacaoUsoChange={handleOrientacaoUsoChange}
        onResultadoEsparadoChange={handleResultadoEsparadoChange}
        onFerramentasObser3PChange={handleFerramentasObser3PChange}
        onIndicadoParaPChange={handleIndicadoParaPChange}
        onOrientacaoUsoPChange={handleOrientacaoUsoPChange}
        onResultadoEsparadoPChange={handleResultadoEsparadoPChange}
      />

      <Interacao
        onDescricaoChange={handleDescricaoChange}
        onAnalisePrecoChange={handleAnalisePrecoChange}
        onAnaliseQuantidadeChange={handleAnaliseQuantidadeChange}
        onAnaliseCustoChange={handleAnaliseCustoChange}
        onAnaliseDiferencialChange={handleAnaliseDiferencialChange}
        onAnalisePreDifChange={handleAnalisePreDifChange}
        onMvpProdutoChange={handleMvpProdutoChange}
        onMvpIndicadoChange={handleMvpIndicadoChange}
        onMvpOrientacoesChange={handleMvpOrientacoesChange}
        onMvpResultadoChange={handleMvpResultadoChange}
        onFormacaoDescricaoChange={handleFormacaoDescricaoChange}
        onFormacaoCustoChange={handleFormacaoCustoChange}
        onFormacaoTaxaChange={handleFormacaoTaxaChange}
        onFormacaoImpostosChange={handleFormacaoImpostosChange}
        onFormacaoMargemChange={handleFormacaoMargemChange}
        onFormacaoPrecoChange={handleFormacaoPrecoChange}
        onCanaisCanalChange={handleCanaisCanalChange}
        onCanaisObjetivoChange={handleCanaisObjetivoChange}
        onCanaisMetricaChange={handleCanaisMetricaChange}
        onInteQuatroPChange={handleInteQuatroPChange}
      />

      <GeradorPDF
        //intuição
        intuTextos={intuTextos}
        intuIntegrador={intuIntegrador}
        intuMercadologico={intuMercadologico}
        intuEmocional={intuEmocional}
        intuResiliente={intuResiliente}
        intuTecnico={intuTecnico}
        sintesePotencialidades={sintesePotencialidades}
        sinteseResultados={sinteseResultados}
        intuQuatroP={intuQuatroP}
        //observação1
        empresa={empresa}
        diferenca={diferenca}
        porte={porte}
        concorrencia={concorrencia}
        localizacao={localizacao}
        imitado={imitado}
        melhorar={melhorar}
        parceiro={parceiro}
        insumos={insumos}
        beneficios={beneficios}
        fornecer={fornecer}
        risco={risco}
        verticalizar={verticalizar}
        nota={nota}
        perfil1={perfil1}
        perfil2={perfil2}
        //observação2
        psObser={psObser}
        aproximados={aproximados}
        ferramentas={ferramentas}
        requisitos={requisitos}
        opotunidades={opotunidades}
        indicado={indicado}
        orientacao={orientacao}
        resultado={resultado}
        //observação3
        ferramentasObser3={ferramentasObser3}
        indicadoPara={indicadoPara}
        orientacaoUso={orientacaoUso}
        resultadoEsperado={resultadoEsperado}
        ferramentasObser3P={ferramentasObser3P}
        indicadoParaP={indicadoParaP}
        orientacaoUsoP={orientacaoUsoP}
        resultadoEsperadoP={resultadoEsperadoP}
        //Interação
        descricao={descricao}
        analisePreco={analisePreco}
        analiseQuantidade={analiseQuantidade}
        analiseCusto={analiseCusto}
        analiseDiferencial={analiseDiferencial}
        analisePreDif={analisePreDif}
        mvpProduto={mvpProduto}
        mvpIndicado={mvpIndicado}
        mvpOrientacoes={mvpOrientacoes}
        mvpResultado={mvpResultado}
        formacaoDescricao={formacaoDescricao}
        formacaoCusto={formacaoCusto}
        formacaoTaxa={formacaoTaxa}
        formacaoImpostos={formacaoImpostos}
        formacaoMargem={formacaoMargem}
        formacaoPreco={formacaoPreco}
        canaisCanal={canaisCanal}
        canaisObjetivo={canaisObjetivo}
        canaisMetrica={canaisMetrica}
        inteQuatroP={inteQuatroP}
      />
      <Link to="/2023.1-CanvLight-Canvas-Inteligente">
        <img src={arrowIcon} alt="Seta" className="arrow-button" />
      </Link>
      <div>
        <img
          src={checkIcon}
          alt="Confirma"
          className="confirma"
          onClick={gerarPDF}
        />
      </div>
    </div>
  );
}

export default Canvas;
