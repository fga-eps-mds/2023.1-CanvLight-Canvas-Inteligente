import './Observacao1.css'

function Observacao1(){
    function irParaObservacao2(e){
        e.preventDefault();
    
        let modal = document.querySelector('.benchmarking');
        let modal2 = document.querySelector('.Observacao2')
        
        modal.style.display = "none";
        modal2.style.display = "block"
    }


    return(
        <div className="benchmarking">
            <div className='center'>
                <h2>Benchmarking</h2>
                <div className="concorrente">
                    <p>Concorrente</p>
                    <table>
                        <tr>
                            <th className="primeiro-canto">Empresa, serviços ou protutos</th>
                            <th>Diferenciais</th>
                            <th>Porte</th>
                            <th>O que o concorrente não faz ou faz mal?</th>
                            <th>Localização</th>
                            <th>O que pode ser imitado?</th>
                            <th className="segundo-canto">O que podemos fazer diferente/melhor?</th>
                        </tr>

                        <tr>
                            <td><input type="text"/></td>
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
                            <td><input type="text"/></td>
                        </tr>

                        <tr>
                            <td className="quarto-canto"><input className="quarto-canto" type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td className="terceiro-canto"><input className="terceiro-canto" type="text"/></td>
                        </tr>
                    </table>
                </div>

                <div className="parceiro">
                    <p>Parceiro</p>
                    <table>
                        <tr>
                            <th className="primeiro-canto">Empresas</th>
                            <th>Insumos</th>
                            <th>Beneficios da parceria</th>
                            <th>Até quanto consegui fornecer?</th>
                            <th>Qual o risco?</th>
                            <th>Por que não verticalizar?</th>
                            <th className="segundo-canto">nota de 1 a 5</th>
                        </tr>

                        <tr>
                            <td><input type="text"/></td>
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
                            <td><input type="text"/></td>
                        </tr>

                        <tr>
                            <td className="quarto-canto"><input className="quarto-canto" type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td className="terceiro-canto"><input className="terceiro-canto" type="text"/></td>
                        </tr>
                    </table>
                </div>
                <div onClick={(e) => irParaObservacao2(e)} className='setas'></div>

                <div className='clear'></div>
            </div>
        </div>
    )
}

export default Observacao1