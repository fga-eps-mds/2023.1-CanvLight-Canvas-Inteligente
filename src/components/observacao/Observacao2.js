import './Observacao2.css'
import React, { useState } from 'react';

function Observacao2({onPsObserChange, onAproximadosChange}){
    const [primeiroP, setPrimeiroP] = useState();
    const [segundoP, setSegundoP] = useState ();
    const [terceiroP, setTerceiroP] = useState ();
    const [quartoP, setQuartoP] = useState ();
    const [alinhadosObser2, setAlinhadosObser2] = useState ();
    const [proximos, setProximos] = useState ();
    const [concorrenteObser2, setConcorrenteOser2] = useState ();

    const handleInputChangeAproximados = (e)=>{
        const {name ,value} = e.target;
        if (name === 'alinhadosObser2') {
            setAlinhadosObser2(value);
        } else if (name === 'proximos') {
            setProximos(value);
        } else if (name === 'concorrenteObser2') {
            setConcorrenteOser2(value);
        } 

        const novosDadosAproximados = {
            setAlinhadosObser2: name === 'alinhadosObser2' ? value : alinhadosObser2,
            setProximos: name === 'proximos' ? value : proximos,
            setConcorrenteOser2: name === 'concorrenteObser2' ? value : concorrenteObser2,
        };

        onAproximadosChange(novosDadosAproximados);
    }

    const handleInputChangePsObser = (e)=>{
        const {name ,value} = e.target;
        if (name === 'primeiroP') {
            setPrimeiroP(value);
        } else if (name === 'segundoP') {
            setSegundoP(value);
        } else if (name === 'terceiroP') {
            setTerceiroP(value);
        } else if(name === 'quartoP'){
            setQuartoP(value)
        }

        const novosDadosPsObser = {
            setPrimeiroP: name === 'primeiroP' ? value : primeiroP,
            segundoP: name === 'segundoP' ? value : segundoP,
            terceiroP: name === 'terceiroP' ? value : terceiroP,
            quartoP: name === 'quartoP' ? value : terceiroP,
        };

        onPsObserChange(novosDadosPsObser);
    }


    function clicouNaDuvida(){
        alert('duvida clicada!')
    }

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
            <div className='centerObs2'>
                <div className='psdoprojeto'>
                    <h2>Revisão dos 4P's do projeto</h2>
                    <div onClick={clicouNaDuvida} className='duvida'></div>
                    <table>
                    <tr>
                        <td>P1:<input type="text" name='primeiroP' value={primeiroP} onChange={handleInputChangePsObser}/></td>
                        <td>P2:<input type="text" name='segundoP' value={segundoP} onChange={handleInputChangePsObser}/></td>
                    </tr>

                    <tr>
                        <td>P3:<input type="text" name='terceiroP' value={terceiroP} onChange={handleInputChangePsObser}/></td>
                        <td>P4:<input type="text" name='quartoP' value={quartoP} onChange={handleInputChangePsObser}/></td>
                    </tr>
                    </table>
                </div> 

                <div className='clear'></div>

                <div className='Relacionamento'>
                    <div className='Single'> 
                        <span>Quais parceiros são mais alinhados ao meu negócio</span>
                        <input type='text' name='alinhadosObser2' value={alinhadosObser2} onChange={handleInputChangeAproximados}/>

                    </div>

                    <div className='Single'> 
                        <span>De quais parceiros devemos nos aproximar?</span>
                        <input type='text' name='proximos' value={proximos} onChange={handleInputChangeAproximados}/>
                        
                    </div>

                    <div className='Single'> 
                        <span>Conseguimos transformar algum concorrente em parceiro?</span>
                        <input type='text'name='concorrenteObser2' value={concorrenteObser2} onChange={handleInputChangeAproximados}/>
                        
                    </div>
                </div>

                <div className='clear'></div>

                <div className="conceito">
                    <p>Conceito</p>
                    <div onClick={clicouNaDuvida} className='duvida'></div>
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