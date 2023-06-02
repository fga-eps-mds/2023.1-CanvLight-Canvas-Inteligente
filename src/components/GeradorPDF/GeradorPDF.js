import React from "react";
import { jsPDF } from "jspdf";

function GeradorPDF({ empresa, diferenca, porte, concorrencia, localizacao, imitado,  projeto, equipe, dnaNegocio, descricao}) {
  function gerarPDF() {
    const doc = new jsPDF();

    //Intuicao
    // doc.text(`Projeto: ${projeto}`, 10, 10);
    // doc.text(`Equipe: ${equipe}`, 10, 20);

    //tabela DNA do negócio
    // doc.text(`Técnico: ${dnaNegocio.tecnico}`, 10, 30);
    // doc.text(`Resiliente: ${dnaNegocio.resiliencia}`, 10, 40);
    // doc.text(`Emocional: ${dnaNegocio.emocional}`, 10, 50);
    // doc.text(`Mercadológico: ${dnaNegocio.mercadologico}`, 10, 60);
    // doc.text(`Integrador: ${dnaNegocio.integrador}`, 10, 70);

    //Interação
    // doc.text(`descrição: ${descricao}`, 10, 80);
    doc.text(`empresa: ${empresa.primeiraLinhaEmpresa}`, 10,10);
    doc.text(`empresa: ${empresa.segundaLinhaEmpresa}`, 10,20);
    doc.text(`empresa: ${empresa.terceiraLinhaEmpresa}`, 10,30);

    doc.text(`Diferenca: ${diferenca.primeiraLinhaDiferenca}`, 10,40);
    doc.text(`Diferenca: ${diferenca.segundaLinhaDiferenca}`, 10,50);
    doc.text(`Diferenca: ${diferenca.terceiraLinhaDiferenca}`, 10,60);

    doc.text(`Porte: ${porte.primeiraLinhaPorte}`, 10,70);
    doc.text(`Porte: ${porte.segundaLinhaPorte}`, 10,80);
    doc.text(`Porte: ${porte.terceiraLinhaPorte}`, 10,90);

    doc.text(`O que o concorrente não faz ou faz mal: ${concorrencia.primeiraLinhaConcorrencia}`, 10,100);
    doc.text(`O que o concorrente não faz ou faz mal: ${concorrencia.segundaLinhaConcorrencia}`, 10,110);
    doc.text(`O que o concorrente não faz ou faz mal: ${concorrencia.terceiraLinhaConcorrencia}`, 10,120);

    doc.text(`Localização: ${localizacao.primeiraLinhaLocalizacao}`, 10,130);
    doc.text(`Localização: ${localizacao.segundaLinhaLocalizacao}`, 10,140);
    doc.text(`Localização: ${localizacao.terceiraLinhaLocalizacao}`, 10,150);

    doc.text(`O que pode ser imitado: ${imitado.primeiraLinhaImitado}`, 10,160);
    doc.text(`O que pode ser imitado: ${imitado.segundaLinhaImitado}`, 10,170);
    doc.text(`O que pode ser imitado: ${imitado.terceiraLinhaImitado}`, 10,180);

    doc.save("Canvas.pdf");
  }

  return (
    <div>
      <button className="btn-gerarpdf" onClick={gerarPDF}>Gerar PDF</button>
    </div>
  );
}

export default GeradorPDF;