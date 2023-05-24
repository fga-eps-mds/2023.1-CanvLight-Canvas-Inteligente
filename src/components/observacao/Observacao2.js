import './Observacao2.css'

function Observacao2(){
    function irParaObservacao1(e){
        e.preventDefault();
    
        let modal = document.querySelector('.benchmarking');
        let modal2 = document.querySelector('.Observacao2')
        
        modal.style.display = "block";
        modal2.style.display = "none"
    }

    function irParaObservacao3(e){
        e.preventDefault();
    
        let modal = document.querySelector('.Observacao2')
        let modal2 = document.querySelector('.Observacao3')
        
        modal.style.display = "none";
        modal2.style.display = 'block';
    }

	return(
	    <div className="Observacao2">
            <div className='center'>
                <div className='psdoprojeto'>
                    <h2>Revisão dos 4P's do projeto</h2>

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

                <div className='clear'></div>

                <div className='Relacionamento'>
                    <div className='Single'> 
                        <span>Quais parceiros são mais alinhados ao meu negócio</span>
                        <input type='text'/>

                    </div>

                    <div className='Single'> 
                        <span>De quais parceiros devemos nos aproximar?</span>
                        <input type='text'/>
                        
                    </div>

                    <div className='Single'> 
                        <span>Conseguimos transformar algum concorrente em parceiro?</span>
                        <input type='text'/>
                        
                    </div>
                </div>

                <div className='clear'></div>

                <div className="conceito">
                    <p>Conceito</p>
                    <table>
                        <tr>
                            <th className="primeiro-canto">Ferramentas</th>
                            <th>Requisitos</th>
                            <th>Oportunidades</th>
                            <th>Indicado para</th>
                            <th>Orientações de uso</th>
                            <th className="segundo-canto">Resultado esperado</th>
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
                            <td className="quarto-canto"><input className="quarto-canto" type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td className="terceiro-canto"><input className="terceiro-canto" type="text"/></td>
                        </tr>
                    </table>
                </div>

                <div onClick={(e) => irParaObservacao1(e)} className='seta-esquerda'></div>

                <div onClick={(e) => irParaObservacao3(e)} className='seta-direita'></div>

                <div className='clear'></div>
            </div>
        </div>  
    )   
}

export default Observacao2