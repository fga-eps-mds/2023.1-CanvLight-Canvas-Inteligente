import rightArrow from '../../images/next-arrow.png';
import zap from '../../images/zap.png';
import insta from '../../images/insta.png';
import twitter from '../../images/twitter.png';
import face from '../../images/face.png';
import linkedin from '../../images/linkedin.png';
import sad from '../../images/sad.png';
import normal from '../../images/normal.png';
import happy from '../../images/happy.png';
import './Interacao.css';

function Interacao (){

function clicouNaDuvida(){
    alert('duvida clicada!')
  }

function fecharFormInteracao(e){
    e.preventDefault();
    let modal = document.querySelector('.form_interacao');
    modal.style.display = "none";
}

 function fecharTela_3(e){
    e.preventDefault();
    let modal = document.querySelector('.tela_3_form_interacao');
    modal.style.display = "none";
}

function nextpage1(e){
    e.preventDefault();
    let modal = document.querySelector('.tela_2_form_interacao');
    modal.style.display = "block";
    let medel = document.querySelector('.form_interacao');
    medel.style.display = "none";
}

function nextpage2(e){
    e.preventDefault();
    let modal = document.querySelector('.tela_3_form_interacao');
    modal.style.display = "block";
    let medel = document.querySelector('.tela_2_form_interacao');
    medel.style.display = "none";
}
      
function returnScreen2(e){
    let modal = document.querySelector('.tela_2_form_interacao');
    modal.style.display = "block";
    let medel = document.querySelector('.tela_3_form_interacao');
    medel.style.display = "none";
}

function fecharFormInteracaoTela2(e){
    e.preventDefault();
    let modal = document.querySelector('.tela_2_form_interacao');
    modal.style.display = "none";
}
function backpage1(e){
    e.preventDefault();
    let modal = document.querySelector('.form_interacao');
    modal.style.display = "block";
    let medel = document.querySelector('.tela_2_form_interacao');
    medel.style.display = "none";
}
function newTask(){
    alert('teste')
}

    return (

    <div body> 
        <div className='form_interacao'>
            <div className='center'>
            <button className='close_button' onClick={(e) => fecharFormInteracao(e)}></button>

                <div className='tela1'>
                <div className='parte1_interacao'>
                    <form>
                    <div>
                        <p>Análise de Custos: <div onClick={clicouNaDuvida} className='duvida'></div> </p>
                    </div>
                    </form>
                </div>
                <div className='tabela_analise_custos'>
                    <table className='table_interacao'>
                    <tr>
                        <th>DESCRIÇÃO</th>
                        <th>PREÇO</th>
                        <th>QUANTIDADE</th>
                        <th>CUSTO</th>
                    </tr>
                    <tr >
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td className='nada'></td>
                        <td className='nada'></td>
                        <td className = 'total'>TOTAL</td>
                        <td><input type="text"/></td>
                    </tr>
                    </table>
                </div>
                    <div className='parte2_interacao'>
                    <form>
                        <div>
                        <p>Análise de Preços e Diferenciais: <div onClick={clicouNaDuvida} className='duvida'></div></p>
                        </div>
                    </form>
                    </div>
                    <div className='tabela_analise_preço'>
                    <table className='table_interacao'>
                    <tr>
                        <th>DIFERENCIAL</th>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>PREÇO</th>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
                    </table>
                </div>
                <div className='clear'></div>
        
                <img
                    src={rightArrow}
                    alt="Seta"
                    className="right-arrow"
                    onClick={(e) =>nextpage1(e)}
                />
                </div>           
            </div>
        </div>
        <div className='tela_2_form_interacao'>
            <div className='center'>
                <button className='close_button' onClick={(e) => fecharFormInteracaoTela2(e)}></button>
                <div className='tela2'>
                <div className='esquerda'>
                    <div className='parte3_interacao'>
                    <div>
                        <p>Checklist: <div onClick={clicouNaDuvida} className='duvida'></div> </p>
                    </div>
                    <div className='Inserir_tarefa'>
                        <input type="text" id='input-new-task' placeholder='Inserir tarefa'></input> 
                        <span className='button_tarefa' onClick={(e) => newTask(e)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="white" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                        </span>


                    </div>
                    </div>
                </div>
                <div className='direita'>
                    <div className='parte4_interacao'>
                    <p>MVP: <div onClick={clicouNaDuvida} className='duvida'></div> </p> 
                    </div>
                    <div className='tabela_MVP'>
                    <table className='table_interacao_tela2'>
                        <tr>
                        <th>PRODUTO</th>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        </tr>
                        <tr>
                        <th>INDICADO PARA</th>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        </tr>
                        <tr>
                        <th>ORIENTAÇÕES DE USO</th>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        </tr>
                        <tr>
                        <th>RESULTADO</th>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        </tr>
                    </table>
                    </div>
                </div>
                <div className='parte5_interacao'>
                    <form>
                    <div>
                        <p>Formação do Preço: <div onClick={clicouNaDuvida} className='duvida'></div></p>
                    </div>
                    </form>
                </div>
                <div className='tabela_formacao'>
                    <table className='table_interacao_tela2'>
                    <tr>
                        <th>DESCRIÇÃO</th>
                        <th>CUSTO</th>
                        <th>TAXA ADMINISTRATIVA</th>
                        <th>IMPOSTOS</th>
                        <th>MARGEM DE LUCRO</th>
                        <th>PREÇO</th>
                    </tr>
                    <tr>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
                    </table>
                </div>
                <div className='clear'></div>
                <img
                    src={rightArrow}
                    alt="Seta"
                    className="right-arrow"
                    onClick={(e) =>nextpage2(e)}
                />
                <img
                    src={rightArrow}
                    alt="Seta"
                    className="left-arrow"
                    onClick={(e) =>backpage1(e)}
                />
                </div>           
            </div>
        </div>


        <div className='tela_3_form_interacao'>
            <div className='center'>
                <div className='esquerda'>
                    <button className='close_button' onClick={(e) => fecharTela_3(e)}></button>
                    <div className='digitalizacao'>
                        <p>Digitalização do Negócio:<div onClick={clicouNaDuvida} className='duvida'></div></p>
                    </div>
                    <div className='emoticons'>
                        <img src={sad} alt="sad" className="checkbox-image_1" />
                        <img src={normal} alt="normal" className="checkbox-image" />
                        <img src={happy} alt="happy" className="checkbox-image" />
                    </div>

                    <div className='table'>
                        <div className='table-row'>
                        <div className='checkbox_dig'>
                            <img src={zap} alt="zap" className="zap" />
                            <input type='checkbox' id='whatsapp_bad'></input>
                            <input type='checkbox' id='whatsapp_normal'></input>
                            <input type='checkbox' id='whatsapp_good'></input>
                        </div>
                        </div>

                        <div className='table-row'>
                        <div className='checkbox_dig'>
                            <img src={insta} alt="insta" className="insta" />
                            <input type='checkbox' id='instagram_bad'></input>
                            <input type='checkbox' id='instagram_normal'></input>
                            <input type='checkbox' id='instagram_good'></input>
                        </div>
                        </div>

                        <div className='table-row'>
                        <div className='checkbox_dig'>
                            <img src={twitter} alt="twitter" className="twitter" />
                            <input type='checkbox' id='twitter_bad'></input>
                            <input type='checkbox' id='twitter_normal'></input>
                            <input type='checkbox' id='twitter_good'></input>
                        </div>
                        </div>

                        <div className='table-row'>
                        <div className='checkbox_dig'>
                            <img src={face} alt="face" className="face" />
                            <input type='checkbox' id='facebook_bad'></input>
                            <input type='checkbox' id='facebook_normal'></input>
                            <input type='checkbox' id='facebook_good'></input>
                        </div>
                        </div>

                        <div className='table-row'>
                        <div className='checkbox_dig'>
                            <img src={linkedin} alt="linkedin" className="linkedin" />
                            <input type='checkbox' id='linkedin_bad'></input>
                            <input type='checkbox' id='linkedin_normal'></input>
                            <input type='checkbox' id='linkedin_good'></input>
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

                <div className='direita'>
                    <div className='canais_venda'>
                        <p>Canais de venda:<div onClick={clicouNaDuvida} className='duvida'></div></p>
                    </div>
                    <div className='table-wrapper'>
                        <table className='tabela_canais_venda'>
                        <tr>
                            <th>CANAL</th>
                            <th>OBJETIVO</th>
                            <th>METRICA</th>
                        </tr>
                        <tr>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                        </tr>
                        </table>
                    </div>
                    <div className='canais_venda'>
                        <p>4 P's do Projeto:<div onClick={clicouNaDuvida} className='duvida'></div></p>
                    </div>
                    <div className='tabela2'>
                        <table>
                        <tr>
                            <td>P1:<input type="text"/></td>
                            <td>P2:<input type="text"/></td>
                        </tr>

                        <tr>
                            <td>P3:<input type="text"/></td>
                            <td>P4:<input type="text"/></td>
                        </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
export default Interacao 
