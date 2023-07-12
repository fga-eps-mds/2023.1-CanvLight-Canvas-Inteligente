import rightArrow from "../../images/seta-direita.png";
import "./Maturidade4.css";
import React, { useState } from "react";

function Maturidade4({state, onPorcentagemMktChange}){

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
    // Décimo trecho de selectResposta
    var [resposta10, setResposta10] = useState('');

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
    // Decimo trecho de selectImportancia
    var [importancia10, setImportancia10] = useState('');



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
    function calculaMkt(){
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
        multiplicacao += resposta10*importancia10;

        var resultado = multiplicacao/60;
        resultado = resultado*100;

        onPorcentagemMktChange(resultado.toFixed(0));
    }

    function fecharFormMaturidade4(e) {
        e.preventDefault();
        let modalOverlay = document.querySelector(".modal-overlay");
        if (modalOverlay) {
          modalOverlay.parentNode.removeChild(modalOverlay);
        }
    
        let modal = document.querySelector(".areaMkt");
        modal.style.display = "none";

        let modal2 = document.querySelector(".confirma");
        modal2.style.display = "block";
    }
    
    function irParaFormMaturidade3(e) {
        e.preventDefault();
    
        let modal = document.querySelector(".areaFin");
        modal.style.display = "block";

        let modal2 = document.querySelector(".areaMkt");
        modal2.style.display = "none";
    }

    function irParaFormMaturidade5(e) {
        e.preventDefault();
    
        let modal = document.querySelector(".areaMkt");
        modal.style.display = "none";

        let modal2 = document.querySelector(".areaResult");
        modal2.style.display = "block";
    }

    return(
        <div className="areaMkt">
            <div className="formMkt">
                <button className="close_area4" onClick={(e) => fecharFormMaturidade4(e)}></button>
                <div className="dot2_area4"></div>
                <div className="dot3_area4"></div>
                <h2 className="titulo_maturidade_4">Marketing</h2>
                <div onClick={() => {window.open("tutorial#tut_Maturidade", "_blank");
                }}className="duvidaMkt"></div>

                    <table>
                        <tr>
                            <th className="primeiro-canto">PERGUNTA</th>
                            <th>RESPOSTA</th>
                            <th className="segundo-canto">IMPORTANCIA</th>
                        </tr>

                        <tr>
                            <td className="pergunta1">1. Qual é a estratégia de marketing atual da empresa? Quais são 
                            os principais objetivos de marketing estabelecidos pela empresa? </td>
                            <td>
                                <select className="opcao-select"
                                        onChange={(event) => handleOptionRespostaChange(event, setResposta1)}>
                                    <option disabled selected value>Selecione uma resposta</option>
                                    <option value="opcao1">Nível 1: Estratégia de marketing pouco definida ou 
                                    inexistente, resultando em falta de direção e foco nas ações de marketing.
                                    </option>
                                    <option value="opcao2">Nível 2: Em desenvolvimento da estratégia de marketing,
                                     com elementos parciais definidos, mas ainda não abrangentes ou consistentes.
                                    </option>
                                    <option value="opcao3">Nível 3: Estratégia de marketing claramente definida,
                                     com objetivos específicos e mensuráveis, abrangendo segmentação, posicionamento e
                                      canais de comunicação.</option>
                                    <option value="opcao4">Nível Estratégia de marketing altamente desenvolvida e
                                     eficaz, alinhada com os objetivos organizacionais. Inclui abordagens avançadas de
                                      segmentação, branding, comunicação integrada e mensuração de resultados. Busca
                                       constante de inovação e adaptação para se manter competitiva.
                                    </option>
                                </select>
                            </td>
                            <td>
                            <   select className="import-select"
                                        onChange={(event) => handleOptionImportanciaChange(event, setImportancia1)}>
                                    <option disabled selected value>Selecione um nível de importância</option>
                                    <option value="opcao1">Pouco importante</option>
                                    <option value="opcao2">Importante</option>
                                    <option value="opcao3">Muito importante</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta2">2. Como a empresa define e segmenta seu público-alvo? 
                            Quais canais de marketing são utilizados para alcançar o público-alvo?</td>
                            <td>
                                <select className="opcao-select"
                                        onChange={(event) => handleOptionRespostaChange(event, setResposta2)}>
                                    <option disabled selected value>Selecione uma resposta</option>
                                    <option value="opcao1">Pouca definição e segmentação do público-alvo, 
                                    comunicação genérica e escolha inconsistente dos canais de marketing.
                                    </option>
                                    <option value="opcao2">Nível 2: Em processo de desenvolvimento na definição e
                                    segmentação do público-alvo, com algum entendimento básico dos perfis dos clientes. 
                                    Escolha de canais baseada em suposições ou experiências passadas.</option>
                                    <option value="opcao3">Nível 3: Definição clara e segmentação do público-alvo,
                                     identificando perfis de clientes com base em dados demográficos, comportamentais e 
                                     preferências. Escolha estratégica dos canais de marketing 
                                     alinhada ao público-alvo.</option>
                                    <option value="opcao4">Nível 4: Definição e segmentação avançada do 
                                    público-alvo, incluindo dados detalhados e personalizados. Escolha estratégica dos
                                     canais de marketing considerando a jornada do cliente. Busca constante por 
                                     inovação em novos canais e tecnologias.</option>
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
                            <td className="pergunta3">3. Como são desenvolvidos os produtos ou serviços oferecidos pela 
                            empresa?</td>
                            <td>
                                <select className="opcao-select"
                                        onChange={(event) => handleOptionRespostaChange(event, setResposta3)}>
                                    <option disabled selected value>Selecione uma resposta</option>
                                    <option value="opcao1">Nível 1: Ausência de processo 
                                    estruturado para o desenvolvimento de produtos ou serviços, resultando em abordagem
                                     improvisada e pouco planejada.
                                    </option>
                                    <option value="opcao2">Nível 2: Processo básico para o 
                                    desenvolvimento de produtos ou serviços, porém falta uma abordagem sistemática e 
                                    formalizada.
                                    </option>
                                    <option value="opcao3">Nível 3: Adoção de um processo estruturado
                                     para o desenvolvimento de produtos ou serviços, incluindo etapas de pesquisa,
                                      análise de mercado e feedback dos clientes, mas há espaço para melhorias e inovação.
                                    </option>
                                    <option value="opcao4">Nível 4: Processo avançado e bem definido 
                                    para o desenvolvimento de produtos ou serviços, abrangendo todas as etapas desde a 
                                    geração de ideias até o lançamento no mercado. Baseado em análise de dados, 
                                    pesquisa de mercado, feedback dos clientes e busca constante por inovação.
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
                            <td className="pergunta4">4. Quais estratégias de preço são adotadas e como são 
                            determinados os preços dos produtos ou serviços?</td>
                            <td>
                                <select className="opcao-select"
                                        onChange={(event) => handleOptionRespostaChange(event, setResposta4)}>
                                    <option disabled selected value>Selecione uma resposta</option>
                                    <option value="opcao1">Nível 1: Ausência de estratégias de preço claras, resultando
                                     em determinação arbitrária dos preços sem análise adequada de custos e concorrência.
                                    </option>
                                    <option value="opcao2">Nível 2: Adoção de estratégias de preço básicas, baseadas nos 
                                    custos de produção, mas sem considerar fatores externos ou percepção de valor pelo
                                     cliente.
                                    </option>
                                    <option value="opcao3">Nível 3: Utilização de estratégias de preço mais avançadas, 
                                    considerando não apenas os custos, mas também a concorrência e a demanda de mercado.
                                     Porém, há espaço para aprimoramentos na análise de precificação.
                                    </option>
                                    <option value="opcao4"> Estratégias de preço bem definidas e alinhadas com os 
                                    objetivos de negócio. Determinação dos preços dos produtos ou serviços por meio de
                                     uma análise abrangente que considera custos, concorrência, valor percebido pelo 
                                     cliente e segmentação de mercado. Essa abordagem permite maximizar os lucros e 
                                     atender às necessidades dos clientes de forma eficaz.
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
                            <td className="pergunta5">5. Quais estratégias de promoção são utilizadas para divulgar os
                             produtos ou serviços?</td>
                            <td>
                                <select className="opcao-select"
                                        onChange={(event) => handleOptionRespostaChange(event, setResposta5)}>
                                    <option disabled selected value>Selecione uma resposta</option>
                                    <option value="opcao1">Nível 1: Ausência de estratégias de promoção definidas ou 
                                    consistentes para divulgar produtos ou serviços..</option>
                                    <option value="opcao2">Nível 2: Utilização de estratégias de promoção básicas, como 
                                    anúncios genéricos dispersos em diferentes canais de comunicação.</option>
                                    <option value="opcao3">Nível 3: Adoção de estratégias de promoção mais direcionadas, 
                                    como publicidade segmentada, parcerias com influenciadores ou participação em eventos 
                                    específicos.
                                    </option>
                                    <option value="opcao4">Nível 4: Utilização de uma ampla variedade de estratégias de 
                                    promoção, como publicidade online, marketing de conteúdo, campanhas nas redes sociais, 
                                    eventos próprios, programas de fidelidade e parcerias estratégicas. Isso permite 
                                    alcançar o público-alvo de maneira eficiente e abrangente.
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
                            <td className="pergunta6">6.   Qual é o tamanho e a dinâmica do mercado em que a empresa atua? 
                            Quais são as principais tendências do mercado que podem afetar a empresa?</td>
                            <td>
                                <select className="opcao-select"
                                        onChange={(event) => handleOptionRespostaChange(event, setResposta6)}>
                                    <option disabled selected value>Selecione uma resposta</option>
                                    <option value="opcao1">Nível 1: Pouca compreensão do tamanho e dinâmica do mercado, 
                                    falta de análise aprofundada e conhecimento sobre oportunidades e ameaças. 
                                    </option>
                                    <option value="opcao2">Nível 2: Em desenvolvimento na compreensão do mercado, noção 
                                    geral, análise ad hoc e identificação de tendências.
                                    </option>
                                    <option value="opcao3">Nível 3: Compreensão adequada do mercado, análises regulares, 
                                    consideração das tendências na formulação de estratégias.
                                    </option>
                                    <option value="opcao4">Nível 4: Compreensão avançada e profunda do mercado, análises 
                                    detalhadas, monitoramento constante das tendências e antecipação das necessidades dos 
                                    clientes.</option>
                                </select>
                            </td>
                            <td>
                            <   select className="import-select"
                                        onChange={(event) => handleOptionImportanciaChange(event, setImportancia6)}>
                                    <option disabled selected value>Selecione um nível de importância</option>
                                    <option value="opcao1">Pouco importante</option>
                                    <option value="opcao2">Importante</option>
                                    <option value="opcao3">Muito importante</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta7">7. Quais são os principais concorrentes da empresa e como ela
                             se posiciona em relação a eles?</td>
                            <td>
                                <select className="opcao-select"
                                        onChange={(event) => handleOptionRespostaChange(event, setResposta7)}>
                                    <option disabled selected value>Selecione uma resposta</option>
                                    <option value="opcao1">Nível 1:  Falta de análise dos principais concorrentes e 
                                    posicionamento indefinido em relação a eles.</option>
                                    <option value="opcao2">Nível 2:  Identificação limitada dos concorrentes, entendimento
                                     básico de suas estratégias e posicionamento não claro.</option>
                                    <option value="opcao3">Nível 3: Conhecimento dos principais concorrentes, compreensão
                                     das estratégias básicas e posicionamento diferenciado em desenvolvimento.
                                     </option>
                                    <option value="opcao4">Nível 4: Análise detalhada dos concorrentes, profundo 
                                    entendimento de suas estratégias e posicionamento claro e diferenciado para se 
                                    destacar e aproveitar oportunidades competitivas.</option>
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
                            <td className="pergunta8">8. Como a empresa realiza pesquisas de mercado e coleta 
                            dados sobre o comportamento dos consumidores?</td>
                            <td>
                                <select className="opcao-select"
                                        onChange={(event) => handleOptionRespostaChange(event, setResposta8)}>
                                    <option disabled selected value>Selecione uma resposta</option>
                                    <option value="opcao1">Nível 1: Ausência de pesquisas de mercado e coleta de 
                                    dados sobre o comportamento dos consumidores.</option>
                                    <option value="opcao2">Nível 2: Pesquisas de mercado ocasionais, sem um processo
                                    estruturado de coleta de dados sobre o comportamento dos consumidores.</option>
                                    <option value="opcao3">Nível 3: Pesquisas de mercado regulares, com coleta de 
                                    dados sobre o comportamento dos consumidores, mas utilização limitada nas estratégias de marketing. </option>
                                    <option value="opcao4">Nível 4: Processo estruturado de pesquisas de mercado, 
                                    coleta sistemática de dados sobre o comportamento dos consumidores e uso eficiente
                                     dessas informações para direcionar as estratégias de marketing e tomar decisões 
                                     relevantes.</option>
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
                            <td className="pergunta9">9. Quais são os indicadores de desempenho 
                            utilizados para avaliar a eficácia das ações de marketing?</td>
                            <td>
                                <select className="opcao-select"
                                        onChange={(event) => handleOptionRespostaChange(event, setResposta9)}>
                                    <option disabled selected value>Selecione uma resposta</option>
                                    <option value="opcao1">Nível 1:  Ausência de indicadores de desempenho
                                     para avaliar as ações de marketing. 
                                     </option>
                                    <option value="opcao2">Nível 2:  Utilização de indicadores básicos, mas sem 
                                    uma análise abrangente dos resultados do marketing.
                                    </option>
                                    <option value="opcao3">Nível 3: Utilização de indicadores mais sofisticados,
                                     porém com oportunidade de aprimoramento na definição e acompanhamento.
                                      </option>
                                    <option value="opcao4">Nível 4: Utilização de uma variedade de indicadores 
                                    abrangentes, incluindo métricas financeiras, de engajamento e de 
                                    satisfação do cliente, para avaliar a eficácia das ações de marketing de 
                                    forma precisa.</option>
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

                        <tr>
                            <td className="pergunta10">10. Existe um sistema de gestão do 
                            relacionamento com o cliente implementado pela empresa?</td>
                            <td>
                                <select className="opcao-select"
                                        onChange={(event) => handleOptionRespostaChange(event, setResposta10,)}>
                                    <option disabled selected value>Selecione uma resposta</option>
                                    <option value="opcao1">Nível 1: Ausência de sistema de gestão do
                                     relacionamento com o cliente. </option>
                                    <option value="opcao2">Nível 2:  Sistema básico de gestão do relacionamento
                                    com o cliente, porém inconsistente e pouco eficaz.</option>
                                    <option value="opcao3">Nível 3: Sistema implementado de forma regular, mas 
                                    com espaço para melhorias na eficiência.</option>
                                    <option value="opcao4">Nível 4: Sistema avançado e estratégico de gestão 
                                    do relacionamento com o cliente, visando aprimorar interações, atendimento e 
                                    fidelização.</option>
                                </select>
                            </td>
                            <td>
                                <select className="import-select"
                                        onChange={(event) => handleOptionImportanciaChange(event, setImportancia10)}>
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
                        className="setaEsquerdaMaturidade_4"
                        onClick={(e) => irParaFormMaturidade3(e)}/>
                    <img
                        src={rightArrow}
                        alt="Seta"
                        className="setaDireitaMaturidade_4"
                        onClick={(e) => irParaFormMaturidade5(e)}/>     

            </div>
        </div>
        
    );
}

export default Maturidade4;