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




    return (
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
        onClick={handleArrowClick}
      />
    </div>           
  </div>
</div>
        
    )
}
export default Interacao 
