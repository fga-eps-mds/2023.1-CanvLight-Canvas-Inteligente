import "./Maturidade3.css";
import rightArrow from "../../images/seta-direita.png";
import React, { useState } from "react";

function Maturidade3({ state, onPorcentagemFinChange }) {
  // Primeiro trecho de selectResposta
  var [resposta1, setResposta1] = useState("");
  // Segundo trecho de selectResposta
  var [resposta2, setResposta2] = useState("");
  // Terceiro trecho de selectResposta
  var [resposta3, setResposta3] = useState("");
  // Quarto trecho de selectResposta
  var [resposta4, setResposta4] = useState("");
  // Quinto trecho de selectResposta
  var [resposta5, setResposta5] = useState("");
  // Sexto trecho de selectResposta
  var [resposta6, setResposta6] = useState("");
  // Sétimo trecho de selectResposta
  var [resposta7, setResposta7] = useState("");

  // Primeiro trecho de selectImportancia
  var [importancia1, setImportancia1] = useState("");
  // Segundo trecho de selectImportancia
  var [importancia2, setImportancia2] = useState("");
  // Terceiro trecho de selectImportancia
  var [importancia3, setImportancia3] = useState("");
  // Quarto trecho de selectImportancia
  var [importancia4, setImportancia4] = useState("");
  // Quinto trecho de selectImportancia
  var [importancia5, setImportancia5] = useState("");
  // Sexto trecho de selectImportancia
  var [importancia6, setImportancia6] = useState("");
  // Setimo trecho de selectImportancia
  var [importancia7, setImportancia7] = useState("");

  // Pega o valor da resposta e transforma em numero
  const handleOptionRespostaChange = (event, respostaSetter) => {
    const selectedOption = event.target.value;

    let resposta;
    if (selectedOption === "opcao1") {
      resposta = 1;
    } else if (selectedOption === "opcao2") {
      resposta = 2;
    } else if (selectedOption === "opcao3") {
      resposta = 3;
    } else if (selectedOption === "opcao4") {
      resposta = 4;
    }

    respostaSetter(resposta);
  };

  // Pega o valor da importância e transforma em peso
  const handleOptionImportanciaChange = (event, importanciaSetter) => {
    const selectedOption = event.target.value;

    let importancia;
    if (selectedOption === "opcao1") {
      importancia = 1;
    } else if (selectedOption === "opcao2") {
      importancia = 2;
    } else if (selectedOption === "opcao3") {
      importancia = 3;
    }

    importanciaSetter(importancia);
  };

  // eslint-disable-next-line
  function calculaFin() {
    var multiplicacao = null;

    multiplicacao += resposta1 * importancia1;
    multiplicacao += resposta2 * importancia2;
    multiplicacao += resposta3 * importancia3;
    multiplicacao += resposta4 * importancia4;
    multiplicacao += resposta5 * importancia5;
    multiplicacao += resposta6 * importancia6;
    multiplicacao += resposta7 * importancia7;

      var resultado = multiplicacao/84;
      resultado = resultado*100;

      return resultado.toFixed(0);
  }

  onPorcentagemFinChange(calculaFin());

  function fecharFormMaturidade3(e) {
    e.preventDefault();
    let modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.parentNode.removeChild(modalOverlay);
    }

    let modal = document.querySelector(".areaFin");
    modal.style.display = "none";

    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "block";
    window.scrollTo(0, 0);
  }

  function irParaFormMaturidade2(e) {
    e.preventDefault();

    let modal = document.querySelector(".areaRh");
    modal.style.display = "block";

    let modal2 = document.querySelector(".areaFin");
    modal2.style.display = "none";
    window.scrollTo(0, 0);
  }

  function irParaFormMaturidade4(e) {
    e.preventDefault();

    let modal = document.querySelector(".areaFin");
    modal.style.display = "none";

    let modal2 = document.querySelector(".areaMkt");
    modal2.style.display = "block";
    window.scrollTo(0, 0);
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      fecharFormMaturidade3(e);
    }
  });

  return (
    <div className="areaFin">
      <div className="formFin">
        <button
          className="close_area3"
          onClick={(e) => fecharFormMaturidade3(e)}
        ></button>
        <div className="dot2_area3"></div>
        <div className="dot3_area3"></div>
        <h2 className="titulo_financeira">Área Financeira</h2>
        <div
          onClick={() => {
            window.open("tutorial#tut_Maturidade", "_blank");
          }}
          className="duvidaFin"
        ></div>

        <table>
          <tr>
            <th className="primeiro-canto">PERGUNTA</th>
            <th>RESPOSTA</th>
            <th className="segundo-canto">IMPORTÂNCIA</th>
          </tr>

          <tr>
            <td className="pergunta1">
              1. Quais são os processos financeiros fundamentais implementados
              na empresa? Como são registradas e monitoradas as transações
              financeiras da empresa?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta1)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1" 
                title="Nível 1: A empresa não possui processos financeiros
                  fundamentais bem estabelecidos e não há um sistema adequado
                  para registrar e monitorar as transações financeiras.">
                  Nível 1: A empresa não possui processos financeiros
                  fundamentais bem estabelecidos e não há um sistema adequado
                  para registrar e monitorar as transações financeiras.
                </option>
                <option value="opcao2" 
                title="Nível 2: A empresa possui processos financeiros básicos
                  implementados, mas ainda há falta de padronização e
                  documentação adequada. As transações financeiras são
                  registradas manualmente, o que dificulta o monitoramento
                  preciso.">
                  Nível 2: A empresa possui processos financeiros básicos
                  implementados, mas ainda há falta de padronização e
                  documentação adequada. As transações financeiras são
                  registradas manualmente, o que dificulta o monitoramento
                  preciso.
                </option>
                <option value="opcao3" 
                title="Nível 3: A empresa possui processos financeiros bem definidos
                  e documentados, incluindo controles internos. As transações
                  financeiras são registradas por meio de um sistema
                  informatizado, permitindo um acompanhamento mais eficiente e
                  preciso.">
                  Nível 3: A empresa possui processos financeiros bem definidos
                  e documentados, incluindo controles internos. As transações
                  financeiras são registradas por meio de um sistema
                  informatizado, permitindo um acompanhamento mais eficiente e
                  preciso.
                </option>
                <option value="opcao4" 
                title="Nível 4:A empresa possui processos financeiros altamente
                  eficientes e padronizados, com procedimentos documentados e
                  bem estabelecidos. As transações financeiras são registradas
                  automaticamente por meio de um sistema integrado e são
                  monitoradas regularmente por meio de relatórios e análises
                  detalhadas.">
                  Nível 4: A empresa possui processos financeiros altamente
                  eficientes e padronizados, com procedimentos documentados e
                  bem estabelecidos. As transações financeiras são registradas
                  automaticamente por meio de um sistema integrado e são
                  monitoradas regularmente por meio de relatórios e análises
                  detalhadas.
                </option>
              </select>
            </td>
            <td>
              <select
                className="import-select"
                onChange={(event) =>
                  handleOptionImportanciaChange(event, setImportancia1)
                }
              >
                <option disabled selected value>
                  Selecione um nível de importância
                </option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta2">
              2. Quais são os principais indicadores financeiros utilizados para
              avaliar a saúde financeira da empresa?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta2)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1" 
                title="Nível 1: A empresa não possui uma definição clara de
                  indicadores financeiros para avaliar sua saúde financeira. Não
                  há monitoramento sistemático dos resultados financeiros ou
                  utilização de indicadores financeiros para análise.">
                  Nível 1: A empresa não possui uma definição clara de
                  indicadores financeiros para avaliar sua saúde financeira. Não
                  há monitoramento sistemático dos resultados financeiros ou
                  utilização de indicadores financeiros para análise.
                </option>
                <option value="opcao2" 
                title="Nível 2: A empresa utiliza alguns indicadores financeiros
                  básicos, como o fluxo de caixa, o lucro líquido e a margem de
                  lucro. No entanto, a análise financeira é limitada e não
                  inclui indicadores mais abrangentes ou detalhados.">
                  Nível 2: A empresa utiliza alguns indicadores financeiros
                  básicos, como o fluxo de caixa, o lucro líquido e a margem de
                  lucro. No entanto, a análise financeira é limitada e não
                  inclui indicadores mais abrangentes ou detalhados.
                </option>
                <option value="opcao3" 
                title="Nível 3: A empresa utiliza indicadores financeiros essenciais,
                  como o retorno sobre o investimento (ROI), o índice de
                  liquidez, a margem de lucro bruto e o capital de giro. Há um
                  acompanhamento regular desses indicadores e eles são
                  utilizados para avaliar a saúde financeira da empresa.">
                  Nível 3: A empresa utiliza indicadores financeiros essenciais,
                  como o retorno sobre o investimento (ROI), o índice de
                  liquidez, a margem de lucro bruto e o capital de giro. Há um
                  acompanhamento regular desses indicadores e eles são
                  utilizados para avaliar a saúde financeira da empresa.
                </option>
                <option value="opcao4" 
                title="Nível 4: A empresa possui um conjunto abrangente de
                  indicadores financeiros que abrange diferentes aspectos da
                  saúde financeira. Além dos indicadores mencionados
                  anteriormente, a empresa monitora indicadores de
                  rentabilidade, como o retorno sobre o patrimônio líquido (ROE)
                  e o retorno sobre ativos (ROA). A análise financeira é
                  realizada de forma regular e os resultados são utilizados para
                  tomada de decisões estratégicas.">
                  Nível 4: A empresa possui um conjunto abrangente de
                  indicadores financeiros que abrange diferentes aspectos da
                  saúde financeira. Além dos indicadores mencionados
                  anteriormente, a empresa monitora indicadores de
                  rentabilidade, como o retorno sobre o patrimônio líquido (ROE)
                  e o retorno sobre ativos (ROA). A análise financeira é
                  realizada de forma regular e os resultados são utilizados para
                  tomada de decisões estratégicas.
                </option>
              </select>
            </td>
            <td>
              <select
                className="import-select"
                onChange={(event) =>
                  handleOptionImportanciaChange(event, setImportancia2)
                }
              >
                <option disabled selected value>
                  Selecione um nível de importância
                </option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta3">
              3. Existe um planejamento financeiro anual ou de longo prazo? Como
              é elaborado o orçamento financeiro da empresa?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta3)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1" 
                title="Nível 1: A empresa não possui um planejamento financeiro anual
                  ou de longo prazo e não elabora um orçamento financeiro
                  estruturado.">
                  Nível 1: A empresa não possui um planejamento financeiro anual
                  ou de longo prazo e não elabora um orçamento financeiro
                  estruturado.
                </option>
                <option value="opcao2" 
                title="Nível 2: A empresa possui um planejamento financeiro anual
                  básico, mas não considera um horizonte de longo prazo. O
                  orçamento financeiro é elaborado de forma simplificada, sem
                  análises detalhadas.">
                  Nível 2: A empresa possui um planejamento financeiro anual
                  básico, mas não considera um horizonte de longo prazo. O
                  orçamento financeiro é elaborado de forma simplificada, sem
                  análises detalhadas.
                </option>
                <option value="opcao3" 
                title="Nível 3: A empresa possui um planejamento financeiro anual que
                  considera um horizonte de médio prazo. O orçamento financeiro
                  é elaborado com base em projeções e análises detalhadas,
                  levando em conta diversos aspectos financeiros.">
                  Nível 3: A empresa possui um planejamento financeiro anual que
                  considera um horizonte de médio prazo. O orçamento financeiro
                  é elaborado com base em projeções e análises detalhadas,
                  levando em conta diversos aspectos financeiros.
                </option>
                <option value="opcao4" 
                title="Nível 4: A empresa possui um planejamento financeiro
                  abrangente, que contempla tanto o curto quanto o longo prazo.
                  O orçamento financeiro é elaborado de forma estruturada, com
                  base em análises aprofundadas, cenários e metas financeiras
                  claras.">
                  Nível 4: A empresa possui um planejamento financeiro
                  abrangente, que contempla tanto o curto quanto o longo prazo.
                  O orçamento financeiro é elaborado de forma estruturada, com
                  base em análises aprofundadas, cenários e metas financeiras
                  claras.
                </option>
              </select>
            </td>
            <td>
              <select
                className="import-select"
                onChange={(event) =>
                  handleOptionImportanciaChange(event, setImportancia3)
                }
              >
                <option disabled selected value>
                  Selecione um nível de importância
                </option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta4">
              4. Como são estabelecidos os objetivos financeiros da empresa?
              Quais são os critérios para a alocação de recursos financeiros em
              diferentes áreas da empresa?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta4)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1" 
                title="Nível 1: A empresa não possui objetivos financeiros claramente
                  definidos e não utiliza critérios consistentes para alocar
                  recursos financeiros em diferentes áreas.">
                  Nível 1: A empresa não possui objetivos financeiros claramente
                  definidos e não utiliza critérios consistentes para alocar
                  recursos financeiros em diferentes áreas.
                </option>
                <option value="opcao2" 
                title="Nível 2: A empresa estabelece objetivos financeiros de forma
                  genérica, sem uma abordagem estruturada, e a alocação de
                  recursos financeiros é feita de forma arbitrária, sem
                  critérios claros.">
                  Nível 2: A empresa estabelece objetivos financeiros de forma
                  genérica, sem uma abordagem estruturada, e a alocação de
                  recursos financeiros é feita de forma arbitrária, sem
                  critérios claros.
                </option>
                <option value="opcao3" 
                title="Nível 3: A empresa estabelece objetivos financeiros
                  específicos e quantificáveis, alinhados com a estratégia geral
                  da empresa. A alocação de recursos financeiros é baseada em
                  critérios básicos, como histórico de desempenho e prioridades
                  estratégicas, mas pode haver espaço para aprimoramentos.">
                  Nível 3: A empresa estabelece objetivos financeiros
                  específicos e quantificáveis, alinhados com a estratégia geral
                  da empresa. A alocação de recursos financeiros é baseada em
                  critérios básicos, como histórico de desempenho e prioridades
                  estratégicas, mas pode haver espaço para aprimoramentos.
                </option>
                <option value="opcao4" 
                title="Nível 4: A empresa estabelece objetivos financeiros claros,
                  mensuráveis e alinhados com a estratégia de longo prazo. A
                  alocação de recursos financeiros é baseada em critérios
                  sólidos, como análise de retorno sobre investimento (ROI),
                  avaliação de riscos e oportunidades, e consideração das
                  necessidades e prioridades de cada área da empresa.">
                  Nível 4: A empresa estabelece objetivos financeiros claros,
                  mensuráveis e alinhados com a estratégia de longo prazo. A
                  alocação de recursos financeiros é baseada em critérios
                  sólidos, como análise de retorno sobre investimento (ROI),
                  avaliação de riscos e oportunidades, e consideração das
                  necessidades e prioridades de cada área da empresa.
                </option>
              </select>
            </td>
            <td>
              <select
                className="import-select"
                onChange={(event) =>
                  handleOptionImportanciaChange(event, setImportancia4)
                }
              >
                <option disabled selected value>
                  Selecione um nível de importância
                </option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta5">
              5. Como é realizado o controle de custos na empresa? Quais são as
              principais estratégias adotadas para redução de custos?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta5)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1" 
                title="Nível 1: A empresa não possui um controle adequado de custos e
                  não adota estratégias específicas para redução de despesas.">
                  Nível 1: A empresa não possui um controle adequado de custos e
                  não adota estratégias específicas para redução de despesas.
                </option>
                <option value="opcao2" 
                title="Nível 2: A empresa realiza um controle básico de custos, mas
                  não possui estratégias proativas para redução de despesas.">
                  Nível 2: A empresa realiza um controle básico de custos, mas
                  não possui estratégias proativas para redução de despesas.
                </option>
                <option value="opcao3" 
                title="Nível 3: A empresa possui um controle de custos eficiente,
                  utilizando sistemas e ferramentas para monitorar os gastos.
                  Adota algumas estratégias para redução de custos, como
                  negociação de contratos e busca por fornecedores mais
                  competitivos.">
                  Nível 3: A empresa possui um controle de custos eficiente,
                  utilizando sistemas e ferramentas para monitorar os gastos.
                  Adota algumas estratégias para redução de custos, como
                  negociação de contratos e busca por fornecedores mais
                  competitivos.
                </option>
                <option value="opcao4" 
                title="Nível 4: A empresa realiza um controle detalhado de custos,
                  utilizando métodos avançados de análise financeira. Possui uma
                  abordagem proativa para redução de despesas, implementando
                  estratégias como otimização de processos, renegociação de
                  contratos, avaliação de alternativas mais econômicas e busca
                  por eficiência operacional em todas as áreas da empresa.">
                  Nível 4: A empresa realiza um controle detalhado de custos,
                  utilizando métodos avançados de análise financeira. Possui uma
                  abordagem proativa para redução de despesas, implementando
                  estratégias como otimização de processos, renegociação de
                  contratos, avaliação de alternativas mais econômicas e busca
                  por eficiência operacional em todas as áreas da empresa.
                </option>
              </select>
            </td>
            <td>
              <select
                className="import-select"
                onChange={(event) =>
                  handleOptionImportanciaChange(event, setImportancia5)
                }
              >
                <option disabled selected value>
                  Selecione um nível de importância
                </option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta6">
              6. Quais são os métodos utilizados para a atribuição de custos aos
              produtos ou serviços? Como são analisadas as variações de custos
              em relação ao orçamento planejado?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta6)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1" 
                title="Nível 1: A empresa não possui métodos claros para atribuição
                  de custos aos produtos ou serviços e não realiza análise de
                  variações de custos em relação ao orçamento planejado.">
                  Nível 1: A empresa não possui métodos claros para atribuição
                  de custos aos produtos ou serviços e não realiza análise de
                  variações de custos em relação ao orçamento planejado.
                </option>
                <option value="opcao2" 
                title="Nível 2: A empresa utiliza métodos básicos para atribuição de
                  custos aos produtos ou serviços, mas não possui um processo
                  estruturado para análise das variações de custos em relação ao
                  orçamento planejado.">
                  Nível 2: A empresa utiliza métodos básicos para atribuição de
                  custos aos produtos ou serviços, mas não possui um processo
                  estruturado para análise das variações de custos em relação ao
                  orçamento planejado.
                </option>
                <option value="opcao3" 
                title=" Nível 3: A empresa utiliza métodos adequados para atribuição
                  de custos aos produtos ou serviços, considerando diferentes
                  elementos e variáveis. Também realiza análise regular das
                  variações de custos em relação ao orçamento planejado,
                  identificando possíveis desvios.">
                  Nível 3: A empresa utiliza métodos adequados para atribuição
                  de custos aos produtos ou serviços, considerando diferentes
                  elementos e variáveis. Também realiza análise regular das
                  variações de custos em relação ao orçamento planejado,
                  identificando possíveis desvios.
                </option>
                <option value="opcao4" 
                title="Nível 4: A empresa utiliza métodos avançados e precisos para
                  atribuição de custos aos produtos ou serviços, levando em
                  consideração múltiplos critérios e variáveis relevantes. Além
                  disso, realiza análises detalhadas e frequentes das variações
                  de custos em relação ao orçamento planejado, identificando
                  causas, ajustando planos de ação e buscando otimizações
                  constantes.">
                  Nível 4: A empresa utiliza métodos avançados e precisos para
                  atribuição de custos aos produtos ou serviços, levando em
                  consideração múltiplos critérios e variáveis relevantes. Além
                  disso, realiza análises detalhadas e frequentes das variações
                  de custos em relação ao orçamento planejado, identificando
                  causas, ajustando planos de ação e buscando otimizações
                  constantes.
                </option>
              </select>
            </td>
            <td>
              <select
                className="import-select"
                onChange={(event) =>
                  handleOptionImportanciaChange(event, setImportancia6)
                }
              >
                <option disabled selected value>
                  Selecione um nível de importância
                </option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta7">
              7. Quais são os riscos financeiros identificados e monitorados
              pela empresa?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta7)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1" 
                title="Nível 1: A empresa não possui uma identificação clara e um
                  monitoramento sistemático dos riscos financeiros. Os riscos
                  podem ser desconhecidos ou não receberem a devida atenção. Não
                  há um processo estruturado para identificar, avaliar e mitigar
                  os riscos financeiros que podem afetar a saúde financeira da
                  empresa.">
                  Nível 1: A empresa não possui uma identificação clara e um
                  monitoramento sistemático dos riscos financeiros. Os riscos
                  podem ser desconhecidos ou não receberem a devida atenção. Não
                  há um processo estruturado para identificar, avaliar e mitigar
                  os riscos financeiros que podem afetar a saúde financeira da
                  empresa.
                </option>
                <option value="opcao2" 
                title="Nível 2: A empresa possui uma conscientização básica dos
                  riscos financeiros e realiza um monitoramento periódico, porém
                  de forma limitada. Alguns riscos financeiros óbvios podem ser
                  identificados e acompanhados, mas ainda não há uma análise
                  aprofundada ou uma estratégia formalizada para lidar com eles.
                  O monitoramento pode ser reativo, em vez de proativo.">
                  Nível 2: A empresa possui uma conscientização básica dos
                  riscos financeiros e realiza um monitoramento periódico, porém
                  de forma limitada. Alguns riscos financeiros óbvios podem ser
                  identificados e acompanhados, mas ainda não há uma análise
                  aprofundada ou uma estratégia formalizada para lidar com eles.
                  O monitoramento pode ser reativo, em vez de proativo.
                </option>
                <option value="opcao3" 
                title=" Nível 3: A empresa possui uma abordagem mais estruturada na
                  identificação e no monitoramento de riscos financeiros. São
                  realizadas avaliações de risco abrangentes para identificar os
                  principais riscos financeiros, como risco de crédito, risco
                  cambial, risco de liquidez e risco de mercado. Existe uma
                  análise periódica desses riscos e são implementadas medidas de
                  mitigação para reduzir a exposição aos riscos identificados.">
                  Nível 3: A empresa possui uma abordagem mais estruturada na
                  identificação e no monitoramento de riscos financeiros. São
                  realizadas avaliações de risco abrangentes para identificar os
                  principais riscos financeiros, como risco de crédito, risco
                  cambial, risco de liquidez e risco de mercado. Existe uma
                  análise periódica desses riscos e são implementadas medidas de
                  mitigação para reduzir a exposição aos riscos identificados.
                </option>
                <option value="opcao4" 
                title="Nível 4: A empresa adota uma abordagem avançada na
                  identificação e no monitoramento de riscos financeiros. Além
                  dos riscos mencionados anteriormente, são considerados outros
                  riscos específicos do setor e da empresa. Existe um sistema
                  robusto para identificar, avaliar e monitorar os riscos
                  financeiros de forma contínua. São implementadas estratégias
                  de gestão de riscos financeiros, como o uso de instrumentos
                  financeiros derivativos, a diversificação de investimentos e a
                  adoção de políticas de gerenciamento de riscos.">
                  Nível 4: A empresa adota uma abordagem avançada na
                  identificação e no monitoramento de riscos financeiros. Além
                  dos riscos mencionados anteriormente, são considerados outros
                  riscos específicos do setor e da empresa. Existe um sistema
                  robusto para identificar, avaliar e monitorar os riscos
                  financeiros de forma contínua. São implementadas estratégias
                  de gestão de riscos financeiros, como o uso de instrumentos
                  financeiros derivativos, a diversificação de investimentos e a
                  adoção de políticas de gerenciamento de riscos.
                </option>
              </select>
            </td>
            <td>
              <select
                className="import-select"
                onChange={(event) =>
                  handleOptionImportanciaChange(event, setImportancia7)
                }
              >
                <option disabled selected value>
                  Selecione um nível de importância
                </option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>
        </table>
        <img
          src={rightArrow}
          alt="Seta"
          className="setaEsquerdaMaturidade_3"
          onClick={(e) => irParaFormMaturidade2(e)}
        />
        <img
          src={rightArrow}
          alt="Seta"
          className="setaDireitaMaturidade_3"
          onClick={(e) => irParaFormMaturidade4(e)}
        />
      </div>
    </div>
  );
}

export default Maturidade3;
