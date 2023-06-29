import React from "react";
import { jsPDF } from "jspdf";
import logo from "../../images/logo_canvlight.png";
import Intuicao from "../../images/Intuicao.png";
import Observacao1 from "../../images/observacao1.png"
import Observacao2 from "../../images/observacao2.png"
import Observacao3 from "../../images/obvervacao3.png"
import Interacao1 from "../../images/Interacao1.png";
import Interacao2 from "../../images/Interacao2.png";
import Interacao3 from "../../images/Interacao3.png";

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

    doc.text( //resiliente
      `${intuResiliente.primeiraLinhaIntuResiliente}`, 
      85, 
      137
    );

    doc.text( //resiliente
      `${intuResiliente.segundaLinhaIntuResiliente}`, 
      155, 
      137
    );

    doc.text( //emocional
      `${intuEmocional.primeiraLinhaIntuEmocional}`, 
      85, 
      154
    );

    doc.text( //emocional
      `${intuEmocional.segundaLinhaIntuEmocional}`, 
      155, 
      154
    );

    doc.text( //mercadologia
      `${intuMercadologico.primeiraLinhaIntuMercadologico}`, 
      85, 
      171
    );

    doc.text( //mercadologia
      `${intuMercadologico.segundaLinhaIntuMercadologico}`, 
      155, 
      171
    );

    doc.text( //integrador
      `${intuIntegrador.primeiraLinhaIntuIntegrador}`, 
      85, 
      188
    );

    doc.text( //integrador
      `${intuIntegrador.segundaLinhaIntuIntegrador}`, 
      155, 
      188
    );

    doc.text( //p1
      `${intuQuatroP.primeiraLinhaIntuQuatroP}`, 
      270, 
      60
    );

    doc.text( //p2
      `${intuQuatroP.segundaLinhaIntuQuatroP}`, 
      340, 
      60
    );

    doc.text( //p3
      `${intuQuatroP.terceiraLinhaIntuQuatroP}`, 
      270, 
      93
    );

    doc.text( //p4
      `${intuQuatroP.quartaLinhaIntuQuatroP}`, 
      340, 
      93
    );

    doc.text( //potencialidade
      `${sintesePotencialidades.primeiraLinhaSintesePotencialidades}`, 
      270, 
      170
    );

    doc.text( //potencialidade
      `${sintesePotencialidades.segundaLinhaSintesePotencialidades}`, 
      270, 
      186
    );

    doc.text( //potencialidade
      `${sintesePotencialidades.terceiraLinhaSintesePotencialidades}`, 
      270, 
      202
    );

    doc.text( //resultados
      `${sinteseResultados.primeiraLinhaSinteseResultados}`, 
      340, 
      170
    );

    doc.text( //resultados
      `${sinteseResultados.segundaLinhaSinteseResultados}`, 
      340, 
      186
    );

    doc.text( //resultados
      `${sinteseResultados.terceiraLinhaSinteseResultados}`, 
      340, 
      202
    );


    doc.addPage(); //Obervação1
    
    doc.addImage(Observacao1, "PNG", 0, 0, 420, 297);

    doc.text( //empresa
      `${empresa.primeiraLinhaEmpresa}`, 
      38, 
      55
    );

    doc.text( //empresa
      `${empresa.segundaLinhaEmpresa}`, 
      38, 
      70
    );

    doc.text( //empresa
      `${empresa.terceiraLinhaEmpresa}`, 
      38, 
      85
    );

    doc.text( //diferenca
      `${diferenca.primeiraLinhaDiferenca}`, 
      88, 
      55
    );

    doc.text( //diferenca
      `${diferenca.segundaLinhaDiferenca}`, 
      88, 
      70
    );

    doc.text( //diferenca
      `${diferenca.terceiraLinhaDiferenca}`, 
      88, 
      85
    );

    doc.text( //porte
      `${porte.primeiraLinhaPorte}`, 
      137, 
      55
    );

    doc.text( //porte
      `${porte.segundaLinhaPorte}`, 
      137, 
      70
    );

    doc.text( //porte
      `${porte.terceiraLinhaPorte}`, 
      137, 
      85
    );

    doc.text( //concorrencia
      `${concorrencia.primeiraLinhaConcorrencia}`, 
      187, 
      55
    );

    doc.text( //concorrencia
      `${concorrencia.segundaLinhaConcorrencia}`, 
      187, 
      70
    );

    doc.text( //concorrencia
      `${concorrencia.terceiraLinhaConcorrencia}`, 
      187, 
      85
    );

    doc.text( //localizacao
      `${localizacao.primeiraLinhaLocalizacao}`, 
      238, 
      55
    );

    doc.text( //localizacao
      `${localizacao.segundaLinhaLocalizacao}`, 
      238, 
      70
    );

    doc.text( //localizacao
      `${localizacao.terceiraLinhaLocalizacao}`, 
      238, 
      85
    );

    doc.text( //imitado
      `${imitado.primeiraLinhaImitado}`, 
      289, 
      55
    );

    doc.text( //imitado
      `${imitado.segundaLinhaImitado}`, 
      289, 
      70
    );

    doc.text( //imitado
      `${imitado.terceiraLinhaImitado}`, 
      289, 
      85
    );

    doc.text( //melhorado
      `${melhorar.primeiraLinhaMelhorar}`, 
      340, 
      55
    );

    doc.text( //melhorar
      `${melhorar.segundaLinhaMelhorar}`, 
      340, 
      70
    );

    doc.text( //melhorar
      `${melhorar.terceiraLinhaMelhorar}`, 
      340, 
      85
    );

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

    doc.addPage(); // Página Interação2

    doc.addImage(Interacao2, "PNG", 0, 0, 420, 297);

    doc.text(`${mvpProduto.primeiraLinhaMvpProduto}`, 207, 38); //MVP Produto
    doc.text(`${mvpProduto.segundaLinhaMvpProduto}`, 251, 38);
    doc.text(`${mvpProduto.terceiraLinhaMvpProduto}`, 295, 38);
    doc.text(`${mvpProduto.quartaLinhaMvpProduto}`, 339, 38);

    doc.text(`${mvpIndicado.primeiraLinhaMvpIndicado}`, 207,60); //MVP Indicado Para
    doc.text(`${mvpIndicado.segundaLinhaMvpIndicado}`, 251, 60);
    doc.text(`${mvpIndicado.terceiraLinhaMvpIndicado}`, 295, 60);
    doc.text(`${mvpIndicado.quartaLinhaMvpIndicado}`, 339, 60);

    doc.text(`${mvpOrientacoes.primeiraLinhaMvpOrientacoes}`, 207,88); // MVP Orientacoes
    doc.text(`${mvpOrientacoes.segundaLinhaMvpOrientacoes}`, 251,88);
    doc.text(`${mvpOrientacoes.terceiraLinhaMvpOrientacoes}`, 295,88);
    doc.text(`${mvpOrientacoes.quartaLinhaMvpOrientacoes}`, 339,88);

    doc.text(`${mvpResultado.primeiraLinhaMvpResultado}`, 207,116); // MVP Resultado
    doc.text(`${mvpResultado.segundaLinhaMvpResultado}`, 251,117);
    doc.text(`${mvpResultado.terceiraLinhaMvpResultado}`, 295,117);
    doc.text(`${mvpResultado.quartaLinhaMvpResultado}`, 339,116);

    doc.text(`${formacaoDescricao.primeiraLinhaFormacaoDescricao}`, 32,194); // Formacao do Preco Descricao
    doc.text(`${formacaoDescricao.segundaLinhaFormacaoDescricao}`, 32,212);
    doc.text(`${formacaoDescricao.terceiraLinhaFormacaoDescricao}`, 32,230);
    doc.text(`${formacaoDescricao.quartaLinhaFormacaoDescricao}`, 32,248);

    doc.text(`${formacaoCusto.primeiraLinhaFormacaoCusto}`, 85,194); // Formacao do Preco Custo
    doc.text(`${formacaoCusto.segundaLinhaFormacaoCusto}`, 85,212);
    doc.text(`${formacaoCusto.terceiraLinhaFormacaoCusto}`, 85,230);
    doc.text(`${formacaoCusto.quartaLinhaFormacaoCusto}`, 85,248);

    doc.text(`${formacaoTaxa.primeiraLinhaFormacaoTaxa}`, 139,194); // Formacao do Preco Taxa Administrativa
    doc.text(`${formacaoTaxa.segundaLinhaFormacaoTaxa}`, 139,212);
    doc.text(`${formacaoTaxa.terceiraLinhaFormacaoTaxa}`, 139,230);
    doc.text(`${formacaoTaxa.quartaLinhaFormacaoTaxa}`, 139,248);
  
    doc.text(`${formacaoImpostos.primeiraLinhaFormacaoImpostos}`, 193,194); // Formacao do Preco Impostos
    doc.text(`${formacaoImpostos.segundaLinhaFormacaoImpostos}`, 193,212);
    doc.text(`${formacaoImpostos.terceiraLinhaFormacaoImpostos}`, 193,230);
    doc.text(`${formacaoImpostos.quartaLinhaFormacaoImpostos}`, 193,248);

    doc.text(`${formacaoMargem.primeiraLinhaFormacaoMargem}`, 247,194); // Formacao do Preco Margem de Lucro
    doc.text(`${formacaoMargem.segundaLinhaFormacaoMargem}`, 247,212);
    doc.text(`${formacaoMargem.terceiraLinhaFormacaoMargem}`, 247,230);
    doc.text(`${formacaoMargem.quartaLinhaFormacaoMargem}`, 247,248);

    doc.text(`${formacaoPreco.primeiraLinhaFormacaoPreco}`, 301,194); // Formacao do Preco Margem de Lucro
    doc.text(`${formacaoPreco.segundaLinhaFormacaoPreco}`, 301,212);
    doc.text(`${formacaoPreco.terceiraLinhaFormacaoPreco}`, 301,230);
    doc.text(`${formacaoPreco.quartaLinhaFormacaoPreco}`, 301,248);

    doc.addPage(); // Página Interação3

    doc.addImage(Interacao3, "PNG", 0, 0, 420, 297);
  
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
