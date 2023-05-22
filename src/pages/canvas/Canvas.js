import React from 'react';
import './Canvas.css';
import logo from '../../images/logo_canvlight.png'
import arrowIcon from '../../images/arrow.png';
import Intuicao from './Intuicao.js';

function Canvas() {
  
  function handleArrowClick() {
    alert('Seta clicada!');
  }

  function abrirFormIntuicao(e){
    e.preventDefault();

    let modal = document.querySelector('.form');

    modal.style.display = "block";
  }

  return (
    <div className='body'>
        <div className='navbar'>
          <div className='logo'>
            <img src={logo} alt='Logo' className='logo_navbar'/>
            <p className='name_navbar'>CanvLight</p>
          </div>

          <div className='clear'></div>
        </div>
        <div className="container">
                
          <div className="rectangle">

            <div className="dot"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
            <button className='button1' onClick={(e) => abrirFormIntuicao(e)}>Intuição</button>
            <button className='button2'>Observação</button>
            <button className='button3'>Interação</button>
            <div className="arrow" onClick={() => handleArrowClick()}></div> 

          </div>   
        </div>

        <Intuicao/>

        <img
          src={arrowIcon}
          alt="Seta"
          className="arrow-button"
          onClick={handleArrowClick}
        />
    </div>
  );
}


export default Canvas