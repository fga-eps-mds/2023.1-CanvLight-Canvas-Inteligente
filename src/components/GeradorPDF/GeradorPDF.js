import React from "react";
import { jsPDF } from "jspdf";
import logo from "../../images/logo_canvlight.png";
import Intuicao from "../../images/Intuicao.png";
import Observacao1 from "../../images/observacao1.png"
import Observacao2 from "../../images/observacao2.png"
import Observacao3 from "../../images/obvervacao3.png"
import Interacao1 from "../../images/Interacao1.png";

function GeradorPDF({
  sintesePotencialidades,
  sinteseResultados,
  intuQuatroP,
  intuTecnico,
  intuResiliente,
  intuEmocional,
  intuMercadologico,
  intuIntegrador,
  intuTextos,
  perfil1,
  prefil2,
  resultado,
  orientacao,
  indicado,
  oportunidades,
  requisitos,
  aproximados,
  indicadoPara,
  indicadoParaP,
  empresa,
  diferenca,
  porte,
  concorrencia,
  localizacao,
  imitado,
  ferramentas,
  psObser,
  ferramentasObser3,
  ferramentasObser3P,
  melhorar,
  descricao,
  analisePreco,
  analiseQuantidade,
  analiseCusto,
  analiseDiferencial,
  orientacaoUso,
  orientacaoUsoP,
  analisePreDif,
  parceiro,
  beneficios,
  insumos,
  fornecer,
  risco,
  verticalizar,
  nota,
  resultadoEsperado,
  resultadoEsperadoP,
  mvpProduto,
  mvpIndicado,
  mvpOrientacoes,
  mvpResultado,
  formacaoDescricao,
  formacaoCusto,
  formacaoTaxa,
  formacaoImpostos,
  formacaoMargem,
  formacaoPreco,
  canaisCanal,
  canaisObjetivo,
  canaisMetrica,
  inteQuatroP,
}) {
  function gerarPDF() {
    const doc = new jsPDF({
      orientation: "landscape", // W = 420 e H = 297
      format: 'a3',
      unit: 'mm'
    });

    doc.addImage(Intuicao, "PNG", 0, 0, 420, 297);

    doc.setFontSize(13) // Tamanho da Fonte
    
    doc.setTextColor(255);

    doc.text( //Projeto
      `${intuTextos.primeiraLinhaIntuTextos}`, 
      65, 
      30
    );

    doc.text( //equipe
      `${intuTextos.segundaLinhaIntuTextos}`, 
      33, 
      57
    );

    doc.text( //ikigai
      `${intuTextos.terceiraLinhaIntuTextos}`, 
      33, 
      233
    );

    doc.text( //tecnico
      `${intuTecnico.primeiraLinhaIntuTecnico}`, 
      85, 
      120
    );

    doc.text( //tecnico
      `${intuTecnico.segundaLinhaIntuTecnico}`, 
      155, 
      120
    );

    doc.addPage(); //Obervação1
    
    doc.addImage(Observacao1, "PNG", 0, 0, 420, 297);

    doc.addPage(); //Obervação2
    
    doc.addImage(Observacao2, "PNG", 0, 0, 420, 297);

    doc.addPage(); //Obervação3
    
    doc.addImage(Observacao3, "PNG", 0, 0, 420, 297);

    doc.addPage(); // Página Interação1

    doc.addImage(Interacao1, "PNG", 0, 0, 420, 297);

    doc.setFontSize(13) // Tamanho da Fonte
    
    doc.setTextColor(255);

    doc.text( // Analise Custos Descricao
      `${descricao.primeiraLinhaDescricao}`, 
      33, 
      57
    );
    doc.text(
      `${descricao.segundaLinhaDescricao}`, 
      33, 
      75
    );
    doc.text(
      `${descricao.terceiraLinhaDescricao}`, 
      33, 
      93
    );

    doc.text( // Analise Custos Preco
      `${analisePreco.primeiraLinhaAnalisePreco}`,
      87,
      57
    );
    doc.text(
      `${analisePreco.segundaLinhaAnalisePreco}`,
      87,
      75
    );
    doc.text(
      `${analisePreco.terceiraLinhaAnalisePreco}`,
      87,
      93
    );

    doc.text( // Analise Custos Quantidade
      `${analiseQuantidade.primeiraLinhaAnaliseQuantidade}`,
      141,
      57
    );
    doc.text(
      `${analiseQuantidade.segundaLinhaAnaliseQuantidade}`,
      141,
      75
    );
    doc.text(
      `${analiseQuantidade.terceiraLinhaAnaliseQuantidade}`,
      141,
      93
    );
    
    doc.text( // Analise Custos Custo
      `${analiseCusto.primeiraLinhaAnaliseCusto}`,
      195,
      57
    );
    doc.text(
      `${analiseCusto.segundaLinhaAnaliseCusto}`,
      195,
      75
    );
    doc.text(
      `${analiseCusto.terceiraLinhaAnaliseCusto}`,
      195,
      93
    );

    doc.text( // Analise de Preços e Diferenciais Diferencial
      `${analiseDiferencial.primeiraLinhaAnaliseDiferencial}`,
      87,
      191
    );
    doc.text(
      `${analiseDiferencial.segundaLinhaAnaliseDiferencial}`,
      141,
      191
    );
    doc.text(
      `${analiseDiferencial.terceiraLinhaAnaliseDiferencial}`,
      195,
      191
    );
    doc.text(
      `${analiseDiferencial.quartaLinhaAnaliseDiferencial}`,
      249,
      191
    );
    doc.text(
      `${analiseDiferencial.quintaLinhaAnaliseDiferencial}`,
      303,
      191
    );

    doc.text( // Analise de Precos e Diferenciais Precos
      `${analisePreDif.primeiraLinhaAnalisePreDif}`,
      87,
      227
    );
    doc.text(
      `${analisePreDif.segundaLinhaAnalisePreDif}`,
      141,
      227
    );
    doc.text(
      `${analisePreDif.terceiraLinhaAnalisePreDif}`,
      195,
      227
    );
    doc.text(
      `${analisePreDif.quartaLinhaAnalisePreDif}`,
      249,
      227
    );
    doc.text(
      `${analisePreDif.quintaLinhaAnalisePreDif}`,
      303,
      227
    );
  
    doc.addPage(); // Página Canvas

    var MargemX = 12; // Variavel para a margem horizontal
    var MargemY = 10; // Variavel para a margem vertical
    
    doc.addImage(logo, 'PNG', 1, 1, 10, 10); // Adiciona a logo no canto do PDF

    doc.setFillColor(0, 0, 0, 0.22); // Seleciona a cor do Fundo
    doc.rect(MargemX, MargemY, 407, 286, 'F'); // Adiciona o Retângulo maior

    doc.setFontSize(16) // Tamanho da Fonte

    doc.rect(MargemX, MargemY, 81, 210 ) // Retangulo Parcerias principais
    doc.rect(81+MargemX, MargemY, 81, 105 ) // Retangulo Atividades-chave
    doc.rect(81+MargemX, 105+MargemY, 81, 105 ) // Retangulo Recursos Principais
    doc.rect(MargemX, 210+MargemY, 203, 76 ) // Retangulo Estrutura de Custo
    doc.rect(162+MargemX, MargemY, 81, 210 ) // Retangulo Proposta de Valor
    doc.rect(243+MargemX, MargemY, 81, 105 ) // Retangulo Relacionamento com Clientes
    doc.rect(243+MargemX, 105+MargemY, 81, 105 ) // Retangulo Canais
    doc.rect(324+MargemX, MargemY, 83, 210 ) // Retangulo Segmentos de Clientes *OBS 2mm a mais devido ao erro de calculo
    doc.rect(203+MargemX, 210+MargemY, 204, 76 ) // Retangulo Fontes de Receita  *OBS 1mm a mais devido ao erro de calculo

    //Parceiros Principais
    doc.text(
      `Principais Parceiros`,
      15,
      18
    );

    doc.text(
      `${parceiro.primeiraLinhaParceiro}`,
      15,
      28
    );

    doc.text(
      `${parceiro.segundaLinhaParceiro}`,
      15,
      48
    );

    doc.text(
      `${parceiro.terceiraLinhaParceiro}`,
      15,
      68
    );

    //Atividades-cahves
    doc.text(
      `Atividades-chaves`,
      96,
      18
    );

    //Recursos Principais
    doc.text(
      `Recursos Principais`,
      96,
      123
    );

    //Estrutura de Custo
    doc.text(
      `Estrutura de custo`,
      15,
      228
    );

    

    //Proposta de Valor
    doc.text(
      `Proposta de Valor`,
      177,
      18
    );

    //Relacionamento com Clientes
    doc.text(
      `Relacionamento com Clientes`,
      258,
      18
    );

    //Canais
    doc.text(
      `Canais`,
      258,
      123
    );

    //Segmentos de Clientes
    doc.text(
      `Segmentos de Clientes`,
      339,
      18
    );

    //Fontes de Receita
    doc.text(
      `Fontes de Receita`,
      218,
      228
    );


    //Intuicao
    /* doc.text(`SintesePotencialidades1: ${sintesePotencialidades.primeiraLinhaSintesePotencialidades}`, 100,140);
    doc.text(`SintesePotencialidades2: ${sintesePotencialidades.segundaLinhaSintesePotencialidades}`, 100,150);
    doc.text(`SintesePotencialidades3: ${sintesePotencialidades.terceiraLinhaSintesePotencialidades}`, 100,160); */

    // doc.text(
    //   `IntuTextos1: ${intuTextos.primeiraLinhaIntuTextos}`, 
    //   100, 
    //   140
    // );
    // doc.text(
    //   `IntuTextos2: ${intuTextos.segundaLinhaIntuTextos}`, 
    //   100, 
    //   150
    // );
    // doc.text(
    //   `IntuTextos3: ${intuTextos.terceiraLinhaIntuTextos}`, 
    //   100, 
    //   160
    // );

    /* doc.text(`SinteseResultados1: ${sinteseResultados.primeiraLinhaSinteseResultados}`, 100,140);
    doc.text(`SinteseResultados2: ${sinteseResultados.segundaLinhaSinteseResultados}`, 100,150);
    doc.text(`SinteseResultados3: ${sinteseResultados.terceiraLinhaSinteseResultados}`, 100,160); */

    /* doc.text(`IntuQuatroP1: ${intuQuatroP.primeiraLinhaIntuQuatroP}`, 100,140);
    doc.text(`IntuQuatroP2: ${intuQuatroP.segundaLinhaIntuQuatroP}`, 100,150);
    doc.text(`IntuQuatroP3: ${intuQuatroP.terceiraLinhaIntuQuatroP}`, 100,160);
    doc.text(`IntuQuatroP4: ${intuQuatroP.quartaLinhaIntuQuatroP}`, 100,170); */

    //observação
    // doc.text(`empresa: ${empresa.primeiraLinhaEmpresa}`, 12,10);
    // doc.text(`empresa: ${empresa.segundaLinhaEmpresa}`, 12,20);
    // doc.text(`empresa: ${empresa.terceiraLinhaEmpresa}`, 12,30);

    // doc.text(
    //   `parceiro: ${parceiro.primeiraLinhaParceiro}`, 
    //   12, 
    //   10
    // );
    // doc.text(
    //   `parceiro: ${parceiro.segundaLinhaParceiro}`, 
    //   12, 
    //   20
    // );
    // doc.text(
    //   `parceiro: ${parceiro.terceiraLinhaParceiro}`, 
    //   12,
    //   30
    // );

    // doc.text(`Diferenca: ${diferenca.primeiraLinhaDiferenca}`, 12,40);
    // doc.text(`Diferenca: ${diferenca.segundaLinhaDiferenca}`, 12,50);
    // doc.text(`Diferenca: ${diferenca.terceiraLinhaDiferenca}`, 12,60);

    // doc.text(
    //   `beneficios: ${beneficios.primeiraLinhaBeneficios}`, 
    //   12, 
    //   40
    // );
    // doc.text(
    //   `beneficios: ${beneficios.segundaLinhaBeneficios}`, 
    //   12, 
    //   50
    // );
    // doc.text(
    //   `beneficios: ${beneficios.terceiraLinhaBeneficios}`, 
    //   12, 
    //   60
    // );

    // doc.text(`Porte: ${porte.primeiraLinhaPorte}`, 12,70);
    // doc.text(`Porte: ${porte.segundaLinhaPorte}`, 12,80);
    // doc.text(`Porte: ${porte.terceiraLinhaPorte}`, 12,90);

    // doc.text(
    //   `insumos: ${insumos.primeiraLinhaInsumos}`, 
    //   12, 
    //   70
    // );
    // doc.text(
    //   `insumos: ${insumos.segundaLinhaInsumos}`, 
    //   12, 
    //   80
    // );
    // doc.text(
    //   `insumos: ${insumos.terceiraLinhaInsumos}`, 
    //   12, 
    //   90
    // );

    // doc.text(`O que o concorrente não faz ou faz mal: ${concorrencia.primeiraLinhaConcorrencia}`, 12,100);
    // doc.text(`O que o concorrente não faz ou faz mal: ${concorrencia.segundaLinhaConcorrencia}`, 12,110);
    // doc.text(`O que o concorrente não faz ou faz mal: ${concorrencia.terceiraLinhaConcorrencia}`, 12,120);

    // doc.text(`
    //   fornecer: ${fornecer.primeiraLinhaFornecer}`, 
    //   12, 
    //   100
    // );
    // doc.text(
    //   `fornecer: ${fornecer.segundaLinhaFornecer}`,
    //   12, 
    //   110
    // );
    // doc.text(
    //   `fornecer: ${fornecer.terceiraLinhaFornecer}`, 
    //   12, 
    //   120
    // );

    // doc.text(`Localização: ${localizacao.primeiraLinhaLocalizacao}`, 12,130);
    // doc.text(`Localização: ${localizacao.segundaLinhaLocalizacao}`, 12,140);
    // doc.text(`Localização: ${localizacao.terceiraLinhaLocalizacao}`, 12,150);

    // doc.text(
    //   `risco: ${risco.primeiraLinhaRisco}`, 
    //   12, 
    //   130
    // );
    // doc.text(
    //   `risco: ${risco.segundaLinhaRisco}`, 
    //   12, 
    //   140
    // );
    // doc.text(
    //   `risco: ${risco.terceiraLinhaRisco}`, 
    //   12, 
    //   150
    // );

    // doc.text(`O que pode ser imitado: ${imitado.primeiraLinhaImitado}`, 12,160);
    // doc.text(`O que pode ser imitado: ${imitado.segundaLinhaImitado}`, 12,170);
    // doc.text(`O que pode ser imitado: ${imitado.terceiraLinhaImitado}`, 12,180);

    // doc.text(
    //   `verticalizar: ${verticalizar.primeiraLinhaVerticalizar}`,
    //   12,
    //   160
    // );
    // doc.text(
    //   `verticalizar: ${verticalizar.segundaLinhaVerticalizar}`, 
    //   12, 
    //   170
    // );
    // doc.text(
    //   `verticalizar: ${verticalizar.terceiraLinhaVerticalizar}`,
    //   12,
    //   180
    // );

    // doc.text(`O que podemos fazer diferente/melhor: ${melhorar.primeiraLinhaMelhorar}`, 12,190);
    // doc.text(`O que podemos fazer diferente/melhor: ${melhorar.segundaLinhaMelhorar}`, 12,200);
    // doc.text(`O que podemos fazer diferente/melhor: ${melhorar.terceiraLinhaMelhorar}`, 12,210);

    // doc.text(
    //   `nota: ${nota.primeiraLinhaNota}`, 
    //   12, 
    //   190
    // );
    // doc.text(
    //   `nota: ${nota.segundaLinhaNota}`,
    //   12,
    //   200
    // );
    // doc.text(
    //   `nota: ${nota.terceiraLinhaNota}`, 
    //   12, 
    //   210
    // );

    /* doc.text(`MvpProduto1: ${mvpProduto.primeiraLinhaMvpProduto}`, 100,140);
    doc.text(`MvpProduto2: ${mvpProduto.segundaLinhaMvpProduto}`, 100,150);
    doc.text(`MvpProduto3: ${mvpProduto.terceiraLinhaMvpProduto}`, 100,160);
    doc.text(`MvpProduto4: ${mvpProduto.quartaLinhaMvpProduto}`, 100,170); */

    /* doc.text(`MvpIndicado1: ${mvpIndicado.primeiraLinhaMvpIndicado}`, 100,140);
    doc.text(`MvpIndicado2: ${mvpIndicado.segundaLinhaMvpIndicado}`, 100,150);
    doc.text(`MvpIndicado3: ${mvpIndicado.terceiraLinhaMvpIndicado}`, 100,160);
    doc.text(`MvpIndicado4: ${mvpIndicado.quartaLinhaMvpIndicado}`, 100,170); */

    /* doc.text(`MvpOrientacoes1: ${mvpOrientacoes.primeiraLinhaMvpOrientacoes}`, 100,140);
    doc.text(`MvpOrientacoes2: ${mvpOrientacoes.segundaLinhaMvpOrientacoes}`, 100,150);
    doc.text(`MvpOrientacoes3: ${mvpOrientacoes.terceiraLinhaMvpOrientacoes}`, 100,160);
    doc.text(`MvpOrientacoes4: ${mvpOrientacoes.quartaLinhaMvpOrientacoes}`, 100,170); */

    /*  doc.text(`MvpResultado1: ${mvpResultado.primeiraLinhaMvpResultado}`, 100,140);
    doc.text(`MvpResultado2: ${mvpResultado.segundaLinhaMvpResultado}`, 100,150);
    doc.text(`MvpResultado3: ${mvpResultado.terceiraLinhaMvpResultado}`, 100,160);
    doc.text(`MvpResultado4: ${mvpResultado.quartaLinhaMvpResultado}`, 100,170); */

    /* doc.text(`FormacaoDescricao1: ${formacaoDescricao.primeiraLinhaFormacaoDescricao}`, 100,140);
    doc.text(`FormacaoDescricao2: ${formacaoDescricao.segundaLinhaFormacaoDescricao}`, 100,150);
    doc.text(`FormacaoDescricao3: ${formacaoDescricao.terceiraLinhaFormacaoDescricao}`, 100,160);
    doc.text(`FormacaoDescricao4: ${formacaoDescricao.quartaLinhaFormacaoDescricao}`, 100,170); */

    doc.save("Canvas.pdf");
  }

  return (
    <div>
      <button className="btn-gerarpdf" onClick={gerarPDF}>
        Gerar PDF
      </button>
    </div>
  );
}

export default GeradorPDF;
