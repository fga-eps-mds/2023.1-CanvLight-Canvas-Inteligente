import './Observacao2.css'
import React, { useState } from 'react';

function Observacao2({onPsObserChange, onAproximadosChange, onFerramentasChange, onRequisitosChange,
    onOportunidadesChange, onIndicadoChange, onOrientacaoChange
}){
    const [primeiroP, setPrimeiroP] = useState();
    const [segundoP, setSegundoP] = useState ();
    const [terceiroP, setTerceiroP] = useState ();
    const [quartoP, setQuartoP] = useState ();
    const [alinhadosObser2, setAlinhadosObser2] = useState ();
    const [proximos, setProximos] = useState ();
    const [concorrenteObser2, setConcorrenteOser2] = useState ();
    const [primeiraLinhaFerramentas, setPrimeiraLinhaFerramentas] = useState();
    const [segundaLinhaFerramentas, setSegundaLinhaFerramentas] = useState();
    const [terceiraLinhaFerramentas, setTerceiraLinhaFerramentas] = useState();
    const [primeiraLinhaRequisitos, setPrimeiraLinhaRequisitos] = useState();
    const [segundaLinhaRequisitos, setSegundaLinhaRequisitos] = useState();
    const [terceiraLinhaRequisitos, setTerceiraLinhaRequisitos] = useState();
    const [primeiraLinhaOportunidades, setPrimeiraLinhaOportunidades] = useState();
    const [segundaLinhaOportunidades, setSegundaLinhaOportunidades] = useState();
    const [terceiraLinhaOportunidades, setTerceiraLinhaOportunidades] = useState();
    const [primeiraLinhaIndicado, setPrimeiraLinhaIndicado] = useState();
    const [segundaLinhaIndicado, setSegundaLinhaIndicado] = useState();
    const [terceiraLinhaIndicado, setTerceiraLinhaIndicado] = useState();
    const [primeiraLinhaOrientacao, setPrimeiraLinhaOrientacao] = useState();
    const [segundaLinhaOrientacao, setSegundaLinhaOrientacao] = useState();
    const [terceiraLinhaOrientacao, setTerceiraLinhaOrientacao] = useState();

    const handleInputChangeOrientacao = (e)=>{
        const {name ,value} = e.target;
        if (name === 'primeiraLinhaOrientacao') {
            setPrimeiraLinhaOrientacao(value);
        } else if (name === 'segundaLinhaOrientacao') {
            setSegundaLinhaOrientacao(value);
        } else if (name === 'terceiraLinhaOrientacao') {
            setTerceiraLinhaOrientacao(value);
        }

        const novosDadosOrientacao = {
            primeiraLinhaOrientacao: name === 'primeiraLinhaOrientacao' ? value : primeiraLinhaOrientacao,
            segundaLinhaOrientacao: name === 'segundaLinhaOrientacao' ? value : segundaLinhaOrientacao,
            terceiraLinhaOrientacao: name === 'terceiraLinhaOrientacao' ? value : terceiraLinhaOrientacao,
        };

        onOrientacaoChange(novosDadosOrientacao);
    }

    const handleInputChangeIndicado = (e)=>{
        const {name ,value} = e.target;
        if (name === 'primeiraLinhaIndicado') {
            setPrimeiraLinhaIndicado(value);
        } else if (name === 'segundaLinhaIndicado') {
            setSegundaLinhaIndicado(value);
        } else if (name === 'terceiraLinhaIndicado') {
            setTerceiraLinhaIndicado(value);
        }

        const novosDadosIndicado = {
            primeiraLinhaIndicado: name === 'primeiraLinhaIndicado' ? value : primeiraLinhaIndicado,
            segundaLinhaIndicado: name === 'segundaLinhaIndicado' ? value : segundaLinhaIndicado,
            terceiraLinhaIndicado: name === 'terceiraLinhaIndicado' ? value : terceiraLinhaIndicado,
        };

        onIndicadoChange(novosDadosIndicado);
    }

    const handleInputChangeOportunidades = (e)=>{
        const {name ,value} = e.target;
        if (name === 'primeiraLinhaOportunidades') {
            setPrimeiraLinhaOportunidades(value);
        } else if (name === 'segundaLinhaOportunidades') {
            setSegundaLinhaOportunidades(value);
        } else if (name === 'terceiraLinhaOportunidades') {
            setTerceiraLinhaOportunidades(value);
        }

        const novosDadosOportunidades = {
            primeiraLinhaOportunidades: name === 'primeiraLinhaOportunidades' ? value : primeiraLinhaOportunidades,
            segundaLinhaOportunidades: name === 'segundaLinhaOportunidades' ? value : segundaLinhaOportunidades,
            terceiraLinhaOportunidades: name === 'terceiraLinhaOportunidades' ? value : terceiraLinhaOportunidades,
        };

        onOportunidadesChange(novosDadosOportunidades);
    }

    const handleInputChangeRequisitos = (e)=>{
        const {name ,value} = e.target;
        if (name === 'primeiraLinhaRequisitos') {
            setPrimeiraLinhaRequisitos(value);
        } else if (name === 'segundaLinhaRequisitos') {
            setSegundaLinhaRequisitos(value);
        } else if (name === 'terceiraLinhaRequisitos') {
            setTerceiraLinhaRequisitos(value);
        }

        const novosDadosRequisitos = {
            primeiraLinhaRequisitos: name === 'primeiraLinhaRequisitos' ? value : primeiraLinhaRequisitos,
            segundaLinhaRequisitos: name === 'segundaLinhaRequisitos' ? value : segundaLinhaRequisitos,
            terceiraLinhaRequisitos: name === 'terceiraLinhaRequisitos' ? value : terceiraLinhaRequisitos,
        };

        onRequisitosChange(novosDadosRequisitos);
    }

    const handleInputChangeFerramentas = (e)=>{
        const {name ,value} = e.target;
        if (name === 'primeiraLinhaFerramentas') {
            setPrimeiraLinhaFerramentas(value);
        } else if (name === 'segundaLinhaFerramentas') {
            setSegundaLinhaFerramentas(value);
        } else if (name === 'terceiraLinhaFerramentas') {
            setTerceiraLinhaFerramentas(value);
        }

        const novosDadosFerramentas = {
            primeiraLinhaFerramentas: name === 'primeiraLinhaFerramentas' ? value : primeiraLinhaFerramentas,
            segundaLinhaFerramentas: name === 'segundaLinhaFerramentas' ? value : segundaLinhaFerramentas,
            terceiraLinhaFerramentas: name === 'terceiraLinhaFerramentas' ? value : terceiraLinhaFerramentas,
        };

        onFerramentasChange(novosDadosFerramentas);
    }

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
                            <td><input type="text" name='primeiraLinhaFerramentas' value={primeiraLinhaFerramentas} onChange={handleInputChangeFerramentas}/></td>
                            <td><input type="text" name='primeiraLinhaRequisitos' value={primeiraLinhaRequisitos} onChange={handleInputChangeRequisitos}/></td>
                            <td><input type="text" name='primeiraLinhaOportunidades' value={primeiraLinhaOportunidades} onChange={handleInputChangeOportunidades}/></td>
                            <td><input type="text" name='primeiraLinhaIndicado' value={primeiraLinhaIndicado} onChange={handleInputChangeIndicado}/></td>
                            <td><input type="text" name='primeiraLinhaOrientacao' value={primeiraLinhaOrientacao} onChange={handleInputChangeOrientacao}/></td>
                            <td><input type="text"/></td>
                        </tr>

                        <tr>
                            <td><input type="text" name='segundaLinhaFerramentas' value={segundaLinhaFerramentas} onChange={handleInputChangeFerramentas}/></td>
                            <td><input type="text" name='segundaLinhaRequisitos' value={segundaLinhaRequisitos} onChange={handleInputChangeRequisitos}/></td>
                            <td><input type="text" name='segundaLinhaOportunidades' value={segundaLinhaOportunidades} onChange={handleInputChangeOportunidades}/></td>
                            <td><input type="text" name='segundaLinhaindicado' value={segundaLinhaIndicado} onChange={handleInputChangeIndicado}/></td>
                            <td><input type="text" name='segundaLinhaOrientacao' value={segundaLinhaOrientacao} onChange={handleInputChangeOrientacao}/></td>
                            <td><input type="text"/></td>
                        </tr>

                        <tr>
                            <td className="quarto-canto"><input className="quarto-canto" type="text" name='terceiraLinhaFerramentas' value={terceiraLinhaFerramentas} onChange={handleInputChangeFerramentas}/></td>
                            <td><input type="text" name='terceiraLinhaRequisitos' value={terceiraLinhaRequisitos} onChange={handleInputChangeRequisitos}/></td>
                            <td><input type="text" name='terceiraLinhaOportunidades' value={terceiraLinhaOportunidades} onChange={handleInputChangeOportunidades}/></td>
                            <td><input type="text" name='segundaLinhaindicado' value={segundaLinhaIndicado} onChange={handleInputChangeIndicado}/></td>
                            <td><input type="text" name='terceiraLinhaOrientacao' value={terceiraLinhaOrientacao} onChange={handleInputChangeOrientacao}/></td>
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