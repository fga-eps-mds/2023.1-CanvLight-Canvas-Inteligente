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
  perfil2,
  resultado,
  orientacao,
  indicado,
  opotunidades,
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
    //tabela1
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

    // tabela dois

    doc.text( //Parceiro
      `${empresa.primeiraLinhaEmpresa}`, 
      38, 
      135
    );

    doc.text( //Parceiro
      `${empresa.segundaLinhaEmpresa}`, 
      38, 
      150
    );

    doc.text( //Parceiro
      `${empresa.terceiraLinhaEmpresa}`, 
      38, 
      165
    );

    doc.text( //insumos
      `${insumos.primeiraLinhaInsumos}`, 
      88, 
      135
    );

    doc.text( //insumos
      `${insumos.segundaLinhaInsumos}`, 
      88, 
      150
    );

    doc.text( //insumos
      `${insumos.terceiraLinhaInsumos}`, 
      88, 
      165
    );

    doc.text( //beneficios
      `${beneficios.primeiraLinhaBeneficios}`, 
      137, 
      135
    );

    doc.text( //beneficios
      `${beneficios.segundaLinhaBeneficios}`, 
      137, 
      150
    );

    doc.text( //beneficios
      `${beneficios.terceiraLinhaBeneficios}`, 
      137, 
      165
    );

    doc.text( //fornecer
      `${fornecer.primeiraLinhaFornecer}`, 
      187, 
      135
    );

    doc.text( //fornecer
      `${fornecer.segundaLinhaFornecer}`, 
      187, 
      150
    );

    doc.text( //fornecer
      `${fornecer.terceiraLinhaFornecer}`, 
      187, 
      165
    );

    doc.text( //risco
      `${risco.primeiraLinhaRisco}`, 
      238, 
      135
    );

    doc.text( //risco
      `${risco.segundaLinhaRisco}`, 
      238, 
      150
    );

    doc.text( //risco
      `${risco.terceiraLinhaRisco}`, 
      238, 
      165
    );

    doc.text( //verticalizar
      `${verticalizar.primeiraLinhVerticalizar}`, 
      289, 
      135
    );

    doc.text( //verticalizar
      `${verticalizar.segundaLinhaVerticalizar}`, 
      289, 
      150
    );

    doc.text( //verticalizar
      `${verticalizar.terceiraVerticalizar}`, 
      289, 
      165
    );

    doc.text( //nota
      `${nota.primeiraLinhaNota}`, 
      340, 
      135
    );

    doc.text( //nota
      `${nota.segundaLinhaNota}`, 
      340, 
      150
    );

    doc.text( //nota
      `${nota.terceiraLinhaNota}`, 
      340, 
      165
    );

    doc.text( //peefil1
      `${perfil1.primeiraLinhaPerfil1}`, 
      95, 
      230
    );

    doc.text( //perfil1
      `${perfil1.segundaLinhaPerfil1}`, 
      95, 
      246
    );

    doc.text( //perfil1
      `${perfil1.terceiraLinhaPerfil1}`, 
      95, 
      262
    );

    doc.text( //peefil2
      `${perfil2.primeiraLinhaPerfil2}`, 
      268, 
      230
    );

    doc.text( //perfil2
      `${perfil2.segundaLinhaPerfil2}`, 
      268, 
      246
    );

    doc.text( //perfil2
      `${perfil2.terceiraLinhaPerfil2}`, 
      268, 
      262
    );


    doc.addPage(); //Obervação2
    
    doc.addImage(Observacao2, "PNG", 0, 0, 420, 297);

    doc.text( //ps
      `${psObser.primeiroP}`, 
      30, 
      35
    );

    doc.text( //ps
      `${psObser.segundoP}`, 
      100, 
      35
    );

    doc.text( //ps
      `${psObser.terceiroP}`, 
      30, 
      68
    );

    doc.text( //ps
      `${psObser.quartoP}`, 
      105, 
      68
    );

    doc.text( //alinhamentos
      `${aproximados.alinhadosObser2}`, 
      130, 
      147
    );

    doc.text( //proximos
      `${aproximados.proximos}`, 
      340, 
      147
    );

    doc.text( //concorete
      `${aproximados.concorrenteObser2}`, 
      115, 
      163
    );

    doc.text( //ferramentas
      `${ferramentas.primeiraLinhaFerramentas}`, 
      55, 
      220
    );

    doc.text( //ferramentas
      `${ferramentas.segundaLinhaFerramentas}`, 
      55, 
      237
    );

    doc.text( //ferramentas
      `${ferramentas.terceiraLinhaFerramentas}`, 
      55, 
      254
    );

    doc.text( //requisitos
      `${requisitos.primeiraLinhaRequisitos}`, 
      110, 
      220
    );

    doc.text( //requisitos
      `${requisitos.segundaLinhaRequisitos}`, 
      110, 
      237
    );

    doc.text( //requisitos
      `${requisitos.terceiraLinhaRequisitos}`, 
      110, 
      254
    );

    doc.text( //Oportunidades
      `${opotunidades.primeiraLinhaOportunidades}`, 
      165, 
      220
    );

    doc.text( //oportunidades
      `${opotunidades.segundaLinhaOportunidades}`, 
      165, 
      237
    );

    doc.text( //oportunidades
      `${opotunidades.terceiraLinhaOportunidades}`, 
      165, 
      254
    );

    doc.text( //indicado
      `${indicado.primeiraLinhaIndicado}`, 
      220, 
      220
    );

    doc.text( //indicado
      `${indicado.segundaLinhaIndicado}`, 
      220, 
      237
    );

    doc.text( //indicado
      `${indicado.terceiraLinhaIndicado}`, 
      220, 
      254
    );

    doc.text( //orientacao
      `${orientacao.primeiraLinhaOrientacao}`, 
      275, 
      220
    );

    doc.text( //orientacao
      `${orientacao.segundaLinhaOrientacao}`, 
      275, 
      237
    );

    doc.text( //orientacao
      `${orientacao.terceiraLinhaOrientacao}`, 
      275, 
      254
    );

    doc.text( //resultado
      `${resultado.primeiraLinhaResultado}`, 
      330, 
      220
    );

    doc.text( //resultado
      `${resultado.segundaLinhaResultado}`, 
      330, 
      237
    );

    doc.text( //orientacao
      `${resultado.terceiraLinhaResultado}`, 
      330, 
      254
    );

    doc.addPage(); //Obervação3
    
    doc.addImage(Observacao3, "PNG", 0, 0, 420, 297);

    doc.text( //Ferramentas
      `${ferramentasObser3.primeiraLinhaFerramentaObser3}`, 
      50, 
      70
    );

    doc.text( //Ferramentas
      `${ferramentasObser3.segundaLinhaFerramentaObser3}`, 
      50, 
      95
    );

    doc.text( //indicado para
      `${indicadoPara.primeiraLinhaIndicadoPara}`, 
      120, 
      70
    );

    doc.text( //indicado para
      `${indicadoPara.segundaLinhaIndicadoPara}`, 
      120, 
      95
    );

    doc.text( //orientação uso
      `${orientacaoUso.primeiraLinhaOrientacaoUso}`, 
      190, 
      70
    );

    doc.text( //orientação uso
      `${orientacaoUso.segundaLinhaOrientacaoUso}`, 
      190, 
      95
    );

    doc.text( //resultado esperado
      `${resultadoEsperado.primeiraLinhaResultadoEsparado}`, 
      260, 
      70
    );

    doc.text( //resutado esperado
      `${resultadoEsperado.segundaLinhaResultadoEsparado}`, 
      260, 
      95
    );

    doc.text( //Ferramentas
      `${ferramentasObser3P.primeiraLinhaFerramentaObser3P}`, 
      105, 
      195
    );

    doc.text( //Ferramentas
      `${ferramentasObser3P.segundaLinhaFerramentaObser3P}`, 
      105, 
      220
    );

    doc.text( //indicado para
      `${indicadoParaP.primeiraLinhaIndicadoParaP}`, 
      175, 
      195
    );

    doc.text( //indicado para
      `${indicadoParaP.segundaLinhaIndicadoParaP}`, 
      175, 
      220
    );

    doc.text( //orientação uso
      `${orientacaoUsoP.primeiraLinhaOrientacaoUsoP}`, 
      245, 
      195
    );

    doc.text( //orientação uso
      `${orientacaoUsoP.segundaLinhaOrientacaoUsoP}`, 
      245, 
      220
    );

    doc.text( //resultado esperado
      `${resultadoEsperadoP.primeiraLinhaResultadoEsparadoP}`, 
      315, 
      195
    );

    doc.text( //resutado esperado
      `${resultadoEsperadoP.segundaLinhaResultadoEsparadoP}`, 
      315, 
      220
    );


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

    doc.text(`${canaisCanal.primeiraLinhaCanaisCanal}`, 185, 63); // Canais de Venda Canais
    doc.text(`${canaisCanal.segundaLinhaCanaisCanal}`, 185, 90);
    doc.text(`${canaisCanal.terceiraLinhaCanaisCanal}`, 185, 126);
    doc.text(`${canaisCanal.quartaLinhaCanaisCanal}`, 185, 162);

    doc.text(`${canaisObjetivo.primeiraLinhaCanaisObjetivo}`, 248, 63); // Canais de Venda Objetivo
    doc.text(`${canaisObjetivo.segundaLinhaCanaisObjetivo}`, 248, 90);
    doc.text(`${canaisObjetivo.terceiraLinhaCanaisObjetivo}`, 248, 126);
    doc.text(`${canaisObjetivo.quartaLinhaCanaisObjetivo}`, 248, 162);

    doc.text(`${canaisMetrica.primeiraLinhaCanaisMetrica}`, 318, 63); // Canais de Venda Metrica
    doc.text(`${canaisMetrica.segundaLinhaCanaisMetrica}`, 318, 90);
    doc.text(`${canaisMetrica.terceiraLinhaCanaisMetrica}`, 318, 126);
    doc.text(`${canaisMetrica.quartaLinhaCanaisMetrica}`, 317, 162);

    doc.text(`${inteQuatroP.primeiraLinhaInteQuatroP}`, 152, 222); // Canais de Venda Metrica
    doc.text(`${inteQuatroP.segundaLinhaInteQuatroP}`, 224, 222);
    doc.text(`${inteQuatroP.terceiraLinhaInteQuatroP}`, 152, 257);
    doc.text(`${inteQuatroP.quartaLinhaInteQuatroP}`, 224, 257);
  
    // doc.addPage(); // Página Canvas

    // var MargemX = 12; // Variavel para a margem horizontal
    // var MargemY = 10; // Variavel para a margem vertical
    
    // doc.addImage(logo, 'PNG', 1, 1, 10, 10); // Adiciona a logo no canto do PDF

    // doc.setFillColor(0, 0, 0, 0.22); // Seleciona a cor do Fundo
    // doc.rect(MargemX, MargemY, 407, 286, 'F'); // Adiciona o Retângulo maior

    // doc.setFontSize(16) // Tamanho da Fonte

    // doc.rect(MargemX, MargemY, 81, 210 ) // Retangulo Parcerias principais
    // doc.rect(81+MargemX, MargemY, 81, 105 ) // Retangulo Atividades-chave
    // doc.rect(81+MargemX, 105+MargemY, 81, 105 ) // Retangulo Recursos Principais
    // doc.rect(MargemX, 210+MargemY, 203, 76 ) // Retangulo Estrutura de Custo
    // doc.rect(162+MargemX, MargemY, 81, 210 ) // Retangulo Proposta de Valor
    // doc.rect(243+MargemX, MargemY, 81, 105 ) // Retangulo Relacionamento com Clientes
    // doc.rect(243+MargemX, 105+MargemY, 81, 105 ) // Retangulo Canais
    // doc.rect(324+MargemX, MargemY, 83, 210 ) // Retangulo Segmentos de Clientes *OBS 2mm a mais devido ao erro de calculo
    // doc.rect(203+MargemX, 210+MargemY, 204, 76 ) // Retangulo Fontes de Receita  *OBS 1mm a mais devido ao erro de calculo

    // //Parceiros Principais
    // doc.text(
    //   `Principais Parceiros`,
    //   15,
    //   18
    // );

    // doc.text(
    //   `${parceiro.primeiraLinhaParceiro}`,
    //   15,
    //   28
    // );

    // doc.text(
    //   `${parceiro.segundaLinhaParceiro}`,
    //   15,
    //   48
    // );

    // doc.text(
    //   `${parceiro.terceiraLinhaParceiro}`,
    //   15,
    //   68
    // );

    // //Atividades-cahves
    // doc.text(
    //   `Atividades-chaves`,
    //   96,
    //   18
    // );

    // //Recursos Principais
    // doc.text(
    //   `Recursos Principais`,
    //   96,
    //   123
    // );

    // //Estrutura de Custo
    // doc.text(
    //   `Estrutura de custo`,
    //   15,
    //   228
    // );

    

    // //Proposta de Valor
    // doc.text(
    //   `Proposta de Valor`,
    //   177,
    //   18
    // );

    // //Relacionamento com Clientes
    // doc.text(
    //   `Relacionamento com Clientes`,
    //   258,
    //   18
    // );

    // //Canais
    // doc.text(
    //   `Canais`,
    //   258,
    //   123
    // );

    // //Segmentos de Clientes
    // doc.text(
    //   `Segmentos de Clientes`,
    //   339,
    //   18
    // );

    // //Fontes de Receita
    // doc.text(
    //   `Fontes de Receita`,
    //   218,
    //   228
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
