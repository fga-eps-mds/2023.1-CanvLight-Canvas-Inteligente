import "./Maturidade1.css";
import React, { useState } from "react";

function Maturidade1(){
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
      }
    
    function irParaAreaRh(e) {
        e.preventDefault();
    
        let modal = document.querySelector(".areaAdm");
        modal.style.display = "none";

        let modal2 = document.querySelector(".areaRh");
        modal2.style.display = "block";
    }

    function clicouNaDuvida(){
        alert('duvida clicada!')
    }

    return(
        <div className="areaAdm">
            <div className="formAdm">
                <button className="close_area1" onClick={(e) => fecharFormMaturidade1(e)}></button>
                <div className="dot2_area1"></div>
                <div className="dot3_area1"></div>
                <h2 className="titulo">Área Administrativa</h2>
                <div onClick={clicouNaDuvida}  className='duvidaAdm'></div>
                <div onClick={() => {window.open("tutorial#tut_canais_venda", "_blank");
                }}className="duvidaAdm"></div>

                    <table>
                        <tr>
                            <th className="primeiro-canto">PERGUNTA</th>
                            <th>RESPOSTA</th>
                            <th className="segundo-canto">IMPORTANCIA</th>
                        </tr>

                        <tr>
                            <td className="pergunta1">1. Qual é a estrutura organizacional da empresa? Ela é adequada para suportar as atividades e fluxos de trabalho?</td>
                            <td>
                            <input
                                type="text"
                                name="primeiraLinhaResposta1"
                                value={primeiraLinhaResposta1}
                                onChange={handleInputChangeResposta1}
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                name="segundaLinhaImportancia1"
                                value={segundaLinhaImportancia1}
                                onChange={handleInputChangeImportancia1}
                            />
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta2">2. Como é realizado o planejamento estratégico da empresa? Existe uma definição clara de metas e objetivos?</td>
                            <td>
                            <input
                                type="text"
                                name="primeiraLinhaResposta2"
                                value={primeiraLinhaResposta2}
                                onChange={handleInputChangeResposta2}
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                name="segundaLinhaImportancia2"
                                value={segundaLinhaImportancia2}
                                onChange={handleInputChangeImportancia2}
                            />
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta3">3. Quais são os principais processos administrativos da empresa? Eles estão documentados e padronizados?</td>
                            <td>
                            <input
                                type="text"
                                name="primeiraLinhaResposta3"
                                value={primeiraLinhaResposta3}
                                onChange={handleInputChangeResposta3}
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                name="segundaLinhaImportancia3"
                                value={segundaLinhaImportancia3}
                                onChange={handleInputChangeImportancia3}
                            />
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta4">4. Como é feita a gestão de projetos na empresa? Existem metodologias e ferramentas utilizadas?</td>
                            <td>
                            <input
                                type="text"
                                name="primeiraLinhaResposta4"
                                value={primeiraLinhaResposta4}
                                onChange={handleInputChangeResposta4}
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                name="segundaLinhaImportancia4"
                                value={segundaLinhaImportancia4}
                                onChange={handleInputChangeImportancia4}
                            />
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta5">5. Como é feita a gestão financeira da empresa? Existe controle efetivo sobre orçamento, fluxo de caixa e contas a pagar/receber?</td>
                            <td>
                            <input
                                type="text"
                                name="primeiraLinhaResposta5"
                                value={primeiraLinhaResposta5}
                                onChange={handleInputChangeResposta5}
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                name="segundaLinhaImportancia5"
                                value={segundaLinhaImportancia5}
                                onChange={handleInputChangeImportancia5}
                            />
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta6">6. Qual é o nível de qualidade dos produtos ou serviços oferecidos pela empresa? Existem indicadores e processos de melhoria contínua?</td>
                            <td>
                            <input
                                type="text"
                                name="primeiraLinhaResposta6"
                                value={primeiraLinhaResposta6}
                                onChange={handleInputChangeResposta6}
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                name="segundaLinhaImportancia6"
                                value={segundaLinhaImportancia6}
                                onChange={handleInputChangeImportancia6}
                            />
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta7">7. Como é realizada a gestão de documentos e arquivos na empresa? Existem práticas de organização e armazenamento eficientes?</td>
                            <td>
                            <input
                                type="text"
                                name="primeiraLinhaResposta7"
                                value={primeiraLinhaResposta7}
                                onChange={handleInputChangeResposta7}
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                name="segundaLinhaImportancia7"
                                value={segundaLinhaImportancia7}
                                onChange={handleInputChangeImportancia7}
                            />
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta8">8. Como é feita a gestão de riscos na empresa? Existem análises de risco e planos de contingência estabelecidos?</td>
                            <td>
                            <input
                                type="text"
                                name="primeiraLinhaResposta8"
                                value={primeiraLinhaResposta8}
                                onChange={handleInputChangeResposta8}
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                name="segundaLinhaImportancia8"
                                value={segundaLinhaImportancia8}
                                onChange={handleInputChangeImportancia8}
                            />
                            </td>
                        </tr>
                        
                        <tr>
                            <td className="pergunta9">9. Como é feita a gestão do tempo e produtividade dos colaboradores? Existem práticas de monitoramento e incentivo à eficiência?</td>
                            <td>
                            <input
                                type="text"
                                name="primeiraLinhaResposta9"
                                value={primeiraLinhaResposta9}
                                onChange={handleInputChangeResposta9}
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                name="segundaLinhaImportancia9"
                                value={segundaLinhaImportancia9}
                                onChange={handleInputChangeImportancia9}
                            />
                            </td>
                        </tr>

                        <tr>
                            <td className="pergunta10">10. Existe um canal efetivo de comunicação interna na empresa? Os colaboradores se sentem envolvidos e informados sobre as decisões administrativas?</td>
                            <td>
                            <input
                                type="text"
                                name="primeiraLinhaResposta10"
                                value={primeiraLinhaResposta10}
                                onChange={handleInputChangeResposta10}
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                name="segundaLinhaImportancia10"
                                value={segundaLinhaImportancia10}
                                onChange={handleInputChangeImportancia10}
                            />
                            </td>
                        </tr>
                    </table>
                <div onClick={(e) => irParaMaturidade2(e)} className='setaDireita'></div>
            </div>
        </div>
        
    );
}

export default Maturidade1;