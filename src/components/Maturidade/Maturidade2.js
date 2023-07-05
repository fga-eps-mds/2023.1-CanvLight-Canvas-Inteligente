import "./Maturidade2.css";
import React, { useState } from "react";

function Maturidade2(){
    function fecharFormMaturidade2(e) {
        e.preventDefault();
        let modalOverlay = document.querySelector(".modal-overlay");
        if (modalOverlay) {
          modalOverlay.parentNode.removeChild(modalOverlay);
        }
    
        let modal = document.querySelector(".areaRh");
        
        modal.style.display = "none";
        let medel = document.querySelector(".tela_3_form_interacao");
        medel.style.display = "none";
        let modal2 = document.querySelector(".confirma");
        modal2.style.display = "block";
      }
    
    function irParaAreaFin(e) {
        e.preventDefault();
    
        let modal = document.querySelector(".areaRh");
        modal.style.display = "none";

        let modal2 = document.querySelector(".areaFin");
        modal2.style.display = "block";
    }

    function clicouNaDuvida(){
        alert('duvida clicada!')
    }

    return(
        <div className="areaRh">
            <div className="formRh">
                <button className="close_area2" onClick={(e) => fecharFormMaturidade2(e)}></button>
                <div className="dot2_area2"></div>
                <div className="dot3_area2"></div>
                <h2 className="titulo">Área de Recursos Humanos</h2>
                <div onClick={clicouNaDuvida}  className='duvidaFin'></div>
                <div onClick={() => {window.open("tutorial#tut_canais_venda", "_blank");
                }}className="duvidaFin"></div>

                    <table>
                        <tr>
                            <th className="primeiro-canto">PERGUNTA</th>
                            <th>RESPOSTA</th>
                            <th className="segundo-canto">IMPORTANCIA</th>
                        </tr>

                        <tr>
                            <td className="pergunta1">1. Qual é a visão e missão da área de Recursos Humanos na empresa? 
                            Quais são as principais políticas e diretrizes de RH adotadas pela empresa?</td>
                            <td>
                                <select className="opcao-select">
                                    <option value="opcao1">Nível 1: A área de Recursos Humanos não possui uma visão e missão claras
                                    e não há políticas ou diretrizes estabelecidas.</option>
                                    <option value="opcao2">Nível 2: A área de Recursos Humanos tem uma visão e missão genéricas,
                                    porém pouco alinhadas com os objetivos estratégicos da empresa. Existem algumas políticas e diretrizes
                                    básicas, mas sua aplicação é inconsistente.</option>
                                    <option value="opcao3">Nível 3: A área de Recursos Humanos possui uma visão e missão alinhadas com a 
                                    estratégia da empresa, mas ainda precisa comunicá-las de forma mais efetiva aos colaboradores. 
                                    Há políticas e diretrizes estabelecidas, porém algumas áreas ainda não as seguem de maneira consistente.</option>
                                    <option value="opcao4">Nível 4:A área de Recursos Humanos tem uma visão e missão bem definidas e 
                                    amplamente comunicadas, alinhadas com os objetivos estratégicos da empresa. Existem políticas e 
                                    diretrizes abrangentes que são seguidas de forma consistente em todas as áreas, promovendo a igualdade, 
                                    o desenvolvimento dos colaboradores e a excelência no ambiente de trabalho.</option>
                                </select>
                            </td>
                            <td>
                                <select className="import-select">
                                    <option value="opcao1">Pouco importante</option>
                                    <option value="opcao2">Importante</option>
                                    <option value="opcao3">Muito importante</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta2">2. Como a estratégia de RH está alinhada com os objetivos organizacionais?</td>
                            <td>
                                <select className="opcao-select">
                                    <option value="opcao1">Nível 1: A estratégia de RH não está claramente alinhada com os objetivos 
                                    organizacionais. As iniciativas de RH são desenvolvidas 
                                    de forma isolada, sem uma conexão direta com as metas e prioridades da empresa. 
                                    A falta de alinhamento resulta em uma abordagem reativa e 
                                    limita o potencial de contribuição estratégica da área de RH.</option>
                                    <option value="opcao2">Nível 2: Existe uma consciência de que a estratégia de RH deve estar alinhada 
                                    com os objetivos organizacionais, mas o alinhamento ainda é parcial. Algumas iniciativas de RH podem 
                                    estar conectadas aos objetivos da empresa, mas ainda há lacunas na integração e no planejamento 
                                    estratégico conjunto. É necessário um esforço adicional para alinhar completamente a estratégia de RH 
                                    aos objetivos da organização.</option>
                                    <option value="opcao3">Nível 3: A estratégia de RH está em processo de alinhamento com os objetivos 
                                    organizacionais. Há uma compreensão crescente da importância dessa integração e esforços estão sendo 
                                    feitos para conectar as iniciativas de RH aos objetivos e metas da empresa. A colaboração entre a 
                                    área de RH e as demais áreas da organização está se fortalecendo, resultando em uma maior sinergia 
                                    e impacto estratégico.</option>
                                    <option value="opcao4">Nível 4: A estratégia de RH está plenamente alinhada com os objetivos organizacionais. 
                                    Existe uma integração estratégica total entre a área de RH e a alta direção da empresa. 
                                    As iniciativas de RH são desenvolvidas em estreita colaboração com as demais áreas, garantindo que 
                                    as ações de RH impulsionem diretamente os resultados e metas organizacionais. O alinhamento 
                                    estratégico de RH é reconhecido como um fator crítico para o sucesso da organização.</option>
                                </select>
                            </td>
                            <td>
                                <select className="import-select">
                                    <option value="opcao1">Pouco importante</option>
                                    <option value="opcao2">Importante</option>
                                    <option value="opcao3">Muito importante</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta3">3. Existe um planejamento de sucessão e desenvolvimento de lideranças?</td>
                            <td>
                                <select className="opcao-select">
                                    <option value="opcao1">Nível 1: A empresa não possui um planejamento de sucessão e 
                                    desenvolvimento de lideranças formalizado. A promoção e identificação de talentos são 
                                    tratadas de forma reativa e individual. Não há um foco estratégico no desenvolvimento de 
                                    líderes futuros, o que pode resultar em lacunas de liderança e falta de continuidade nas 
                                    posições-chave.</option>
                                    <option value="opcao2">Nível 2: A empresa reconhece a importância do planejamento de sucessão 
                                    e desenvolvimento de lideranças, mas as práticas ainda estão em estágio inicial. Pode haver algumas 
                                    iniciativas pontuais para identificar talentos e fornecer oportunidades de desenvolvimento, mas não 
                                    há um programa estruturado de sucessão e plano de carreira para líderes. A necessidade de investir 
                                    mais na formação de futuros líderes é identificada.</option>
                                    <option value="opcao3">Nível 3: A empresa possui um planejamento de sucessão e desenvolvimento de 
                                    lideranças estabelecido. Existe um programa estruturado para identificar talentos internos, criar planos 
                                    de carreira e fornecer oportunidades de desenvolvimento específicas para a preparação de futuros líderes. 
                                    O plano é comunicado e implementado de forma consistente, garantindo uma pipeline de liderança sólida 
                                    para a organização.</option>
                                    <option value="opcao4">Nível 4: A empresa possui um planejamento de sucessão e desenvolvimento de lideranças 
                                    avançado e integrado à estratégia de negócios. Há uma cultura de desenvolvimento de talentos em todos os 
                                    níveis hierárquicos, com programas de mentoria, rotação de cargos e investimento em programas de desenvolvimento 
                                    de liderança. O desenvolvimento de líderes é uma prioridade e está alinhado às necessidades futuras da empresa.</option>
                                </select>
                            </td>
                            <td>
                                <select className="import-select">
                                    <option value="opcao1">Pouco importante</option>
                                    <option value="opcao2">Importante</option>
                                    <option value="opcao3">Muito importante</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta4">4. Como é feito o processo de recrutamento e seleção na empresa? 
                            Existe um programa de integração para os novos colaboradores?</td>
                            <td>
                                <select className="opcao-select">
                                    <option value="opcao1">Nível 1: O processo de recrutamento e seleção na empresa é pouco estruturado
                                    e não segue um padrão definido. Não há um programa de integração para os novos colaboradores.</option>
                                    <option value="opcao2">Nível 2: A empresa possui um processo básico de recrutamento e seleção, 
                                    porém não é totalmente padronizado. Não há um programa formal de integração para os novos colaboradores.</option>
                                    <option value="opcao3">Nível 3: A empresa possui um processo de recrutamento e seleção bem definido, 
                                    seguindo critérios claros e estabelecendo etapas específicas. Existe um programa de integração para 
                                    os novos colaboradores, mas ainda pode ser aprimorado em termos de abrangência e suporte oferecido.</option>
                                    <option value="opcao4">Nível 4: A empresa possui um processo de recrutamento e seleção altamente estruturado, 
                                    com etapas bem definidas e critérios rigorosos. Além disso, há um programa de integração abrangente e eficaz 
                                    para os novos colaboradores, oferecendo suporte e facilitando sua adaptação ao ambiente de trabalho.</option>
                                </select>
                            </td>
                            <td>
                            <   select className="import-select">
                                    <option value="opcao1">Pouco importante</option>
                                    <option value="opcao2">Importante</option>
                                    <option value="opcao3">Muito importante</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta5">5. Quais são os critérios utilizados para avaliar e selecionar candidatos? 
                            Como é medido o sucesso dos processos de recrutamento e seleção?</td>
                            <td>
                                <select className="opcao-select">
                                    <option value="opcao1">Nível 1: A empresa não possui critérios claros para avaliar e selecionar candidatos, 
                                    e não há medidas estabelecidas para medir o sucesso dos processos de recrutamento e seleção.</option>
                                    <option value="opcao2">Nível 2: A empresa utiliza critérios básicos para avaliar e selecionar candidatos, 
                                    como experiência e habilidades relevantes, mas não há uma estrutura consistente. O sucesso dos processos de 
                                    recrutamento e seleção não é mensurado adequadamente.</option>
                                    <option value="opcao3">Nível 3: A empresa utiliza critérios sólidos para avaliar e selecionar candidatos, 
                                    considerando aspectos como competências técnicas e comportamentais. Existe um acompanhamento básico do sucesso 
                                    dos processos de recrutamento e seleção, mas pode ser aprimorado.</option>
                                    <option value="opcao4">Nível 4: A empresa utiliza critérios específicos e bem definidos para avaliar e selecionar 
                                    candidatos, levando em consideração competências técnicas, comportamentais e sociais. Há uma medição clara e sistemática 
                                    do sucesso dos processos de recrutamento e seleção, por meio de indicadores de desempenho, taxa de retenção e satisfação 
                                    dos contratados.</option>
                                </select>
                            </td>
                            <td>
                                <select className="import-select">
                                    <option value="opcao1">Pouco importante</option>
                                    <option value="opcao2">Importante</option>
                                    <option value="opcao3">Muito importante</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta6">6. Quais são os programas de treinamento e desenvolvimento oferecidos aos colaboradores? 
                            Como é feita a identificação das necessidades de treinamento individual e coletivo?</td>
                            <td>
                                <select className="opcao-select">
                                    <option value="opcao1">Nível 1: A empresa não possui programas de treinamento e desenvolvimento formalizados 
                                    e não realiza a identificação das necessidades de treinamento individual e coletivo. </option>
                                    <option value="opcao2">Nível 2: A empresa oferece treinamentos básicos e genéricos aos colaboradores, 
                                    mas não possui um processo estruturado para identificar as necessidades de treinamento individual e coletivo.</option>
                                    <option value="opcao3">Nível 3: A empresa oferece programas de treinamento e desenvolvimento relevantes para os 
                                    colaboradores, com base em análises periódicas de necessidades de treinamento. No entanto, há margem para aprimorar 
                                    a personalização dos treinamentos de acordo com as necessidades individuais.</option>
                                    <option value="opcao4">Nível 4: A empresa possui uma ampla variedade de programas de treinamento e desenvolvimento, 
                                    adaptados às necessidades individuais e coletivas dos colaboradores. A identificação das necessidades de treinamento 
                                    é realizada de forma sistemática, utilizando avaliações de desempenho, feedback dos gestores e levantamentos de competências.</option>
                                </select>
                            </td>
                            <td>
                            <   select className="import-select">
                                    <option value="opcao1">Pouco importante</option>
                                    <option value="opcao2">Importante</option>
                                    <option value="opcao3">Muito importante</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta7">7. Existe um plano de carreira e oportunidades de crescimento profissional na empresa? 
                            Como é avaliado o desempenho dos colaboradores?</td>
                            <td>
                                <select className="opcao-select">
                                    <option value="opcao1">Nível 1: A empresa não possui um plano de carreira ou oportunidades claras de crescimento
                                    profissional. O desempenho dos colaboradores não é avaliado ou não há um sistema estruturado para isso.</option>
                                    <option value="opcao2">Nível 2: A empresa possui um plano de carreira básico, mas as oportunidades de crescimento 
                                    profissional são limitadas. O desempenho dos colaboradores é avaliado de forma irregular ou não há um sistema 
                                    formal para isso.</option>
                                    <option value="opcao3">Nível 3: A empresa possui um plano de carreira definido, com oportunidades de crescimento 
                                    profissional identificadas. O desempenho dos colaboradores é avaliado regularmente, porém o processo de avaliação 
                                    ainda pode ser aprimorado.</option>
                                    <option value="opcao4">Nível 4: A empresa possui um plano de carreira estruturado, com amplas oportunidades de 
                                    crescimento profissional. O desempenho dos colaboradores é avaliado de forma sistemática e regular, com critérios 
                                    claros e feedback construtivo, permitindo o desenvolvimento individual e reconhecimento do mérito.</option>
                                </select>
                            </td>
                            <td>
                                <select className="import-select">
                                    <option value="opcao1">Pouco importante</option>
                                    <option value="opcao2">Importante</option>
                                    <option value="opcao3">Muito importante</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta8">8. Como é avaliado o clima organizacional na empresa? 
                            Como é feita a gestão de conflitos e a promoção de um ambiente de trabalho saudável?</td>
                            <td>
                                <select className="opcao-select">
                                    <option value="opcao1">Nível 1: A empresa não possui um processo formal de avaliação do clima organizacional. 
                                    A gestão de conflitos e a promoção de um ambiente de trabalho saudável são negligenciadas, resultando em um 
                                    ambiente tenso e pouco colaborativo. </option>
                                    <option value="opcao2">Nível 2: DA empresa realiza avaliações esporádicas do clima organizacional, 
                                    mas a abordagem é limitada e não abrange todos os aspectos relevantes. A gestão de conflitos é reativa, 
                                    lidando apenas com problemas evidentes, e não há uma estratégia clara para promover um ambiente de trabalho saudável.</option>
                                    <option value="opcao3">Nível 3: A empresa realiza avaliações periódicas do clima organizacional, buscando identificar 
                                    pontos de insatisfação e áreas de melhoria. A gestão de conflitos é realizada de forma adequada, mas ainda há espaço
                                    para aprimorar a resolução proativa de conflitos. A empresa promove ações pontuais para incentivar um ambiente de 
                                    trabalho saudável, mas ainda não possui uma abordagem abrangente. </option>
                                    <option value="opcao4">Nível 4: A empresa realiza avaliações frequentes e abrangentes do clima organizacional, 
                                    utilizando diversas ferramentas e métricas. A gestão de conflitos é proativa e eficiente, com estratégias para 
                                    prevenção e resolução de conflitos de forma saudável. A empresa promove um ambiente de trabalho saudável por meio 
                                    de programas de bem-estar, reconhecimento e desenvolvimento profissional, criando uma cultura de colaboração e 
                                    engajamento entre os colaboradores.</option>
                                </select>
                            </td>
                            <td>
                            <   select className="import-select">
                                    <option value="opcao1">Pouco importante</option>
                                    <option value="opcao2">Importante</option>
                                    <option value="opcao3">Muito importante</option>
                                </select>
                            </td>
                        </tr>
                        
                        <tr>
                            <td className="pergunta9">9. Quais são as práticas de gestão de pessoas adotadas para motivar e engajar os colaboradores? 
                            Existe um sistema de remuneração e benefícios competitivo e equitativo?</td>
                            <td>
                                <select className="opcao-select">
                                    <option value="opcao1">Nível 1: A empresa não possui práticas de gestão de pessoas para motivar e engajar 
                                    os colaboradores. O sistema de remuneração e benefícios é desatualizado e não competitivo. </option>
                                    <option value="opcao2">Nível 2: A empresa adota algumas práticas de gestão de pessoas para motivar e engajar 
                                    os colaboradores, mas sua eficácia é limitada. O sistema de remuneração e benefícios é competitivo, 
                                    mas pode haver oportunidades de melhoria em termos de equidade.</option>
                                    <option value="opcao3">Nível 3: A empresa possui práticas de gestão de pessoas para motivar e engajar os 
                                    colaboradores, com ações pontuais de reconhecimento e desenvolvimento. O sistema de remuneração e benefícios 
                                    é equitativo, porém não é competitivo em relação ao mercado. </option>
                                    <option value="opcao4">Nível 4: GA empresa adota práticas avançadas de gestão de pessoas, focadas na motivação 
                                    e engajamento dos colaboradores, como programas de reconhecimento, desenvolvimento de carreira e feedback regular. 
                                    O sistema de remuneração e benefícios é competitivo e equitativo, alinhado com as melhores práticas do mercado.</option>
                                </select>
                            </td>
                            <td>
                                <select className="import-select">
                                    <option value="opcao1">Pouco importante</option>
                                    <option value="opcao2">Importante</option>
                                    <option value="opcao3">Muito importante</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                 <div onClick={(e) => irParaAreaFin(e)} className='setaDireita'></div>
            </div> 
        </div>      
    );            

}

export default Maturidade2;