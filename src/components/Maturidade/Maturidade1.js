import "./Maturidade1.css";
import rightArrow from "../../images/seta-direita.png";
import React, { useState } from "react";

function Maturidade1({ state, onPorcentagemAdmChange }) {
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
  // Oitavo trecho de selectResposta
  var [resposta8, setResposta8] = useState("");
  // Nono trecho de selectResposta
  var [resposta9, setResposta9] = useState("");
  // Décimo trecho de selectResposta
  var [resposta10, setResposta10] = useState("");

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
  // Oitavo trecho de selectImportancia
  var [importancia8, setImportancia8] = useState("");
  // Nono trecho de selectImportancia
  var [importancia9, setImportancia9] = useState("");
  // Decimo trecho de selectImportancia
  var [importancia10, setImportancia10] = useState("");

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
  function calculaAdm() {
    var multiplicacao = null;

    multiplicacao += resposta1 * importancia1;
    multiplicacao += resposta2 * importancia2;
    multiplicacao += resposta3 * importancia3;
    multiplicacao += resposta4 * importancia4;
    multiplicacao += resposta5 * importancia5;
    multiplicacao += resposta6 * importancia6;
    multiplicacao += resposta7 * importancia7;
    multiplicacao += resposta8 * importancia8;
    multiplicacao += resposta9 * importancia9;
    multiplicacao += resposta10 * importancia10;

    var resultado = multiplicacao / 60;
    resultado = resultado * 100;

    onPorcentagemAdmChange(resultado.toFixed(0));
  }

  function fecharFormMaturidade1(e) {
    e.preventDefault();
    let modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.parentNode.removeChild(modalOverlay);
    }

    let modal = document.querySelector(".areaAdm");
    modal.style.display = "none";

    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "block";
    window.scrollTo(0, 0);
  }

  function irParaFormMaturidade2(e) {
    e.preventDefault();

    let modal = document.querySelector(".areaAdm");
    modal.style.display = "none";

    let modal2 = document.querySelector(".areaRh");
    modal2.style.display = "block";
    window.scrollTo(0, 0);
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      fecharFormMaturidade1(e);
    }
  });

  return (
    <div className="areaAdm">
      <div className="formAdm">
        <button
          className="close_area1"
          onClick={(e) => fecharFormMaturidade1(e)}
        ></button>
        <div className="dot2_area1"></div>
        <div className="dot3_area1"></div>
        <h2 className="titulo_area_adm">Área Administrativa</h2>
        <div
          onClick={() => {
            window.open("tutorial#tut_Maturidade", "_blank");
          }}
          className="duvidaAdm"
        ></div>

        <table>
          <tr>
            <th className="primeiro-canto">PERGUNTA</th>
            <th>RESPOSTA</th>
            <th className="segundo-canto">IMPORTANCIA</th>
          </tr>

          <tr>
            <td className="pergunta">
              1. Qual é a estrutura organizacional da empresa? Ela é adequada
              para suportar as atividades e fluxos de trabalho?
            </td>
            <td>
              <select
                className="opcao-select"
                onChange={(event) =>
                  handleOptionRespostaChange(event, setResposta1)
                }
              >
                <option disabled selected value>
                  Selecione uma resposta
                </option>
                <option value="opcao1">
                  Nível 1: A estrutura organizacional da empresa é pouco
                  definida e não é adequada para suportar as atividades e fluxos
                  de trabalho. Há falta de clareza nas responsabilidades e
                  comunicação ineficiente entre os membros da equipe.
                </option>
                <option value="opcao2">
                  Nível 2: A estrutura organizacional da empresa está sendo
                  desenvolvida, mas ainda apresenta algumas deficiências.
                  Existem departamentos definidos, mas a coordenação entre eles
                  pode ser aprimorada para melhorar a eficiência das atividades
                  e fluxos de trabalho.
                </option>
                <option value="opcao3">
                  Nível 3: A estrutura organizacional da empresa é bem definida
                  e adequada para suportar as atividades e fluxos de trabalho.
                  Os departamentos estão claramente estabelecidos, a comunicação
                  é eficiente e as responsabilidades são bem distribuídas.
                </option>
                <option value="opcao4">
                  Nível 4:A estrutura organizacional da empresa é altamente
                  desenvolvida e otimizada para suportar as atividades e fluxos
                  de trabalho. Os processos são eficientes, os departamentos
                  estão interligados de forma integrada e a comunicação é
                  transparente em todos os níveis da organização.
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
            <td className="pergunta">
              2. Como é realizado o planejamento estratégico da empresa? Existe
              uma definição clara de metas e objetivos?
            </td>
            <td>
              <select
                className="opcao-select"
                onChange={(event) =>
                  handleOptionRespostaChange(event, setResposta2)
                }
              >
                <option disabled selected value>
                  Selecione uma resposta
                </option>
                <option value="opcao1">
                  Nível 1:Planejamento estratégico pouco estruturado ou
                  inexistente, com falta de metas claras e direção estratégica
                  comprometida.
                </option>
                <option value="opcao2">
                  Nível 2: Planejamento estratégico em desenvolvimento, mas
                  falta abrangência e clareza nas metas, comprometendo a
                  efetividade.
                </option>
                <option value="opcao3">
                  Nível 3: Planejamento estratégico estabelecido, porém,
                  implementação e acompanhamento podem ser aprimorados para
                  alcançar metas consistentemente.
                </option>
                <option value="opcao4">
                  Nível 4: Planejamento estratégico bem definido, com metas
                  claras e um sistema robusto de acompanhamento e revisão para
                  manter alinhamento e ajustes necessários.
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
            <td className="pergunta">
              3. Quais são os principais processos administrativos da empresa?
              Eles estão documentados e padronizados?
            </td>
            <td>
              <select
                className="opcao-select"
                onChange={(event) =>
                  handleOptionRespostaChange(event, setResposta3)
                }
              >
                <option disabled selected value>
                  Selecione uma resposta
                </option>
                <option value="opcao1">
                  Nível 1: Processos administrativos pouco definidos,
                  documentados ou padronizados, resultando em inconsistências e
                  falta de eficiência.
                </option>
                <option value="opcao2">
                  Nível 2: Alguns processos administrativos estão documentados,
                  mas padronização não é completa, causando variações e
                  impactando consistência e eficiência.
                </option>
                <option value="opcao3">
                  Nível 3: Maioria dos processos administrativos documentados e
                  padronizados, esforço para consistência e eficiência nas
                  tarefas.
                </option>
                <option value="opcao4">
                  Nível 4: Todos os processos administrativos claramente
                  documentados e padronizados, com foco na eficiência, melhoria
                  contínua e monitoramento regular.
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
            <td className="pergunta">
              4. Como é feita a gestão de projetos na empresa? Existem
              metodologias e ferramentas utilizadas?
            </td>
            <td>
              <select
                className="opcao-select"
                onChange={(event) =>
                  handleOptionRespostaChange(event, setResposta4)
                }
              >
                <option disabled selected value>
                  Selecione uma resposta
                </option>
                <option value="opcao1">
                  Nível 1: Gestão de projetos pouco estruturada ou inexistente,
                  sem metodologias ou ferramentas específicas, resultando em
                  falta de controle e coordenação efetiva.
                </option>
                <option value="opcao2">
                  Nível 2: Gestão de projetos em desenvolvimento, com uso
                  parcial ou inconsistente de metodologias e ferramentas,
                  limitando a eficácia.
                </option>
                <option value="opcao3">
                  Nível 3: Abordagem estruturada para gestão de projetos, com
                  metodologias e ferramentas estabelecidas, planejamento
                  adequado e monitoramento efetivo.
                </option>
                <option value="opcao4">
                  Nível 4: Gestão de projetos altamente desenvolvida e
                  eficiente, com uso de metodologias avançadas (PMBOK, Agile,
                  Scrum), capacitação constante dos profissionais envolvidos.
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
            <td className="pergunta">
              5. Como é feita a gestão financeira da empresa? Existe controle
              efetivo sobre orçamento, fluxo de caixa e contas a pagar/receber?
            </td>
            <td>
              <select
                className="opcao-select"
                onChange={(event) =>
                  handleOptionRespostaChange(event, setResposta5)
                }
              >
                <option disabled selected value>
                  Selecione uma resposta
                </option>
                <option value="opcao1">
                  Nível 1: Gestão financeira pouco estruturada ou inexistente,
                  resultando em falta de controle, dificuldades na previsão e
                  possíveis problemas de liquidez.
                </option>
                <option value="opcao2">
                  Nível 2: Gestão financeira em desenvolvimento, com algum
                  controle, mas é necessário aprimorar processos e ferramentas
                  para eficácia.
                </option>
                <option value="opcao3">
                  Nível 3: Controle efetivo do orçamento, fluxo de caixa e
                  contas a pagar/receber, utilizando ferramentas e práticas
                  adequadas de gestão financeira.
                </option>
                <option value="opcao4">
                  Nível 4: Gestão financeira altamente desenvolvida e eficiente,
                  com controle preciso e atualizado, uso de ferramentas
                  avançadas e análises para decisões estratégicas embasadas.
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
            <td className="pergunta">
              6. Qual é o nível de qualidade dos produtos ou serviços oferecidos
              pela empresa? Existem indicadores e processos de melhoria
              contínua?
            </td>
            <td>
              <select
                className="opcao-select"
                onChange={(event) =>
                  handleOptionRespostaChange(event, setResposta6)
                }
              >
                <option disabled selected value>
                  Selecione uma resposta
                </option>
                <option value="opcao1">
                  Nível 1: Qualidade baixa ou inconsistente nos
                  produtos/serviços, falta de indicadores e processos de
                  melhoria contínua. Risco de insatisfação dos clientes e perda
                  de competitividade.{" "}
                </option>
                <option value="opcao2">
                  Nível 2: Desenvolvimento da qualidade em andamento, com
                  indicadores em progresso, porém, não totalmente estabelecidos.
                  Implementação parcial ou inconsistente de processos de
                  melhoria contínua.
                </option>
                <option value="opcao3">
                  Nível 3: Adequado nível de qualidade em produtos/serviços. Uso
                  de indicadores estabelecidos, monitoramento e ações
                  corretivas. Processos de melhoria contínua em vigor para
                  aprimoramento constante.
                </option>
                <option value="opcao4">
                  Nível 4: Alto nível de qualidade em produtos/serviços.
                  Indicadores sofisticados, cultura de melhoria contínua
                  enraizada em todos os níveis. Incentivo à inovação e
                  aprimoramento constante.
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
            <td className="pergunta">
              7. Como é realizada a gestão de documentos e arquivos na empresa?
              Existem práticas de organização e armazenamento eficientes?
            </td>
            <td>
              <select
                className="opcao-select"
                onChange={(event) =>
                  handleOptionRespostaChange(event, setResposta7)
                }
              >
                <option disabled selected value>
                  Selecione uma resposta
                </option>
                <option value="opcao1">
                  Nível 1: Gestão de documentos e arquivos pouco estruturada ou
                  inexistente, resultando em dificuldades na localização e
                  recuperação de informações importantes.{" "}
                </option>
                <option value="opcao2">
                  Nível 2: Desenvolvimento da gestão de documentos e arquivos em
                  andamento, com práticas de organização e armazenamento
                  parciais ou pouco eficientes.
                </option>
                <option value="opcao3">
                  Nível 3: Práticas adequadas de gestão de documentos e
                  arquivos, com sistemas e procedimentos estabelecidos para
                  organização e recuperação eficiente das informações.
                </option>
                <option value="opcao4">
                  Nível 4: Gestão de documentos e arquivos altamente
                  desenvolvida e eficiente, com uso de práticas avançadas,
                  tecnologias como GED e sistemas digitais, garantindo
                  organização e acesso rápido às informações.
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

          <tr>
            <td className="pergunta">
              8. Como é feita a gestão de riscos na empresa? Existem análises de
              risco e planos de contingência estabelecidos?
            </td>
            <td>
              <select
                className="opcao-select"
                onChange={(event) =>
                  handleOptionRespostaChange(event, setResposta8)
                }
              >
                <option disabled selected value>
                  Selecione uma resposta
                </option>
                <option value="opcao1">
                  Nível 1: Gestão de riscos pouco estruturada ou inexistente,
                  falta de análises sistemáticas e planos de contingência. Maior
                  exposição a riscos e falta de preparação para eventos
                  adversos.{" "}
                </option>
                <option value="opcao2">
                  Nível 2: Desenvolvimento da gestão de riscos em andamento, com
                  análises ad hoc e planos de contingência limitados. Ainda não
                  abrangente ou sistemático.
                </option>
                <option value="opcao3">
                  Nível 3: Gestão de riscos adequada, com análises regulares e
                  abrangentes, identificação e avaliação dos principais riscos.
                  Planos de contingência estabelecidos para resposta efetiva.{" "}
                </option>
                <option value="opcao4">
                  Nível 4: Gestão de riscos altamente desenvolvida, com análises
                  avançadas, metodologias como análise quantitativa e planos de
                  contingência sólidos. Cultura de conscientização e
                  monitoramento contínuo dos riscos.
                </option>
              </select>
            </td>
            <td>
              <select
                className="import-select"
                onChange={(event) =>
                  handleOptionImportanciaChange(event, setImportancia8)
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
            <td className="pergunta">
              9. Como é feita a gestão do tempo e produtividade dos
              colaboradores? Existem práticas de monitoramento e incentivo à
              eficiência?
            </td>
            <td>
              <select
                className="opcao-select"
                onChange={(event) =>
                  handleOptionRespostaChange(event, setResposta9)
                }
              >
                <option disabled selected value>
                  Selecione uma resposta
                </option>
                <option value="opcao1">
                  Nível 1: Gestão do tempo e produtividade inexistente. Falta de
                  monitoramento e incentivo à eficiência. Baixa produtividade e
                  possíveis atrasos nos projetos.{" "}
                </option>
                <option value="opcao2">
                  Nível 2: Desenvolvimento da gestão do tempo e produtividade em
                  andamento. Algumas práticas de monitoramento, porém não
                  abrangentes. Incentivo à eficiência inconsistente.
                </option>
                <option value="opcao3">
                  Nível 3: Práticas adequadas de gestão do tempo e
                  produtividade. Uso de ferramentas de monitoramento e metas
                  claras. Incentivo à eficiência com reconhecimento e
                  recompensas.{" "}
                </option>
                <option value="opcao4">
                  Nível 4: Gestão do tempo e produtividade altamente eficiente.
                  Uso de ferramentas avançadas e metodologias como gerenciamento
                  de fluxo de trabalho. Cultura de eficiência e incentivos para
                  alto desempenho.
                </option>
              </select>
            </td>
            <td>
              <select
                className="import-select"
                onChange={(event) =>
                  handleOptionImportanciaChange(event, setImportancia9)
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
            <td className="pergunta">
              10. Existe um canal efetivo de comunicação interna na empresa? Os
              colaboradores se sentem envolvidos e informados sobre as decisões
              administrativas?
            </td>
            <td>
              <select
                className="opcao-select"
                onChange={(event) =>
                  handleOptionRespostaChange(event, setResposta10)
                }
              >
                <option disabled selected value>
                  Selecione uma resposta
                </option>
                <option value="opcao1">
                  Nível 1: A empresa carece de um canal de comunicação interna
                  efetivo ou inexistente, resultando em colaboradores
                  desinformados e pouco envolvidos nas decisões administrativas,
                  prejudicando o engajamento e motivação.{" "}
                </option>
                <option value="opcao2">
                  Nível 2: A empresa busca melhorar sua comunicação interna, mas
                  ainda está em desenvolvimento. Colaboradores têm níveis
                  variados de envolvimento e informação sobre decisões
                  administrativas.
                </option>
                <option value="opcao3">
                  Nível 3: A empresa tem canal de comunicação interno adequado,
                  com boletins, reuniões e intranet, mantendo colaboradores
                  informados e engajados, com espaço para feedback.
                </option>
                <option value="opcao4">
                  Nível 4: A empresa usa canais internos efetivos, incluindo
                  tecnologias avançadas, para garantir comunicação eficiente.
                  Colaboradores se sentem envolvidos, informados e incentivados
                  a participar ativamente da tomada de decisão. Cultura de
                  transparência e abertura é promovida.
                </option>
              </select>
            </td>
            <td>
              <select
                className="import-select"
                onChange={(event) =>
                  handleOptionImportanciaChange(event, setImportancia10)
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
          className="setaDireitaMaturidade"
          onClick={(e) => irParaFormMaturidade2(e)}
        />
      </div>
    </div>
  );
}

export default Maturidade1;
