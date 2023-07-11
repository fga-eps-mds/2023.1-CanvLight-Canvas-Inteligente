import rightArrow from "../../images/seta-direita.png";
import zap from "../../images/zap.png";
import insta from "../../images/insta.png";
import twitter from "../../images/twitter.png";
import face from "../../images/face.png";
import linkedin from "../../images/linkedin.png";
import sad from "../../images/sad.png";
import normal from "../../images/normal.png";
import happy from "../../images/happy.png";
import checkImg from "../../images/check.png";
import "./Interacao.css";

import React, { useState } from "react";
/* import GeradorPDF from "../GeradorPDF/GeradorPDF"; */

function Interacao({
  onDescricaoChange,
  onAnalisePrecoChange,
  onAnaliseQuantidadeChange,
  onAnaliseCustoChange,
  onAnaliseDiferencialChange,
  onAnalisePreDifChange,
  onMvpProdutoChange,
  onMvpIndicadoChange,
  onMvpOrientacoesChange,
  onMvpResultadoChange,
  onFormacaoDescricaoChange,
  onFormacaoCustoChange,
  onFormacaoTaxaChange,
  onFormacaoImpostosChange,
  onFormacaoMargemChange,
  onFormacaoPrecoChange,
  onCanaisCanalChange,
  onCanaisObjetivoChange,
  onCanaisMetricaChange,
  onInteQuatroPChange,
}) {
  const [primeiraLinhaDescricao, setPrimeiraLinhaDescricao] = useState("");
  const [segundaLinhaDescricao, setSegundaLinhaDescricao] = useState("");
  const [terceiraLinhaDescricao, setTerceiraLinhaDescricao] = useState("");

  const handleInputChangeDescricao = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaDescricao") {
      setPrimeiraLinhaDescricao(value);
    } else if (name === "segundaLinhaDescricao") {
      setSegundaLinhaDescricao(value);
    } else if (name === "terceiraLinhaDescricao") {
      setTerceiraLinhaDescricao(value);
    }

    const novosDadosDescricao = {
      primeiraLinhaDescricao:
        name === "primeiraLinhaDescricao" ? value : primeiraLinhaDescricao,
      segundaLinhaDescricao:
        name === "segundaLinhaDescricao" ? value : segundaLinhaDescricao,
      terceiraLinhaDescricao:
        name === "terceiraLinhaDescricao" ? value : terceiraLinhaDescricao,
    };

    onDescricaoChange(novosDadosDescricao);
  };

  const [primeiraLinhaAnalisePreco, setPrimeiraLinhaAnalisePreco] =
    useState("");
  const [segundaLinhaAnalisePreco, setSegundaLinhaAnalisePreco] = useState("");
  const [terceiraLinhaAnalisePreco, setTerceiraLinhaAnalisePreco] =
    useState("");

  const handleInputChangeAnalisePreco = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaAnalisePreco") {
      setPrimeiraLinhaAnalisePreco(value);
    } else if (name === "segundaLinhaAnalisePreco") {
      setSegundaLinhaAnalisePreco(value);
    } else if (name === "terceiraLinhaAnalisePreco") {
      setTerceiraLinhaAnalisePreco(value);
    }

    const novosDadosAnalisePreco = {
      primeiraLinhaAnalisePreco:
        name === "primeiraLinhaAnalisePreco"
          ? value
          : primeiraLinhaAnalisePreco,
      segundaLinhaAnalisePreco:
        name === "segundaLinhaAnalisePreco" ? value : segundaLinhaAnalisePreco,
      terceiraLinhaAnalisePreco:
        name === "terceiraLinhaAnalisePreco"
          ? value
          : terceiraLinhaAnalisePreco,
    };

    onAnalisePrecoChange(novosDadosAnalisePreco);
  };

  const [primeiraLinhaAnaliseQuantidade, setPrimeiraLinhaAnaliseQuantidade] =
    useState("");
  const [segundaLinhaAnaliseQuantidade, setSegundaLinhaAnaliseQuantidade] =
    useState("");
  const [terceiraLinhaAnaliseQuantidade, setTerceiraLinhaAnaliseQuantidade] =
    useState("");

  const handleInputChangeAnaliseQuantidade = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaAnaliseQuantidade") {
      setPrimeiraLinhaAnaliseQuantidade(value);
    } else if (name === "segundaLinhaAnaliseQuantidade") {
      setSegundaLinhaAnaliseQuantidade(value);
    } else if (name === "terceiraLinhaAnaliseQuantidade") {
      setTerceiraLinhaAnaliseQuantidade(value);
    }

    const novosDadosAnaliseQuantidade = {
      primeiraLinhaAnaliseQuantidade:
        name === "primeiraLinhaAnaliseQuantidade"
          ? value
          : primeiraLinhaAnaliseQuantidade,
      segundaLinhaAnaliseQuantidade:
        name === "segundaLinhaAnaliseQuantidade"
          ? value
          : segundaLinhaAnaliseQuantidade,
      terceiraLinhaAnaliseQuantidade:
        name === "terceiraLinhaAnaliseQuantidade"
          ? value
          : terceiraLinhaAnaliseQuantidade,
    };

    onAnaliseQuantidadeChange(novosDadosAnaliseQuantidade);
  };

  const [primeiraLinhaAnaliseCusto, setPrimeiraLinhaAnaliseCusto] =
    useState("");
  const [segundaLinhaAnaliseCusto, setSegundaLinhaAnaliseCusto] = useState("");
  const [terceiraLinhaAnaliseCusto, setTerceiraLinhaAnaliseCusto] =
    useState("");
  const [quartaLinhaAnaliseCusto, setQuartaLinhaAnaliseCusto] = useState("");

  const handleInputChangeAnaliseCusto = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaAnaliseCusto") {
      setPrimeiraLinhaAnaliseCusto(value);
    } else if (name === "segundaLinhaAnaliseCusto") {
      setSegundaLinhaAnaliseCusto(value);
    } else if (name === "terceiraLinhaAnaliseCusto") {
      setTerceiraLinhaAnaliseCusto(value);
    } else if (name === "quartaLinhaAnaliseCusto") {
      setQuartaLinhaAnaliseCusto(value);
    }

    const novosDadosAnaliseCusto = {
      primeiraLinhaAnaliseCusto:
        name === "primeiraLinhaAnaliseCusto"
          ? value
          : primeiraLinhaAnaliseCusto,
      segundaLinhaAnaliseCusto:
        name === "segundaLinhaAnaliseCusto" ? value : segundaLinhaAnaliseCusto,
      terceiraLinhaAnaliseCusto:
        name === "terceiraLinhaAnaliseCusto"
          ? value
          : terceiraLinhaAnaliseCusto,
      quartaLinhaAnaliseCusto:
        name === "quartaLinhaAnaliseCusto" ? value : quartaLinhaAnaliseCusto,
    };

    onAnaliseCustoChange(novosDadosAnaliseCusto);
  };

  const [primeiraLinhaAnaliseDiferencial, setPrimeiraLinhaAnaliseDiferencial] =
    useState("");
  const [segundaLinhaAnaliseDiferencial, setSegundaLinhaAnaliseDiferencial] =
    useState("");
  const [terceiraLinhaAnaliseDiferencial, setTerceiraLinhaAnaliseDiferencial] =
    useState("");
  const [quartaLinhaAnaliseDiferencial, setQuartaLinhaAnaliseDiferencial] =
    useState("");
  const [quintaLinhaAnaliseDiferencial, setQuintaLinhaAnaliseDiferencial] =
    useState("");

  const handleInputChangeAnaliseDiferencial = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaAnaliseDiferencial") {
      setPrimeiraLinhaAnaliseDiferencial(value);
    } else if (name === "segundaLinhaAnaliseDiferencial") {
      setSegundaLinhaAnaliseDiferencial(value);
    } else if (name === "terceiraLinhaAnaliseDiferencial") {
      setTerceiraLinhaAnaliseDiferencial(value);
    } else if (name === "quartaLinhaAnaliseDiferencial") {
      setQuartaLinhaAnaliseDiferencial(value);
    } else if (name === "quintaLinhaAnaliseDiferencial") {
      setQuintaLinhaAnaliseDiferencial(value);
    }

    const novosDadosAnaliseDiferencial = {
      primeiraLinhaAnaliseDiferencial:
        name === "primeiraLinhaAnaliseDiferencial"
          ? value
          : primeiraLinhaAnaliseDiferencial,
      segundaLinhaAnaliseDiferencial:
        name === "segundaLinhaAnaliseDiferencial"
          ? value
          : segundaLinhaAnaliseDiferencial,
      terceiraLinhaAnaliseDiferencial:
        name === "terceiraLinhaAnaliseDiferencial"
          ? value
          : terceiraLinhaAnaliseDiferencial,
      quartaLinhaAnaliseDiferencial:
        name === "quartaLinhaAnaliseDiferencial"
          ? value
          : quartaLinhaAnaliseDiferencial,
      quintaLinhaAnaliseDiferencial:
        name === "quintaLinhaAnaliseDiferencial"
          ? value
          : quintaLinhaAnaliseDiferencial,
    };
    onAnaliseDiferencialChange(novosDadosAnaliseDiferencial);
  };

  const [primeiraLinhaAnalisePreDif, setPrimeiraLinhaAnalisePreDif] =
    useState("");
  const [segundaLinhaAnalisePreDif, setSegundaLinhaAnalisePreDif] =
    useState("");
  const [terceiraLinhaAnalisePreDif, setTerceiraLinhaAnalisePreDif] =
    useState("");
  const [quartaLinhaAnalisePreDif, setQuartaLinhaAnalisePreDif] = useState("");
  const [quintaLinhaAnalisePreDif, setQuintaLinhaAnalisePreDif] = useState("");

  const handleInputChangeAnalisePreDif = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaAnalisePreDif") {
      setPrimeiraLinhaAnalisePreDif(value);
    } else if (name === "segundaLinhaAnalisePreDif") {
      setSegundaLinhaAnalisePreDif(value);
    } else if (name === "terceiraLinhaAnalisePreDif") {
      setTerceiraLinhaAnalisePreDif(value);
    } else if (name === "quartaLinhaAnalisePreDif") {
      setQuartaLinhaAnalisePreDif(value);
    } else if (name === "quintaLinhaAnalisePreDif") {
      setQuintaLinhaAnalisePreDif(value);
    }

    const novosDadosAnalisePreDif = {
      primeiraLinhaAnalisePreDif:
        name === "primeiraLinhaAnalisePreDif"
          ? value
          : primeiraLinhaAnalisePreDif,
      segundaLinhaAnalisePreDif:
        name === "segundaLinhaAnalisePreDif"
          ? value
          : segundaLinhaAnalisePreDif,
      terceiraLinhaAnalisePreDif:
        name === "terceiraLinhaAnalisePreDif"
          ? value
          : terceiraLinhaAnalisePreDif,
      quartaLinhaAnalisePreDif:
        name === "quartaLinhaAnalisePreDif" ? value : quartaLinhaAnalisePreDif,
      quintaLinhaAnalisePreDif:
        name === "quintaLinhaAnalisePreDif" ? value : quintaLinhaAnalisePreDif,
    };
    onAnalisePreDifChange(novosDadosAnalisePreDif);
  };

  const [primeiraLinhaMvpProduto, setPrimeiraLinhaMvpProduto] = useState("");
  const [segundaLinhaMvpProduto, setSegundaLinhaMvpProduto] = useState("");
  const [terceiraLinhaMvpProduto, setTerceiraLinhaMvpProduto] = useState("");
  const [quartaLinhaMvpProduto, setQuartaLinhaMvpProduto] = useState("");

  const handleInputChangeMvpProduto = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaMvpProduto") {
      setPrimeiraLinhaMvpProduto(value);
    } else if (name === "segundaLinhaMvpProduto") {
      setSegundaLinhaMvpProduto(value);
    } else if (name === "terceiraLinhaMvpProduto") {
      setTerceiraLinhaMvpProduto(value);
    } else if (name === "quartaLinhaMvpProduto") {
      setQuartaLinhaMvpProduto(value);
    }

    const novosDadosMvpProduto = {
      primeiraLinhaMvpProduto:
        name === "primeiraLinhaMvpProduto" ? value : primeiraLinhaMvpProduto,
      segundaLinhaMvpProduto:
        name === "segundaLinhaMvpProduto" ? value : segundaLinhaMvpProduto,
      terceiraLinhaMvpProduto:
        name === "terceiraLinhaMvpProduto" ? value : terceiraLinhaMvpProduto,
      quartaLinhaMvpProduto:
        name === "quartaLinhaMvpProduto" ? value : quartaLinhaMvpProduto,
    };
    onMvpProdutoChange(novosDadosMvpProduto);
  };

  const [primeiraLinhaMvpIndicado, setPrimeiraLinhaMvpIndicado] = useState("");
  const [segundaLinhaMvpIndicado, setSegundaLinhaMvpIndicado] = useState("");
  const [terceiraLinhaMvpIndicado, setTerceiraLinhaMvpIndicado] = useState("");
  const [quartaLinhaMvpIndicado, setQuartaLinhaMvpIndicado] = useState("");

  const handleInputChangeMvpIndicado = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaMvpIndicado") {
      setPrimeiraLinhaMvpIndicado(value);
    } else if (name === "segundaLinhaMvpIndicado") {
      setSegundaLinhaMvpIndicado(value);
    } else if (name === "terceiraLinhaMvpIndicado") {
      setTerceiraLinhaMvpIndicado(value);
    } else if (name === "quartaLinhaMvpIndicado") {
      setQuartaLinhaMvpIndicado(value);
    }

    const novosDadosMvpIndicado = {
      primeiraLinhaMvpIndicado:
        name === "primeiraLinhaMvpIndicado" ? value : primeiraLinhaMvpIndicado,
      segundaLinhaMvpIndicado:
        name === "segundaLinhaMvpIndicado" ? value : segundaLinhaMvpIndicado,
      terceiraLinhaMvpIndicado:
        name === "terceiraLinhaMvpIndicado" ? value : terceiraLinhaMvpIndicado,
      quartaLinhaMvpIndicado:
        name === "quartaLinhaMvpIndicado" ? value : quartaLinhaMvpIndicado,
    };
    onMvpIndicadoChange(novosDadosMvpIndicado);
  };

  const [primeiraLinhaMvpOrientacoes, setPrimeiraLinhaMvpOrientacoes] =
    useState("");
  const [segundaLinhaMvpOrientacoes, setSegundaLinhaMvpOrientacoes] =
    useState("");
  const [terceiraLinhaMvpOrientacoes, setTerceiraLinhaMvpOrientacoes] =
    useState("");
  const [quartaLinhaMvpOrientacoes, setQuartaLinhaMvpOrientacoes] =
    useState("");

  const handleInputChangeMvpOrientacoes = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaMvpOrientacoes") {
      setPrimeiraLinhaMvpOrientacoes(value);
    } else if (name === "segundaLinhaMvpOrientacoes") {
      setSegundaLinhaMvpOrientacoes(value);
    } else if (name === "terceiraLinhaMvpOrientacoes") {
      setTerceiraLinhaMvpOrientacoes(value);
    } else if (name === "quartaLinhaMvpOrientacoes") {
      setQuartaLinhaMvpOrientacoes(value);
    }

    const novosDadosMvpOrientacoes = {
      primeiraLinhaMvpOrientacoes:
        name === "primeiraLinhaMvpOrientacoes"
          ? value
          : primeiraLinhaMvpOrientacoes,
      segundaLinhaMvpOrientacoes:
        name === "segundaLinhaMvpOrientacoes"
          ? value
          : segundaLinhaMvpOrientacoes,
      terceiraLinhaMvpOrientacoes:
        name === "terceiraLinhaMvpOrientacoes"
          ? value
          : terceiraLinhaMvpOrientacoes,
      quartaLinhaMvpOrientacoes:
        name === "quartaLinhaMvpOrientacoes"
          ? value
          : quartaLinhaMvpOrientacoes,
    };
    onMvpOrientacoesChange(novosDadosMvpOrientacoes);
  };

  const [primeiraLinhaMvpResultado, setPrimeiraLinhaMvpResultado] =
    useState("");
  const [segundaLinhaMvpResultado, setSegundaLinhaMvpResultado] = useState("");
  const [terceiraLinhaMvpResultado, setTerceiraLinhaMvpResultado] =
    useState("");
  const [quartaLinhaMvpResultado, setQuartaLinhaMvpResultado] = useState("");

  const handleInputChangeMvpResultado = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaMvpResultado") {
      setPrimeiraLinhaMvpResultado(value);
    } else if (name === "segundaLinhaMvpResultado") {
      setSegundaLinhaMvpResultado(value);
    } else if (name === "terceiraLinhaMvpResultado") {
      setTerceiraLinhaMvpResultado(value);
    } else if (name === "quartaLinhaMvpResultado") {
      setQuartaLinhaMvpResultado(value);
    }

    const novosDadosMvpResultado = {
      primeiraLinhaMvpResultado:
        name === "primeiraLinhaMvpResultado"
          ? value
          : primeiraLinhaMvpResultado,
      segundaLinhaMvpResultado:
        name === "segundaLinhaMvpResultado" ? value : segundaLinhaMvpResultado,
      terceiraLinhaMvpResultado:
        name === "terceiraLinhaMvpResultado"
          ? value
          : terceiraLinhaMvpResultado,
      quartaLinhaMvpResultado:
        name === "quartaLinhaMvpResultado" ? value : quartaLinhaMvpResultado,
    };
    onMvpResultadoChange(novosDadosMvpResultado);
  };

  const [primeiraLinhaFormacaoDescricao, setPrimeiraLinhaFormacaoDescricao] =
    useState("");
  const [segundaLinhaFormacaoDescricao, setSegundaLinhaFormacaoDescricao] =
    useState("");
  const [terceiraLinhaFormacaoDescricao, setTerceiraLinhaFormacaoDescricao] =
    useState("");
  const [quartaLinhaFormacaoDescricao, setQuartaLinhaFormacaoDescricao] =
    useState("");

  const handleInputChangeFormacaoDescricao = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaFormacaoDescricao") {
      setPrimeiraLinhaFormacaoDescricao(value);
    } else if (name === "segundaLinhaFormacaoDescricao") {
      setSegundaLinhaFormacaoDescricao(value);
    } else if (name === "terceiraLinhaFormacaoDescricao") {
      setTerceiraLinhaFormacaoDescricao(value);
    } else if (name === "quartaLinhaFormacaoDescricao") {
      setQuartaLinhaFormacaoDescricao(value);
    }

    const novosDadosFormacaoDescricao = {
      primeiraLinhaFormacaoDescricao:
        name === "primeiraLinhaFormacaoDescricao"
          ? value
          : primeiraLinhaFormacaoDescricao,
      segundaLinhaFormacaoDescricao:
        name === "segundaLinhaFormacaoDescricao"
          ? value
          : segundaLinhaFormacaoDescricao,
      terceiraLinhaFormacaoDescricao:
        name === "terceiraLinhaFormacaoDescricao"
          ? value
          : terceiraLinhaFormacaoDescricao,
      quartaLinhaFormacaoDescricao:
        name === "quartaLinhaFormacaoDescricao"
          ? value
          : quartaLinhaFormacaoDescricao,
    };
    onFormacaoDescricaoChange(novosDadosFormacaoDescricao);
  };

  const [primeiraLinhaFormacaoCusto, setPrimeiraLinhaFormacaoCusto] =
    useState("");
  const [segundaLinhaFormacaoCusto, setSegundaLinhaFormacaoCusto] =
    useState("");
  const [terceiraLinhaFormacaoCusto, setTerceiraLinhaFormacaoCusto] =
    useState("");
  const [quartaLinhaFormacaoCusto, setQuartaLinhaFormacaoCusto] = useState("");

  const handleInputChangeFormacaoCusto = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaFormacaoCusto") {
      setPrimeiraLinhaFormacaoCusto(value);
    } else if (name === "segundaLinhaFormacaoCusto") {
      setSegundaLinhaFormacaoCusto(value);
    } else if (name === "terceiraLinhaFormacaoCusto") {
      setTerceiraLinhaFormacaoCusto(value);
    } else if (name === "quartaLinhaFormacaoCusto") {
      setQuartaLinhaFormacaoCusto(value);
    }

    const novosDadosFormacaoCusto = {
      primeiraLinhaFormacaoCusto:
        name === "primeiraLinhaFormacaoCusto"
          ? value
          : primeiraLinhaFormacaoCusto,
      segundaLinhaFormacaoCusto:
        name === "segundaLinhaFormacaoCusto"
          ? value
          : segundaLinhaFormacaoCusto,
      terceiraLinhaFormacaoCusto:
        name === "terceiraLinhaFormacaoCusto"
          ? value
          : terceiraLinhaFormacaoCusto,
      quartaLinhaFormacaoCusto:
        name === "quartaLinhaFormacaoCusto" ? value : quartaLinhaFormacaoCusto,
    };
    onFormacaoCustoChange(novosDadosFormacaoCusto);
  };

  const [primeiraLinhaFormacaoTaxa, setPrimeiraLinhaFormacaoTaxa] =
    useState("");
  const [segundaLinhaFormacaoTaxa, setSegundaLinhaFormacaoTaxa] = useState("");
  const [terceiraLinhaFormacaoTaxa, setTerceiraLinhaFormacaoTaxa] =
    useState("");
  const [quartaLinhaFormacaoTaxa, setQuartaLinhaFormacaoTaxa] = useState("");

  const handleInputChangeFormacaoTaxa = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaFormacaoTaxa") {
      setPrimeiraLinhaFormacaoTaxa(value);
    } else if (name === "segundaLinhaFormacaoTaxa") {
      setSegundaLinhaFormacaoTaxa(value);
    } else if (name === "terceiraLinhaFormacaoTaxa") {
      setTerceiraLinhaFormacaoTaxa(value);
    } else if (name === "quartaLinhaFormacaoTaxa") {
      setQuartaLinhaFormacaoTaxa(value);
    }

    const novosDadosFormacaoTaxa = {
      primeiraLinhaFormacaoTaxa:
        name === "primeiraLinhaFormacaoTaxa"
          ? value
          : primeiraLinhaFormacaoTaxa,
      segundaLinhaFormacaoTaxa:
        name === "segundaLinhaFormacaoTaxa" ? value : segundaLinhaFormacaoTaxa,
      terceiraLinhaFormacaoTaxa:
        name === "terceiraLinhaFormacaoTaxa"
          ? value
          : terceiraLinhaFormacaoTaxa,
      quartaLinhaFormacaoTaxa:
        name === "quartaLinhaFormacaoTaxa" ? value : quartaLinhaFormacaoTaxa,
    };
    onFormacaoTaxaChange(novosDadosFormacaoTaxa);
  };

  const [primeiraLinhaFormacaoImpostos, setPrimeiraLinhaFormacaoImpostos] =
    useState("");
  const [segundaLinhaFormacaoImpostos, setSegundaLinhaFormacaoImpostos] =
    useState("");
  const [terceiraLinhaFormacaoImpostos, setTerceiraLinhaFormacaoImpostos] =
    useState("");
  const [quartaLinhaFormacaoImpostos, setQuartaLinhaFormacaoImpostos] =
    useState("");

  const handleInputChangeFormacaoImpostos = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaFormacaoImpostos") {
      setPrimeiraLinhaFormacaoImpostos(value);
    } else if (name === "segundaLinhaFormacaoImpostos") {
      setSegundaLinhaFormacaoImpostos(value);
    } else if (name === "terceiraLinhaFormacaoImpostos") {
      setTerceiraLinhaFormacaoImpostos(value);
    } else if (name === "quartaLinhaFormacaoImpostos") {
      setQuartaLinhaFormacaoImpostos(value);
    }

    const novosDadosFormacaoImpostos = {
      primeiraLinhaFormacaoImpostos:
        name === "primeiraLinhaFormacaoImpostos"
          ? value
          : primeiraLinhaFormacaoImpostos,
      segundaLinhaFormacaoImpostos:
        name === "segundaLinhaFormacaoImpostos"
          ? value
          : segundaLinhaFormacaoImpostos,
      terceiraLinhaFormacaoImpostos:
        name === "terceiraLinhaFormacaoImpostos"
          ? value
          : terceiraLinhaFormacaoImpostos,
      quartaLinhaFormacaoImpostos:
        name === "quartaLinhaFormacaoImpostos"
          ? value
          : quartaLinhaFormacaoImpostos,
    };
    onFormacaoImpostosChange(novosDadosFormacaoImpostos);
  };

  const [primeiraLinhaFormacaoMargem, setPrimeiraLinhaFormacaoMargem] =
    useState("");
  const [segundaLinhaFormacaoMargem, setSegundaLinhaFormacaoMargem] =
    useState("");
  const [terceiraLinhaFormacaoMargem, setTerceiraLinhaFormacaoMargem] =
    useState("");
  const [quartaLinhaFormacaoMargem, setQuartaLinhaFormacaoMargem] =
    useState("");

  const handleInputChangeFormacaoMargem = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaFormacaoMargem") {
      setPrimeiraLinhaFormacaoMargem(value);
    } else if (name === "segundaLinhaFormacaoMargem") {
      setSegundaLinhaFormacaoMargem(value);
    } else if (name === "terceiraLinhaFormacaoMargem") {
      setTerceiraLinhaFormacaoMargem(value);
    } else if (name === "quartaLinhaFormacaoMargem") {
      setQuartaLinhaFormacaoMargem(value);
    }

    const novosDadosFormacaoMargem = {
      primeiraLinhaFormacaoMargem:
        name === "primeiraLinhaFormacaoMargem"
          ? value
          : primeiraLinhaFormacaoMargem,
      segundaLinhaFormacaoMargem:
        name === "segundaLinhaFormacaoMargem"
          ? value
          : segundaLinhaFormacaoMargem,
      terceiraLinhaFormacaoMargem:
        name === "terceiraLinhaFormacaoMargem"
          ? value
          : terceiraLinhaFormacaoMargem,
      quartaLinhaFormacaoMargem:
        name === "quartaLinhaFormacaoMargem"
          ? value
          : quartaLinhaFormacaoMargem,
    };
    onFormacaoMargemChange(novosDadosFormacaoMargem);
  };

  const [primeiraLinhaFormacaoPreco, setPrimeiraLinhaFormacaoPreco] =
    useState("");
  const [segundaLinhaFormacaoPreco, setSegundaLinhaFormacaoPreco] =
    useState("");
  const [terceiraLinhaFormacaoPreco, setTerceiraLinhaFormacaoPreco] =
    useState("");
  const [quartaLinhaFormacaoPreco, setQuartaLinhaFormacaoPreco] = useState("");

  const handleInputChangeFormacaoPreco = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaFormacaoPreco") {
      setPrimeiraLinhaFormacaoPreco(value);
    } else if (name === "segundaLinhaFormacaoPreco") {
      setSegundaLinhaFormacaoPreco(value);
    } else if (name === "terceiraLinhaFormacaoPreco") {
      setTerceiraLinhaFormacaoPreco(value);
    } else if (name === "quartaLinhaFormacaoPreco") {
      setQuartaLinhaFormacaoPreco(value);
    }

    const novosDadosFormacaoPreco = {
      primeiraLinhaFormacaoPreco:
        name === "primeiraLinhaFormacaoPreco"
          ? value
          : primeiraLinhaFormacaoPreco,
      segundaLinhaFormacaoPreco:
        name === "segundaLinhaFormacaoPreco"
          ? value
          : segundaLinhaFormacaoPreco,
      terceiraLinhaFormacaoPreco:
        name === "terceiraLinhaFormacaoPreco"
          ? value
          : terceiraLinhaFormacaoPreco,
      quartaLinhaFormacaoPreco:
        name === "quartaLinhaFormacaoPreco" ? value : quartaLinhaFormacaoPreco,
    };
    onFormacaoPrecoChange(novosDadosFormacaoPreco);
  };

  const [primeiraLinhaCanaisCanal, setPrimeiraLinhaCanaisCanal] = useState("");
  const [segundaLinhaCanaisCanal, setSegundaLinhaCanaisCanal] = useState("");
  const [terceiraLinhaCanaisCanal, setTerceiraLinhaCanaisCanal] = useState("");
  const [quartaLinhaCanaisCanal, setQuartaLinhaCanaisCanal] = useState("");

  const handleInputChangeCanaisCanal = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaCanaisCanal") {
      setPrimeiraLinhaCanaisCanal(value);
    } else if (name === "segundaLinhaCanaisCanal") {
      setSegundaLinhaCanaisCanal(value);
    } else if (name === "terceiraLinhaCanaisCanal") {
      setTerceiraLinhaCanaisCanal(value);
    } else if (name === "quartaLinhaCanaisCanal") {
      setQuartaLinhaCanaisCanal(value);
    }

    const novosDadosCanaisCanal = {
      primeiraLinhaCanaisCanal:
        name === "primeiraLinhaCanaisCanal" ? value : primeiraLinhaCanaisCanal,
      segundaLinhaCanaisCanal:
        name === "segundaLinhaCanaisCanal" ? value : segundaLinhaCanaisCanal,
      terceiraLinhaCanaisCanal:
        name === "terceiraLinhaCanaisCanal" ? value : terceiraLinhaCanaisCanal,
      quartaLinhaCanaisCanal:
        name === "quartaLinhaCanaisCanal" ? value : quartaLinhaCanaisCanal,
    };
    onCanaisCanalChange(novosDadosCanaisCanal);
  };

  const [primeiraLinhaCanaisObjetivo, setPrimeiraLinhaCanaisObjetivo] =
    useState("");
  const [segundaLinhaCanaisObjetivo, setSegundaLinhaCanaisObjetivo] =
    useState("");
  const [terceiraLinhaCanaisObjetivo, setTerceiraLinhaCanaisObjetivo] =
    useState("");
  const [quartaLinhaCanaisObjetivo, setQuartaLinhaCanaisObjetivo] =
    useState("");

  const handleInputChangeCanaisObjetivo = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaCanaisObjetivo") {
      setPrimeiraLinhaCanaisObjetivo(value);
    } else if (name === "segundaLinhaCanaisObjetivo") {
      setSegundaLinhaCanaisObjetivo(value);
    } else if (name === "terceiraLinhaCanaisObjetivo") {
      setTerceiraLinhaCanaisObjetivo(value);
    } else if (name === "quartaLinhaCanaisObjetivo") {
      setQuartaLinhaCanaisObjetivo(value);
    }

    const novosDadosCanaisObjetivo = {
      primeiraLinhaCanaisObjetivo:
        name === "primeiraLinhaCanaisObjetivo"
          ? value
          : primeiraLinhaCanaisObjetivo,
      segundaLinhaCanaisObjetivo:
        name === "segundaLinhaCanaisObjetivo"
          ? value
          : segundaLinhaCanaisObjetivo,
      terceiraLinhaCanaisObjetivo:
        name === "terceiraLinhaCanaisObjetivo"
          ? value
          : terceiraLinhaCanaisObjetivo,
      quartaLinhaCanaisObjetivo:
        name === "quartaLinhaCanaisObjetivo"
          ? value
          : quartaLinhaCanaisObjetivo,
    };
    onCanaisObjetivoChange(novosDadosCanaisObjetivo);
  };

  const [primeiraLinhaCanaisMetrica, setPrimeiraLinhaCanaisMetrica] =
    useState("");
  const [segundaLinhaCanaisMetrica, setSegundaLinhaCanaisMetrica] =
    useState("");
  const [terceiraLinhaCanaisMetrica, setTerceiraLinhaCanaisMetrica] =
    useState("");
  const [quartaLinhaCanaisMetrica, setQuartaLinhaCanaisMetrica] = useState("");

  const handleInputChangeCanaisMetrica = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaCanaisMetrica") {
      setPrimeiraLinhaCanaisMetrica(value);
    } else if (name === "segundaLinhaCanaisMetrica") {
      setSegundaLinhaCanaisMetrica(value);
    } else if (name === "terceiraLinhaCanaisMetrica") {
      setTerceiraLinhaCanaisMetrica(value);
    } else if (name === "quartaLinhaCanaisMetrica") {
      setQuartaLinhaCanaisMetrica(value);
    }

    const novosDadosCanaisMetrica = {
      primeiraLinhaCanaisMetrica:
        name === "primeiraLinhaCanaisMetrica"
          ? value
          : primeiraLinhaCanaisMetrica,
      segundaLinhaCanaisMetrica:
        name === "segundaLinhaCanaisMetrica"
          ? value
          : segundaLinhaCanaisMetrica,
      terceiraLinhaCanaisMetrica:
        name === "terceiraLinhaCanaisMetrica"
          ? value
          : terceiraLinhaCanaisMetrica,
      quartaLinhaCanaisMetrica:
        name === "quartaLinhaCanaisMetrica" ? value : quartaLinhaCanaisMetrica,
    };
    onCanaisMetricaChange(novosDadosCanaisMetrica);
  };

  const [primeiraLinhaInteQuatroP, setPrimeiraLinhaInteQuatroP] = useState("");
  const [segundaLinhaInteQuatroP, setSegundaLinhaInteQuatroP] = useState("");
  const [terceiraLinhaInteQuatroP, setTerceiraLinhaInteQuatroP] = useState("");
  const [quartaLinhaInteQuatroP, setQuartaLinhaInteQuatroP] = useState("");

  const handleInputChangeInteQuatroP = (e) => {
    const { name, value } = e.target;
    if (name === "primeiraLinhaInteQuatroP") {
      setPrimeiraLinhaInteQuatroP(value);
    } else if (name === "segundaLinhaInteQuatroP") {
      setSegundaLinhaInteQuatroP(value);
    } else if (name === "terceiraLinhaInteQuatroP") {
      setTerceiraLinhaInteQuatroP(value);
    } else if (name === "quartaLinhaInteQuatroP") {
      setQuartaLinhaInteQuatroP(value);
    }

    const novosDadosInteQuatroP = {
      primeiraLinhaInteQuatroP:
        name === "primeiraLinhaInteQuatroP" ? value : primeiraLinhaInteQuatroP,
      segundaLinhaInteQuatroP:
        name === "segundaLinhaInteQuatroP" ? value : segundaLinhaInteQuatroP,
      terceiraLinhaInteQuatroP:
        name === "terceiraLinhaInteQuatroP" ? value : terceiraLinhaInteQuatroP,
      quartaLinhaInteQuatroP:
        name === "quartaLinhaInteQuatroP" ? value : quartaLinhaInteQuatroP,
    };
    onInteQuatroPChange(novosDadosInteQuatroP);
  };

  function fecharFormInteracao(e) {
    e.preventDefault();
    let modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.parentNode.removeChild(modalOverlay);
    }
    let modal = document.querySelector(".form_interacao");
    modal.style.display = "none";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "block";
  }

  function fecharTela_3(e) {
    e.preventDefault();
    let modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.parentNode.removeChild(modalOverlay);
    }
    let modal = document.querySelector(".tela_3_form_interacao");
    modal.style.display = "none";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "block";
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
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      fecharFormInteracao(e);
      fecharFormInteracaoTela2(e);
      fecharTela_3(e);
    }
  });
  function fecharFormInteracaoTela2(e) {
    e.preventDefault();
    let modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.parentNode.removeChild(modalOverlay);
    }
    let modal = document.querySelector(".tela_2_form_interacao");
    modal.style.display = "none";
    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "block";
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

  const checkboxes = document.querySelectorAll(
    '.table-row input[type="checkbox"]'
  );

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      // Desmarca as outras checkboxes da mesma linha
      const row = this.closest(".table-row");
      const otherCheckboxes = row.querySelectorAll(
        'input[type="checkbox"]:not(#' + this.id + ")"
      );

      otherCheckboxes.forEach((otherCheckbox) => {
        otherCheckbox.checked = false;
      });
    });
  });

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
                    <div
                      onClick={() => {
                        window.open("tutorial#tut_prototipo", "_blank");
                      }}
                      className="duvida"
                    ></div>{" "}
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
                    <input
                      type="text"
                      name="primeiraLinhaDescricao"
                      value={primeiraLinhaDescricao}
                      onChange={handleInputChangeDescricao}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="primeiraLinhaAnalisePreco"
                      value={primeiraLinhaAnalisePreco}
                      onChange={handleInputChangeAnalisePreco}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="primeiraLinhaAnaliseQuantidade"
                      value={primeiraLinhaAnaliseQuantidade}
                      onChange={handleInputChangeAnaliseQuantidade}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="primeiraLinhaAnaliseCusto"
                      value={primeiraLinhaAnaliseCusto}
                      onChange={handleInputChangeAnaliseCusto}
                      maxLength={20}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaDescricao"
                      value={segundaLinhaDescricao}
                      onChange={handleInputChangeDescricao}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaAnalisePreco"
                      value={segundaLinhaAnalisePreco}
                      onChange={handleInputChangeAnalisePreco}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaAnaliseQuantidade"
                      value={segundaLinhaAnaliseQuantidade}
                      onChange={handleInputChangeAnaliseQuantidade}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaAnaliseCusto"
                      value={segundaLinhaAnaliseCusto}
                      onChange={handleInputChangeAnaliseCusto}
                      maxLength={20}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaDescricao"
                      value={terceiraLinhaDescricao}
                      onChange={handleInputChangeDescricao}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaAnalisePreco"
                      value={terceiraLinhaAnalisePreco}
                      onChange={handleInputChangeAnalisePreco}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaAnaliseQuantidade"
                      value={terceiraLinhaAnaliseQuantidade}
                      onChange={handleInputChangeAnaliseQuantidade}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaAnaliseCusto"
                      value={terceiraLinhaAnaliseCusto}
                      onChange={handleInputChangeAnaliseCusto}
                      maxLength={20}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="nada"></td>
                  <td className="nada"></td>
                  <td className="total">TOTAL</td>
                  <td>
                    <input
                      type="text"
                      name="quartaLinhaAnaliseCusto"
                      value={quartaLinhaAnaliseCusto}
                      onChange={handleInputChangeAnaliseCusto}
                      maxLength={20}
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="parte2_interacao">
              <form>
                <div>
                  <p>
                    Análise de Preços e Diferenciais:{" "}
                    <div
                      onClick={() => {
                        window.open("tutorial#tut_prototipo", "_blank");
                      }}
                      className="duvida"
                    ></div>{" "}
                  </p>
                </div>
              </form>
            </div>
            <div className="tabela_analise_preço">
              <table className="table_interacao">
                <tr>
                  <th>DIFERENCIAL</th>
                  <td>
                    <input
                      type="text"
                      name="primeiraLinhaAnaliseDiferencial"
                      value={primeiraLinhaAnaliseDiferencial}
                      onChange={handleInputChangeAnaliseDiferencial}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaAnaliseDiferencial"
                      value={segundaLinhaAnaliseDiferencial}
                      onChange={handleInputChangeAnaliseDiferencial}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaAnaliseDiferencial"
                      value={terceiraLinhaAnaliseDiferencial}
                      onChange={handleInputChangeAnaliseDiferencial}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quartaLinhaAnaliseDiferencial"
                      value={quartaLinhaAnaliseDiferencial}
                      onChange={handleInputChangeAnaliseDiferencial}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quintaLinhaAnaliseDiferencial"
                      value={quintaLinhaAnaliseDiferencial}
                      onChange={handleInputChangeAnaliseDiferencial}
                      maxLength={20}
                    />
                  </td>
                </tr>
                <tr>
                  <th>PREÇO</th>
                  <td>
                    <input
                      type="text"
                      name="primeiraLinhaAnalisePreDif"
                      value={primeiraLinhaAnalisePreDif}
                      onChange={handleInputChangeAnalisePreDif}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaAnalisePreDif"
                      value={segundaLinhaAnalisePreDif}
                      onChange={handleInputChangeAnalisePreDif}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaAnalisePreDif"
                      value={terceiraLinhaAnalisePreDif}
                      onChange={handleInputChangeAnalisePreDif}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quartaLinhaAnalisePreDif"
                      value={quartaLinhaAnalisePreDif}
                      onChange={handleInputChangeAnalisePreDif}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quintaLinhaAnalisePreDif"
                      value={quintaLinhaAnalisePreDif}
                      onChange={handleInputChangeAnalisePreDif}
                      maxLength={20}
                    />
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
        <div className="centerItr">
          <button
            className="close_itr2"
            onClick={(e) => fecharFormInteracaoTela2(e)}
          ></button>
          <div className="dot2_itr2"></div>
          <div className="dot3_itr2"></div>
          <div className="tela2">
            <div className="esquerda">
              <div className="parte3_interacao">
                <div>
                  <p>
                    Checklist:{" "}
                    <div
                      onClick={() => {
                        window.open(
                          "tutorial#tut_analise_preco_diferenciais",
                          "_blank"
                        );
                      }}
                      className="duvida"
                    ></div>{" "}
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
                  MVP:
                  <div
                    onClick={() => {
                      window.open("tutorial#tut_melhorias", "_blank");
                    }}
                    className="duvida"
                  ></div>{" "}
                </p>
              </div>
              <div className="tabela_MVP">
                <table className="table_interacao_tela2">
                  <tr>
                    <th>PRODUTO</th>
                    <td>
                      <input
                        type="text"
                        name="primeiraLinhaMvpProduto"
                        value={primeiraLinhaMvpProduto}
                        onChange={handleInputChangeMvpProduto}
                        maxLength={16}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="segundaLinhaMvpProduto"
                        value={segundaLinhaMvpProduto}
                        onChange={handleInputChangeMvpProduto}
                        maxLength={16}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="terceiraLinhaMvpProduto"
                        value={terceiraLinhaMvpProduto}
                        onChange={handleInputChangeMvpProduto}
                        maxLength={16}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="quartaLinhaMvpProduto"
                        value={quartaLinhaMvpProduto}
                        onChange={handleInputChangeMvpProduto}
                        maxLength={16}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>INDICADO PARA</th>
                    <td>
                      <input
                        type="text"
                        name="primeiraLinhaMvpIndicado"
                        value={primeiraLinhaMvpIndicado}
                        onChange={handleInputChangeMvpIndicado}
                        maxLength={16}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="segundaLinhaMvpIndicado"
                        value={segundaLinhaMvpIndicado}
                        onChange={handleInputChangeMvpIndicado}
                        maxLength={16}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="terceiraLinhaMvpIndicado"
                        value={terceiraLinhaMvpIndicado}
                        onChange={handleInputChangeMvpIndicado}
                        maxLength={16}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="quartaLinhaMvpIndicado"
                        value={quartaLinhaMvpIndicado}
                        onChange={handleInputChangeMvpIndicado}
                        maxLength={16}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>ORIENTAÇÕES DE USO</th>
                    <td>
                      <input
                        type="text"
                        name="primeiraLinhaMvpOrientacoes"
                        value={primeiraLinhaMvpOrientacoes}
                        onChange={handleInputChangeMvpOrientacoes}
                        maxLength={16}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="segundaLinhaMvpOrientacoes"
                        value={segundaLinhaMvpOrientacoes}
                        onChange={handleInputChangeMvpOrientacoes}
                        maxLength={16}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="terceiraLinhaMvpOrientacoes"
                        value={terceiraLinhaMvpOrientacoes}
                        onChange={handleInputChangeMvpOrientacoes}
                        maxLength={16}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="quartaLinhaMvpOrientacoes"
                        value={quartaLinhaMvpOrientacoes}
                        onChange={handleInputChangeMvpOrientacoes}
                        maxLength={16}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>RESULTADO</th>
                    <td>
                      <input
                        type="text"
                        name="primeiraLinhaMvpResultado"
                        value={primeiraLinhaMvpResultado}
                        onChange={handleInputChangeMvpResultado}
                        maxLength={16}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="segundaLinhaMvpResultado"
                        value={segundaLinhaMvpResultado}
                        onChange={handleInputChangeMvpResultado}
                        maxLength={16}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="terceiraLinhaMvpResultado"
                        value={terceiraLinhaMvpResultado}
                        onChange={handleInputChangeMvpResultado}
                        maxLength={16}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="quartaLinhaMvpResultado"
                        value={quartaLinhaMvpResultado}
                        onChange={handleInputChangeMvpResultado}
                        maxLength={16}
                      />
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
                    <div
                      onClick={() => {
                        window.open("tutorial#tut_mvp", "_blank");
                      }}
                      className="duvida"
                    ></div>{" "}
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
                    <input
                      type="text"
                      name="primeiraLinhaFormacaoDescricao"
                      value={primeiraLinhaFormacaoDescricao}
                      onChange={handleInputChangeFormacaoDescricao}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="primeiraLinhaFormacaoCusto"
                      value={primeiraLinhaFormacaoCusto}
                      onChange={handleInputChangeFormacaoCusto}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="primeiraLinhaFormacaoTaxa"
                      value={primeiraLinhaFormacaoTaxa}
                      onChange={handleInputChangeFormacaoTaxa}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="primeiraLinhaFormacaoImpostos"
                      value={primeiraLinhaFormacaoImpostos}
                      onChange={handleInputChangeFormacaoImpostos}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="primeiraLinhaFormacaoMargem"
                      value={primeiraLinhaFormacaoMargem}
                      onChange={handleInputChangeFormacaoMargem}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="primeiraLinhaFormacaoPreco"
                      value={primeiraLinhaFormacaoPreco}
                      onChange={handleInputChangeFormacaoPreco}
                      maxLength={20}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaFormacaoDescricao"
                      value={segundaLinhaFormacaoDescricao}
                      onChange={handleInputChangeFormacaoDescricao}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaFormacaoCusto"
                      value={segundaLinhaFormacaoCusto}
                      onChange={handleInputChangeFormacaoCusto}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaFormacaoTaxa"
                      value={segundaLinhaFormacaoTaxa}
                      onChange={handleInputChangeFormacaoTaxa}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaFormacaoImpostos"
                      value={segundaLinhaFormacaoImpostos}
                      onChange={handleInputChangeFormacaoImpostos}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaFormacaoMargem"
                      value={segundaLinhaFormacaoMargem}
                      onChange={handleInputChangeFormacaoMargem}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaFormacaoPreco"
                      value={segundaLinhaFormacaoPreco}
                      onChange={handleInputChangeFormacaoPreco}
                      maxLength={20}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaFormacaoDescricao"
                      value={terceiraLinhaFormacaoDescricao}
                      onChange={handleInputChangeFormacaoDescricao}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaFormacaoCusto"
                      value={terceiraLinhaFormacaoCusto}
                      onChange={handleInputChangeFormacaoCusto}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaFormacaoTaxa"
                      value={terceiraLinhaFormacaoTaxa}
                      onChange={handleInputChangeFormacaoTaxa}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaFormacaoImpostos"
                      value={terceiraLinhaFormacaoImpostos}
                      onChange={handleInputChangeFormacaoImpostos}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaFormacaoMargem"
                      value={terceiraLinhaFormacaoMargem}
                      onChange={handleInputChangeFormacaoMargem}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaFormacaoPreco"
                      value={terceiraLinhaFormacaoPreco}
                      onChange={handleInputChangeFormacaoPreco}
                      maxLength={20}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="quartaLinhaFormacaoDescricao"
                      value={quartaLinhaFormacaoDescricao}
                      onChange={handleInputChangeFormacaoDescricao}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quartaLinhaFormacaoCusto"
                      value={quartaLinhaFormacaoCusto}
                      onChange={handleInputChangeFormacaoCusto}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quartaLinhaFormacaoTaxa"
                      value={quartaLinhaFormacaoTaxa}
                      onChange={handleInputChangeFormacaoTaxa}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quartaLinhaFormacaoImpostos"
                      value={quartaLinhaFormacaoImpostos}
                      onChange={handleInputChangeFormacaoImpostos}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quartaLinhaFormacaoMargem"
                      value={quartaLinhaFormacaoMargem}
                      onChange={handleInputChangeFormacaoMargem}
                      maxLength={20}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quartaLinhaFormacaoPreco"
                      value={quartaLinhaFormacaoPreco}
                      onChange={handleInputChangeFormacaoPreco}
                      maxLength={20}
                    />
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
        <div className="centerInt">
          <div className="esquerda">
            <button
              className="close_itr3"
              onClick={(e) => fecharTela_3(e)}
            ></button>
            <div className="dot2_itr3"></div>
            <div className="dot3_itr3"></div>
            <div className="digitalizacao">
              <p>
                Digitalização do Negócio:
                <div
                  onClick={() => {
                    window.open("tutorial#tut_digitalizacao", "_blank");
                  }}
                  className="duvida"
                ></div>{" "}
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
                <div
                  onClick={() => {
                    window.open("tutorial#tut_canais_venda", "_blank");
                  }}
                  className="duvida"
                ></div>{" "}
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
                    <input
                      type="text"
                      name="primeiraLinhaCanaisCanal"
                      value={primeiraLinhaCanaisCanal}
                      onChange={handleInputChangeCanaisCanal}
                      maxLength={23}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="primeiraLinhaCanaisObjetivo"
                      value={primeiraLinhaCanaisObjetivo}
                      onChange={handleInputChangeCanaisObjetivo}
                      maxLength={25}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="primeiraLinhaCanaisMetrica"
                      value={primeiraLinhaCanaisMetrica}
                      onChange={handleInputChangeCanaisMetrica}
                      maxLength={27}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaCanaisCanal"
                      value={segundaLinhaCanaisCanal}
                      onChange={handleInputChangeCanaisCanal}
                      maxLength={23}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaCanaisObjetivo"
                      value={segundaLinhaCanaisObjetivo}
                      onChange={handleInputChangeCanaisObjetivo}
                      maxLength={25}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="segundaLinhaCanaisMetrica"
                      value={segundaLinhaCanaisMetrica}
                      onChange={handleInputChangeCanaisMetrica}
                      maxLength={27}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaCanaisCanal"
                      value={terceiraLinhaCanaisCanal}
                      onChange={handleInputChangeCanaisCanal}
                      maxLength={23}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaCanaisObjetivo"
                      value={terceiraLinhaCanaisObjetivo}
                      onChange={handleInputChangeCanaisObjetivo}
                      maxLength={25}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="terceiraLinhaCanaisMetrica"
                      value={terceiraLinhaCanaisMetrica}
                      onChange={handleInputChangeCanaisMetrica}
                      maxLength={27}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="quartaLinhaCanaisCanal"
                      value={quartaLinhaCanaisCanal}
                      onChange={handleInputChangeCanaisCanal}
                      maxLength={23}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quartaLinhaCanaisObjetivo"
                      value={quartaLinhaCanaisObjetivo}
                      onChange={handleInputChangeCanaisObjetivo}
                      maxLength={25}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quartaLinhaCanaisMetrica"
                      value={quartaLinhaCanaisMetrica}
                      onChange={handleInputChangeCanaisMetrica}
                      maxLength={27}
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="canais_venda">
              <p className="h2_4psItr2">
                4 P's do Projeto:
                <div
                  onClick={() => {
                    window.open("tutorial#tut_ikigai", "_blank");
                  }}
                  className="duvida"
                ></div>{" "}
              </p>
            </div>
            <div className="tabela2">
              <table>
                <tr>
                  <td>
                    P1:
                    <input
                      type="text"
                      name="primeiraLinhaInteQuatroP"
                      value={primeiraLinhaInteQuatroP}
                      onChange={handleInputChangeInteQuatroP}
                      maxLength={17}
                    />
                  </td>
                  <td>
                    P2:
                    <input
                      type="text"
                      name="segundaLinhaInteQuatroP"
                      value={segundaLinhaInteQuatroP}
                      onChange={handleInputChangeInteQuatroP}
                      maxLength={17}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    P3:
                    <input
                      type="text"
                      name="terceiraLinhaInteQuatroP"
                      value={terceiraLinhaInteQuatroP}
                      onChange={handleInputChangeInteQuatroP}
                      maxLength={17}
                    />
                  </td>
                  <td>
                    P4:
                    <input
                      type="text"
                      name="quartaLinhaInteQuatroP"
                      value={quartaLinhaInteQuatroP}
                      onChange={handleInputChangeInteQuatroP}
                      maxLength={17}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div onClick={(e) => fecharTela_3(e)} className="feito_itr">
            <img src={checkImg} className="feito_itr" alt="confirma_itr" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Interacao;
