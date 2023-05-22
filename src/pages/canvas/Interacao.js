import rightArrow from '../../images/next-arrow.png';
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
      function handleArrowClick() {
        alert('Seta clicada!');
      }

      function nextpage1(e){
        e.preventDefault();
        let modal = document.querySelector('.tela_2_form_interacao');
        modal.style.display = "block";
        let medel = document.querySelector('.form_interacao');
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


    return (

    <div body> 
    <div className='form_interacao'>
        <div className='center'>
        <button onClick={(e) => fecharFormInteracao(e)}></button>

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
    <button onClick={(e) => fecharFormInteracaoTela2(e)}></button>

    <div className='tela2'>
        <div className='esquerda'>
    <div className='parte3_interacao'>
        <div>
            <spam>Checklist: <div onClick={clicouNaDuvida} className='duvida'></div> </spam>
            <input type="text" /> 
        </div>
        </div>
        <div className='direita'>
        <div className='parte4_interacao'>
            <p>MVP: <div onClick={clicouNaDuvida} className='duvida'></div> </p> 
        </div>
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
        <tr >
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
        <table className='table_interacao_tela2/'>
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
        onClick={(e) =>nextpage1(e)}
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

    </div>


        
    )
}
export default Interacao 
