import "./Maturidade2.css";
import rightArrow from "../../images/seta-direita.png";
import React, { useState } from "react";

function Maturidade2({state, onPorcentagemRhChange}) {

  // Primeiro trecho de selectResposta
  var [resposta1, setResposta1] = useState('');
  // Segundo trecho de selectResposta
  var [resposta2, setResposta2] = useState('');
  // Terceiro trecho de selectResposta
  var [resposta3, setResposta3] = useState('');
  // Quarto trecho de selectResposta
  var [resposta4, setResposta4] = useState('');
  // Quinto trecho de selectResposta
  var [resposta5, setResposta5] = useState('');
  // Sexto trecho de selectResposta
  var [resposta6, setResposta6] = useState('');
  // Sétimo trecho de selectResposta
  var [resposta7, setResposta7] = useState('');
  // Oitavo trecho de selectResposta
  var [resposta8, setResposta8] = useState('');
  // Nono trecho de selectResposta
  var [resposta9, setResposta9] = useState('');

  // Primeiro trecho de selectImportancia
  var [importancia1, setImportancia1] = useState('');
  // Segundo trecho de selectImportancia
  var [importancia2, setImportancia2] = useState('');
  // Terceiro trecho de selectImportancia
  var [importancia3, setImportancia3] = useState('');
  // Quarto trecho de selectImportancia
  var [importancia4, setImportancia4] = useState('');
  // Quinto trecho de selectImportancia
  var [importancia5, setImportancia5] = useState('');
  // Sexto trecho de selectImportancia
  var [importancia6, setImportancia6] = useState('');
  // Setimo trecho de selectImportancia
  var [importancia7, setImportancia7] = useState('');
  // Oitavo trecho de selectImportancia
  var [importancia8, setImportancia8] = useState('');
  // Nono trecho de selectImportancia
  var [importancia9, setImportancia9] = useState('');



  // Pega o valor da resposta e transforma em numero
  const handleOptionRespostaChange = (event, respostaSetter) => {
      const selectedOption = event.target.value;

      let resposta;
      if (selectedOption === 'opcao1') {
          resposta = 1;
      } else if (selectedOption === 'opcao2') {
          resposta = 2;
      } else if (selectedOption === 'opcao3') {
          resposta = 3;
      } else if (selectedOption === 'opcao4') {
          resposta = 4;
      }
    
      respostaSetter(resposta);
  };

  // Pega o valor da importância e transforma em peso
  const handleOptionImportanciaChange = (event, importanciaSetter) => {
      const selectedOption = event.target.value;
      
      let importancia;
      if (selectedOption === 'opcao1') {
          importancia = 1;
      } else if (selectedOption === 'opcao2') {
          importancia = 2;
      } else if (selectedOption === 'opcao3') {
          importancia = 3;
      }
    
      importanciaSetter(importancia);
  };

  

  // eslint-disable-next-line
  function calculaRh(){
      var multiplicacao = null;

      multiplicacao += resposta1*importancia1;
      multiplicacao += resposta2*importancia2;
      multiplicacao += resposta3*importancia3;
      multiplicacao += resposta4*importancia4;
      multiplicacao += resposta5*importancia5;
      multiplicacao += resposta6*importancia6;
      multiplicacao += resposta7*importancia7;
      multiplicacao += resposta8*importancia8;
      multiplicacao += resposta9*importancia9;

      var resultado = multiplicacao/54;
      resultado = resultado*100;

      onPorcentagemRhChange(resultado.toFixed(0));
  }

  function fecharFormMaturidade2(e) {
    e.preventDefault();
    let modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.parentNode.removeChild(modalOverlay);
    }

    let modal = document.querySelector(".areaRh");
    modal.style.display = "none";

    let modal2 = document.querySelector(".confirma");
    modal2.style.display = "block";
  }

  function irParaFormMaturidade1(e) {
    e.preventDefault();

    let modal = document.querySelector(".areaAdm");
    modal.style.display = "block";

    let modal2 = document.querySelector(".areaRh");
    modal2.style.display = "none";
  }

  function irParaFormMaturidade3(e) {
    e.preventDefault();

    let modal = document.querySelector(".areaRh");
    modal.style.display = "none";

    let modal2 = document.querySelector(".areaFin");
    modal2.style.display = "block";
  }

  return (
    <div className="areaRh">
      <div className="formRh">
        <button
          className="close_area2"
          onClick={(e) => fecharFormMaturidade2(e)}
        ></button>
        <div className="dot2_area2"></div>
        <div className="dot3_area2"></div>
        <h2 className="titulo_2_maturidade">Área de Recursos Humanos</h2>
        <div
          onClick={() => {
            window.open("tutorial#tut_canais_venda", "_blank");
          }}
          className="duvidaFin"
        ></div>

        <table>
          <tr>
            <th className="primeiro-canto">PERGUNTA</th>
            <th>RESPOSTA</th>
            <th className="segundo-canto">IMPORTANCIA</th>
          </tr>

          <tr>
            <td className="pergunta1">
              1. Qual é a visão e missão da área de Recursos Humanos na empresa?
              Quais são as principais políticas e diretrizes de RH adotadas pela
              empresa?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta1)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1">
                  Nível 1: A área de Recursos Humanos não possui uma visão e
                  missão claras e não há políticas ou diretrizes estabelecidas.
                </option>
                <option value="opcao2">
                  Nível 2: A área de Recursos Humanos tem uma visão e missão
                  genéricas, porém pouco alinhadas com os objetivos estratégicos
                  da empresa. Existem algumas políticas e diretrizes básicas,
                  mas sua aplicação é inconsistente.
                </option>
                <option value="opcao3">
                  Nível 3: A área de Recursos Humanos possui uma visão e missão
                  alinhadas com a estratégia da empresa, mas ainda precisa
                  comunicá-las de forma mais efetiva aos colaboradores. Há
                  políticas e diretrizes estabelecidas, porém algumas áreas
                  ainda não as seguem de maneira consistente.
                </option>
                <option value="opcao4">
                  Nível 4:A área de Recursos Humanos tem uma visão e missão bem
                  definidas e amplamente comunicadas, alinhadas com os objetivos
                  estratégicos da empresa. Existem políticas e diretrizes
                  abrangentes que são seguidas de forma consistente em todas as
                  áreas, promovendo a igualdade, o desenvolvimento dos
                  colaboradores e a excelência no ambiente de trabalho.
                </option>
              </select>
            </td>
            <td>
              <select className="import-select"
                      onChange={(event) => handleOptionImportanciaChange(event, setImportancia1)}>
                <option disabled selected value>Selecione um nível de importância</option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta2">
              2. Como a estratégia de RH está alinhada com os objetivos
              organizacionais?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta2)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1">
                  Nível 1: A estratégia de RH não está claramente alinhada com
                  os objetivos organizacionais. As iniciativas de RH são
                  desenvolvidas de forma isolada, sem uma conexão direta com as
                  metas e prioridades da empresa. A falta de alinhamento resulta
                  em uma abordagem reativa e limita o potencial de contribuição
                  estratégica da área de RH.
                </option>
                <option value="opcao2">
                  Nível 2: Existe uma consciência de que a estratégia de RH deve
                  estar alinhada com os objetivos organizacionais, mas o
                  alinhamento ainda é parcial. Algumas iniciativas de RH podem
                  estar conectadas aos objetivos da empresa, mas ainda há
                  lacunas na integração e no planejamento estratégico conjunto.
                  É necessário um esforço adicional para alinhar completamente a
                  estratégia de RH aos objetivos da organização.
                </option>
                <option value="opcao3">
                  Nível 3: A estratégia de RH está em processo de alinhamento
                  com os objetivos organizacionais. Há uma compreensão crescente
                  da importância dessa integração e esforços estão sendo feitos
                  para conectar as iniciativas de RH aos objetivos e metas da
                  empresa. A colaboração entre a área de RH e as demais áreas da
                  organização está se fortalecendo, resultando em uma maior
                  sinergia e impacto estratégico.
                </option>
                <option value="opcao4">
                  Nível 4: A estratégia de RH está plenamente alinhada com os
                  objetivos organizacionais. Existe uma integração estratégica
                  total entre a área de RH e a alta direção da empresa. As
                  iniciativas de RH são desenvolvidas em estreita colaboração
                  com as demais áreas, garantindo que as ações de RH impulsionem
                  diretamente os resultados e metas organizacionais. O
                  alinhamento estratégico de RH é reconhecido como um fator
                  crítico para o sucesso da organização.
                </option>
              </select>
            </td>
            <td>
              <select className="import-select"
                      onChange={(event) => handleOptionImportanciaChange(event, setImportancia2)}>
                <option disabled selected value>Selecione um nível de importância</option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta3">
              3. Existe um planejamento de sucessão e desenvolvimento de
              lideranças?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta3)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1">
                  Nível 1: A empresa não possui um planejamento de sucessão e
                  desenvolvimento de lideranças formalizado. A promoção e
                  identificação de talentos são tratadas de forma reativa e
                  individual. Não há um foco estratégico no desenvolvimento de
                  líderes futuros, o que pode resultar em lacunas de liderança e
                  falta de continuidade nas posições-chave.
                </option>
                <option value="opcao2">
                  Nível 2: A empresa reconhece a importância do planejamento de
                  sucessão e desenvolvimento de lideranças, mas as práticas
                  ainda estão em estágio inicial. Pode haver algumas iniciativas
                  pontuais para identificar talentos e fornecer oportunidades de
                  desenvolvimento, mas não há um programa estruturado de
                  sucessão e plano de carreira para líderes. A necessidade de
                  investir mais na formação de futuros líderes é identificada.
                </option>
                <option value="opcao3">
                  Nível 3: A empresa possui um planejamento de sucessão e
                  desenvolvimento de lideranças estabelecido. Existe um programa
                  estruturado para identificar talentos internos, criar planos
                  de carreira e fornecer oportunidades de desenvolvimento
                  específicas para a preparação de futuros líderes. O plano é
                  comunicado e implementado de forma consistente, garantindo uma
                  pipeline de liderança sólida para a organização.
                </option>
                <option value="opcao4">
                  Nível 4: A empresa possui um planejamento de sucessão e
                  desenvolvimento de lideranças avançado e integrado à
                  estratégia de negócios. Há uma cultura de desenvolvimento de
                  talentos em todos os níveis hierárquicos, com programas de
                  mentoria, rotação de cargos e investimento em programas de
                  desenvolvimento de liderança. O desenvolvimento de líderes é
                  uma prioridade e está alinhado às necessidades futuras da
                  empresa.
                </option>
              </select>
            </td>
            <td>
              <select className="import-select"
                      onChange={(event) => handleOptionImportanciaChange(event, setImportancia3)}>
                <option disabled selected value>Selecione um nível de importância</option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta4">
              4. Como é feito o processo de recrutamento e seleção na empresa?
              Existe um programa de integração para os novos colaboradores?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta4)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1">
                  Nível 1: O processo de recrutamento e seleção na empresa é
                  pouco estruturado e não segue um padrão definido. Não há um
                  programa de integração para os novos colaboradores.
                </option>
                <option value="opcao2">
                  Nível 2: A empresa possui um processo básico de recrutamento e
                  seleção, porém não é totalmente padronizado. Não há um
                  programa formal de integração para os novos colaboradores.
                </option>
                <option value="opcao3">
                  Nível 3: A empresa possui um processo de recrutamento e
                  seleção bem definido, seguindo critérios claros e
                  estabelecendo etapas específicas. Existe um programa de
                  integração para os novos colaboradores, mas ainda pode ser
                  aprimorado em termos de abrangência e suporte oferecido.
                </option>
                <option value="opcao4">
                  Nível 4: A empresa possui um processo de recrutamento e
                  seleção altamente estruturado, com etapas bem definidas e
                  critérios rigorosos. Além disso, há um programa de integração
                  abrangente e eficaz para os novos colaboradores, oferecendo
                  suporte e facilitando sua adaptação ao ambiente de trabalho.
                </option>
              </select>
            </td>
            <td>
              <select className="import-select"
                      onChange={(event) => handleOptionImportanciaChange(event, setImportancia4)}>
                <option disabled selected value>Selecione um nível de importância</option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta5">
              5. Quais são os critérios utilizados para avaliar e selecionar
              candidatos? Como é medido o sucesso dos processos de recrutamento
              e seleção?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta5)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1">
                  Nível 1: A empresa não possui critérios claros para avaliar e
                  selecionar candidatos, e não há medidas estabelecidas para
                  medir o sucesso dos processos de recrutamento e seleção.
                </option>
                <option value="opcao2">
                  Nível 2: A empresa utiliza critérios básicos para avaliar e
                  selecionar candidatos, como experiência e habilidades
                  relevantes, mas não há uma estrutura consistente. O sucesso
                  dos processos de recrutamento e seleção não é mensurado
                  adequadamente.
                </option>
                <option value="opcao3">
                  Nível 3: A empresa utiliza critérios sólidos para avaliar e
                  selecionar candidatos, considerando aspectos como competências
                  técnicas e comportamentais. Existe um acompanhamento básico do
                  sucesso dos processos de recrutamento e seleção, mas pode ser
                  aprimorado.
                </option>
                <option value="opcao4">
                  Nível 4: A empresa utiliza critérios específicos e bem
                  definidos para avaliar e selecionar candidatos, levando em
                  consideração competências técnicas, comportamentais e sociais.
                  Há uma medição clara e sistemática do sucesso dos processos de
                  recrutamento e seleção, por meio de indicadores de desempenho,
                  taxa de retenção e satisfação dos contratados.
                </option>
              </select>
            </td>
            <td>
              <select className="import-select"
                      onChange={(event) => handleOptionImportanciaChange(event, setImportancia5)}>
                <option disabled selected value>Selecione um nível de importância</option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta6">
              6. Quais são os programas de treinamento e desenvolvimento
              oferecidos aos colaboradores? Como é feita a identificação das
              necessidades de treinamento individual e coletivo?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta6)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1">
                  Nível 1: A empresa não possui programas de treinamento e
                  desenvolvimento formalizados e não realiza a identificação das
                  necessidades de treinamento individual e coletivo.{" "}
                </option>
                <option value="opcao2">
                  Nível 2: A empresa oferece treinamentos básicos e genéricos
                  aos colaboradores, mas não possui um processo estruturado para
                  identificar as necessidades de treinamento individual e
                  coletivo.
                </option>
                <option value="opcao3">
                  Nível 3: A empresa oferece programas de treinamento e
                  desenvolvimento relevantes para os colaboradores, com base em
                  análises periódicas de necessidades de treinamento. No
                  entanto, há margem para aprimorar a personalização dos
                  treinamentos de acordo com as necessidades individuais.
                </option>
                <option value="opcao4">
                  Nível 4: A empresa possui uma ampla variedade de programas de
                  treinamento e desenvolvimento, adaptados às necessidades
                  individuais e coletivas dos colaboradores. A identificação das
                  necessidades de treinamento é realizada de forma sistemática,
                  utilizando avaliações de desempenho, feedback dos gestores e
                  levantamentos de competências.
                </option>
              </select>
            </td>
            <td>
              <select className="import-select"
                      onChange={(event) => handleOptionImportanciaChange(event, setImportancia6)}>
                <option disabled selected value>Selecione um nível de importância</option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta7">
              7. Existe um plano de carreira e oportunidades de crescimento
              profissional na empresa? Como é avaliado o desempenho dos
              colaboradores?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta7)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1">
                  Nível 1: A empresa não possui um plano de carreira ou
                  oportunidades claras de crescimento profissional. O desempenho
                  dos colaboradores não é avaliado ou não há um sistema
                  estruturado para isso.
                </option>
                <option value="opcao2">
                  Nível 2: A empresa possui um plano de carreira básico, mas as
                  oportunidades de crescimento profissional são limitadas. O
                  desempenho dos colaboradores é avaliado de forma irregular ou
                  não há um sistema formal para isso.
                </option>
                <option value="opcao3">
                  Nível 3: A empresa possui um plano de carreira definido, com
                  oportunidades de crescimento profissional identificadas. O
                  desempenho dos colaboradores é avaliado regularmente, porém o
                  processo de avaliação ainda pode ser aprimorado.
                </option>
                <option value="opcao4">
                  Nível 4: A empresa possui um plano de carreira estruturado,
                  com amplas oportunidades de crescimento profissional. O
                  desempenho dos colaboradores é avaliado de forma sistemática e
                  regular, com critérios claros e feedback construtivo,
                  permitindo o desenvolvimento individual e reconhecimento do
                  mérito.
                </option>
              </select>
            </td>
            <td>
              <select className="import-select"
                      onChange={(event) => handleOptionImportanciaChange(event, setImportancia7)}>
                <option disabled selected value>Selecione um nível de importância</option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta8">
              8. Como é avaliado o clima organizacional na empresa? Como é feita
              a gestão de conflitos e a promoção de um ambiente de trabalho
              saudável?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta8)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1">
                  Nível 1: A empresa não possui um processo formal de avaliação
                  do clima organizacional. A gestão de conflitos e a promoção de
                  um ambiente de trabalho saudável são negligenciadas,
                  resultando em um ambiente tenso e pouco colaborativo.{" "}
                </option>
                <option value="opcao2">
                  Nível 2: DA empresa realiza avaliações esporádicas do clima
                  organizacional, mas a abordagem é limitada e não abrange todos
                  os aspectos relevantes. A gestão de conflitos é reativa,
                  lidando apenas com problemas evidentes, e não há uma
                  estratégia clara para promover um ambiente de trabalho
                  saudável.
                </option>
                <option value="opcao3">
                  Nível 3: A empresa realiza avaliações periódicas do clima
                  organizacional, buscando identificar pontos de insatisfação e
                  áreas de melhoria. A gestão de conflitos é realizada de forma
                  adequada, mas ainda há espaço para aprimorar a resolução
                  proativa de conflitos. A empresa promove ações pontuais para
                  incentivar um ambiente de trabalho saudável, mas ainda não
                  possui uma abordagem abrangente.{" "}
                </option>
                <option value="opcao4">
                  Nível 4: A empresa realiza avaliações frequentes e abrangentes
                  do clima organizacional, utilizando diversas ferramentas e
                  métricas. A gestão de conflitos é proativa e eficiente, com
                  estratégias para prevenção e resolução de conflitos de forma
                  saudável. A empresa promove um ambiente de trabalho saudável
                  por meio de programas de bem-estar, reconhecimento e
                  desenvolvimento profissional, criando uma cultura de
                  colaboração e engajamento entre os colaboradores.
                </option>
              </select>
            </td>
            <td>
              <select className="import-select"
                      onChange={(event) => handleOptionImportanciaChange(event, setImportancia8)}>
                <option disabled selected value>Selecione um nível de importância</option>
                <option value="opcao1">Pouco importante</option>
                <option value="opcao2">Importante</option>
                <option value="opcao3">Muito importante</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="pergunta9">
              9. Quais são as práticas de gestão de pessoas adotadas para
              motivar e engajar os colaboradores? Existe um sistema de
              remuneração e benefícios competitivo e equitativo?
            </td>
            <td>
              <select className="opcao-select"
                      onChange={(event) => handleOptionRespostaChange(event, setResposta9)}>
                <option disabled selected value>Selecione uma resposta</option>
                <option value="opcao1">
                  Nível 1: A empresa não possui práticas de gestão de pessoas
                  para motivar e engajar os colaboradores. O sistema de
                  remuneração e benefícios é desatualizado e não competitivo.{" "}
                </option>
                <option value="opcao2">
                  Nível 2: A empresa adota algumas práticas de gestão de pessoas
                  para motivar e engajar os colaboradores, mas sua eficácia é
                  limitada. O sistema de remuneração e benefícios é competitivo,
                  mas pode haver oportunidades de melhoria em termos de
                  equidade.
                </option>
                <option value="opcao3">
                  Nível 3: A empresa possui práticas de gestão de pessoas para
                  motivar e engajar os colaboradores, com ações pontuais de
                  reconhecimento e desenvolvimento. O sistema de remuneração e
                  benefícios é equitativo, porém não é competitivo em relação ao
                  mercado.{" "}
                </option>
                <option value="opcao4">
                  Nível 4: GA empresa adota práticas avançadas de gestão de
                  pessoas, focadas na motivação e engajamento dos colaboradores,
                  como programas de reconhecimento, desenvolvimento de carreira
                  e feedback regular. O sistema de remuneração e benefícios é
                  competitivo e equitativo, alinhado com as melhores práticas do
                  mercado.
                </option>
              </select>
            </td>
            <td>
              <select className="import-select"
                      onChange={(event) => handleOptionImportanciaChange(event, setImportancia9)}>
                <option disabled selected value>Selecione um nível de importância</option>
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
                        className="setaEsquerdaMaturidade_2"
                        onClick={(e) => irParaFormMaturidade1(e)}/>
        <img
                        src={rightArrow}
                        alt="Seta"
                        className="setaDireitaMaturidade_2"
                        onClick={(e) => irParaFormMaturidade3(e)}/>
      </div>
    </div>
  );
}

export default Maturidade2;
