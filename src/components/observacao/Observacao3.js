import './Observacao3.css'
import React, { useState } from 'react';

function Observacao3({onFerramentasObser3Change}){

    const [primeiraLinhaFerramentaObser3, setPrimeiraLinhaFerramentaObser3] = useState();
    const [segundaLinhaFerramentaObser3, setSegundaLinhaFerramentaObser3] = useState ();

    const handleInputChangeFerramentaObser3 = (e)=>{
        const {name ,value} = e.target;
        if (name === 'primeiraLinhaFerramentaObser3') {
            setPrimeiraLinhaFerramentaObser3(value);
        } else if (name === 'segundaLinhaFerramentaObser3') {
            setSegundaLinhaFerramentaObser3(value);
        }

        const novosDadosFerramentaObser3 = {
            primeiraLinhaFerramentaObser3: name === 'primeiraLinhaFerramentaObser3' ? value : primeiraLinhaFerramentaObser3,
            segundaLinhaFerramentaObser3: name === 'segundaLinhaFerramentaObser3' ? value : segundaLinhaFerramentaObser3,
        };

        onFerramentasObser3Change(novosDadosFerramentaObser3);
    }

    function clicouNaDuvida(){
        alert('duvida clicada!')
    }

    function irParaObservacao2(e){
        e.preventDefault();
    
        let modal = document.querySelector('.Observacao2');
        let modal2 = document.querySelector('.Observacao3')
        
        modal.style.display = "block";
        modal2.style.display = "none"
    }
    function observacaoFinalizada(e){
        e.preventDefault();

        let modal = document.querySelector('.Observacao3');
        
        modal.style.display = 'none'
    }

    return(
        <div className= "Observacao3">
            <div className= 'centerObs3'>
                <div className= 'Modelo'>
                    <p>Modelo</p>
                    <div onClick={clicouNaDuvida} className='duvida'></div>
                    <table>
                        <tr>
                            <th className="primeiro-canto">Ferramentas/Procedimentos</th>
                            <th>Indicado para</th>
                            <th>Orientações de uso</th>
                            <th className="segundo-canto">Resultado esperado</th>
                        </tr>

                        <tr>
                            <td><input type="text" name='primeiraLinhaFerramentaObser3' value={primeiraLinhaFerramentaObser3} onChange={handleInputChangeFerramentaObser3}/></td>
                            <td><input type="text"/></td> 
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                        </tr>

                        <tr>
                            <td className="quarto-canto"><input className="quarto-canto" type="text" name='segundaLinhaFerramentaObser3' value={segundaLinhaFerramentaObser3} onChange={handleInputChangeFerramentaObser3}/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td className="terceiro-canto"><input className="terceiro-canto" type="text"/></td>
                        </tr>
                    </table>
                </div>

                <div className='clear'></div>

                <div className= 'Prototipo'>
                    <p>Protótipo</p>
                    <div onClick={clicouNaDuvida} className='duvida'></div>
                    <table>
                        <tr>
                            <th className="primeiro-canto">Ferramentas/Procedimentos</th>
                            <th>Indicado para</th>
                            <th>Orientações de uso</th>
                            <th className="segundo-canto">Resultado esperado</th>
                        </tr>

                        <tr>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                        </tr>

                        <tr>
                            <td className="quarto-canto"><input className="quarto-canto" type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td className="terceiro-canto"><input className="terceiro-canto" type="text"/></td>
                        </tr>
                    </table>
                </div>

                <div onClick={(e) => irParaObservacao2(e)} className='seta-esquerda'></div>
                <div className='Observacao-finalizada' onClick={(e) => observacaoFinalizada(e)}></div>

                <div className='clear'></div>
            </div>
        </div>
    )
}
export default Observacao3