import React from "react";
import { jsPDF } from "jspdf";
import logo from "../../images/logo_canvlight.png";

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
    
    doc.addImage(logo, 'PNG', 1, 1, 10, 10); // Adiciona a logo no canto do PDF

    doc.setFillColor(0, 0, 0, 0.22); // Seleciona a cor do Fundo
    doc.rect(12, 10, 407, 286, 'F'); // Adiciona o Retângulo maior

    doc.setFontSize(16) // Tamanho da Fonte

    doc.rect(12, 10, 81, 210 ) // Retangulo Parcerias principais
    doc.rect(93, 10, 81, 105 ) // Retangulo Atividades-chave
    doc.rect(93, 115, 81, 105 ) // Retangulo Recursos Principais
    doc.rect(12, 220, 203, 76 ) // Retangulo Estrutura de Custo
    doc.rect(174, 10, 81, 210 ) // Retangulo Proposta de Valor
    

    //Intuicao
    /* doc.text(`SintesePotencialidades1: ${sintesePotencialidades.primeiraLinhaSintesePotencialidades}`, 100,140);
    doc.text(`SintesePotencialidades2: ${sintesePotencialidades.segundaLinhaSintesePotencialidades}`, 100,150);
    doc.text(`SintesePotencialidades3: ${sintesePotencialidades.terceiraLinhaSintesePotencialidades}`, 100,160); */

    doc.text(`IntuTextos1: ${intuTextos.primeiraLinhaIntuTextos}`, 100, 140);
    doc.text(`IntuTextos2: ${intuTextos.segundaLinhaIntuTextos}`, 100, 150);
    doc.text(`IntuTextos3: ${intuTextos.terceiraLinhaIntuTextos}`, 100, 160);

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

    doc.text(`parceiro: ${parceiro.primeiraLinhaParceiro}`, 12, 10);
    doc.text(`parceiro: ${parceiro.segundaLinhaParceiro}`, 12, 20);
    doc.text(`parceiro: ${parceiro.terceiraLinhaParceiro}`, 12, 30);

    // doc.text(`Diferenca: ${diferenca.primeiraLinhaDiferenca}`, 12,40);
    // doc.text(`Diferenca: ${diferenca.segundaLinhaDiferenca}`, 12,50);
    // doc.text(`Diferenca: ${diferenca.terceiraLinhaDiferenca}`, 12,60);

    doc.text(`beneficios: ${beneficios.primeiraLinhaBeneficios}`, 12, 40);
    doc.text(`beneficios: ${beneficios.segundaLinhaBeneficios}`, 12, 50);
    doc.text(`beneficios: ${beneficios.terceiraLinhaBeneficios}`, 12, 60);

    // doc.text(`Porte: ${porte.primeiraLinhaPorte}`, 12,70);
    // doc.text(`Porte: ${porte.segundaLinhaPorte}`, 12,80);
    // doc.text(`Porte: ${porte.terceiraLinhaPorte}`, 12,90);

    doc.text(`insumos: ${insumos.primeiraLinhaInsumos}`, 12, 70);
    doc.text(`insumos: ${insumos.segundaLinhaInsumos}`, 12, 80);
    doc.text(`insumos: ${insumos.terceiraLinhaInsumos}`, 12, 90);

    // doc.text(`O que o concorrente não faz ou faz mal: ${concorrencia.primeiraLinhaConcorrencia}`, 12,100);
    // doc.text(`O que o concorrente não faz ou faz mal: ${concorrencia.segundaLinhaConcorrencia}`, 12,110);
    // doc.text(`O que o concorrente não faz ou faz mal: ${concorrencia.terceiraLinhaConcorrencia}`, 12,120);

    doc.text(`fornecer: ${fornecer.primeiraLinhaFornecer}`, 12, 100);
    doc.text(`fornecer: ${fornecer.segundaLinhaFornecer}`, 12, 110);
    doc.text(`fornecer: ${fornecer.terceiraLinhaFornecer}`, 12, 120);

    // doc.text(`Localização: ${localizacao.primeiraLinhaLocalizacao}`, 12,130);
    // doc.text(`Localização: ${localizacao.segundaLinhaLocalizacao}`, 12,140);
    // doc.text(`Localização: ${localizacao.terceiraLinhaLocalizacao}`, 12,150);

    doc.text(`risco: ${risco.primeiraLinhaRisco}`, 12, 130);
    doc.text(`risco: ${risco.segundaLinhaRisco}`, 12, 140);
    doc.text(`risco: ${risco.terceiraLinhaRisco}`, 12, 150);

    // doc.text(`O que pode ser imitado: ${imitado.primeiraLinhaImitado}`, 12,160);
    // doc.text(`O que pode ser imitado: ${imitado.segundaLinhaImitado}`, 12,170);
    // doc.text(`O que pode ser imitado: ${imitado.terceiraLinhaImitado}`, 12,180);

    doc.text(
      `verticalizar: ${verticalizar.primeiraLinhaVerticalizar}`,
      12,
      160
    );
    doc.text(`verticalizar: ${verticalizar.segundaLinhaVerticalizar}`, 12, 170);
    doc.text(
      `verticalizar: ${verticalizar.terceiraLinhaVerticalizar}`,
      12,
      180
    );

    // doc.text(`O que podemos fazer diferente/melhor: ${melhorar.primeiraLinhaMelhorar}`, 12,190);
    // doc.text(`O que podemos fazer diferente/melhor: ${melhorar.segundaLinhaMelhorar}`, 12,200);
    // doc.text(`O que podemos fazer diferente/melhor: ${melhorar.terceiraLinhaMelhorar}`, 12,210);

    doc.text(`nota: ${nota.primeiraLinhaNota}`, 12, 190);
    doc.text(`nota: ${nota.segundaLinhaNota}`, 12, 200);
    doc.text(`nota: ${nota.terceiraLinhaNota}`, 12, 210);

    doc.text(`Descrição1: ${descricao.primeiraLinhaDescricao}`, 12, 220);
    doc.text(`Descrição2: ${descricao.segundaLinhaDescricao}`, 12, 230);
    doc.text(`Descrição3: ${descricao.terceiraLinhaDescricao}`, 12, 240);

    doc.text(
      `AnalisePreco1: ${analisePreco.primeiraLinhaAnalisePreco}`,
      12,
      250
    );
    doc.text(
      `AnalisePreco2: ${analisePreco.segundaLinhaAnalisePreco}`,
      12,
      260
    );
    doc.text(
      `AnalisePreco3: ${analisePreco.terceiraLinhaAnalisePreco}`,
      12,
      270
    );

    doc.text(
      `AnaliseQuantidade1: ${analiseQuantidade.primeiraLinhaAnaliseQuantidade}`,
      12,
      280
    );
    doc.text(
      `AnaliseQuantidade2: ${analiseQuantidade.segundaLinhaAnaliseQuantidade}`,
      12,
      290
    );
    doc.text(
      `AnaliseQuantidade3: ${analiseQuantidade.terceiraLinhaAnaliseQuantidade}`,
      12,
      300
    );

    doc.text(
      `AnaliseCusto1: ${analiseCusto.primeiraLinhaAnaliseCusto}`,
      100,
      12
    );
    doc.text(
      `AnaliseCusto2: ${analiseCusto.segundaLinhaAnaliseCusto}`,
      100,
      20
    );
    doc.text(
      `AnaliseCusto3: ${analiseCusto.terceiraLinhaAnaliseCusto}`,
      100,
      30
    );

    doc.text(
      `AnaliseDiferencial1: ${analiseDiferencial.primeiraLinhaAnaliseDiferencial}`,
      100,
      40
    );
    doc.text(
      `AnaliseDiferencial2: ${analiseDiferencial.segundaLinhaAnaliseDiferencial}`,
      100,
      50
    );
    doc.text(
      `AnaliseDiferencial3: ${analiseDiferencial.terceiraLinhaAnaliseDiferencial}`,
      100,
      60
    );
    doc.text(
      `AnaliseDiferencial4: ${analiseDiferencial.quartaLinhaAnaliseDiferencial}`,
      100,
      70
    );
    doc.text(
      `AnaliseDiferencial5: ${analiseDiferencial.quintaLinhaAnaliseDiferencial}`,
      100,
      80
    );

    doc.text(
      `AnalisePreDif1: ${analisePreDif.primeiraLinhaAnalisePreDif}`,
      100,
      90
    );
    doc.text(
      `AnalisePreDif2: ${analisePreDif.segundaLinhaAnalisePreDif}`,
      100,
      100
    );
    doc.text(
      `AnalisePreDif3: ${analisePreDif.terceiraLinhaAnalisePreDif}`,
      100,
      110
    );
    doc.text(
      `AnalisePreDif4: ${analisePreDif.quartaLinhaAnalisePreDif}`,
      100,
      120
    );
    doc.text(
      `AnalisePreDif5: ${analisePreDif.quintaLinhaAnalisePreDif}`,
      100,
      130
    );

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
