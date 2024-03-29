import React from "react";
import checkIcon from "../../images/check.png";
import { jsPDF } from "jspdf";
//import logo from "../../images/logo_canvlight.png";
import Situacao1 from "../../images/situacao1.png";
import Situacao2 from "../../images/situacao2.png";
import Situacao3 from "../../images/situacao3.png";
import Situacao4 from "../../images/situacao4.png";
import Situacao5 from "../../images/situacao5.png";
import Intuicao from "../../images/Intuicao.png";
import Observacao1 from "../../images/Observacao1.png"
import Observacao2 from "../../images/Observacao2.png"
import Observacao3 from "../../images/Observacao3.png"
import Interacao1 from "../../images/Interacao1.png";
import Interacao2 from "../../images/Interacao2.png";
import Interacao3 from "../../images/Interacao3.png";
import Descricao1 from "../Maturidade/Maturidade5/Maturidade5Descricoes/descricao1.json";
import Descricao2 from "../Maturidade/Maturidade5/Maturidade5Descricoes/descricao2.json";
import Descricao3 from "../Maturidade/Maturidade5/Maturidade5Descricoes/descricao3.json";
import Descricao4 from "../Maturidade/Maturidade5/Maturidade5Descricoes/descricao4.json";
import Descricao5 from "../Maturidade/Maturidade5/Maturidade5Descricoes/descricao5.json";

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
  porcentagemAdm,
  porcentagemRh,
  porcentagemFin,
  porcentagemMkt
}) {
  function gerarPDF() {
    const doc = new jsPDF({
      orientation: "landscape", // W = 420 e H = 297
      format: 'a3',
      unit: 'mm'
    });

    doc.addImage(Intuicao, "PNG", 0, 0, 420, 297);

    doc.setFontSize(13) // Tamanho da Fonte
    
    doc.setTextColor(0);

    doc.text( //Projeto
      `${intuTextos.primeiraLinhaIntuTextos}`, 
      60, 
      29
    );

    doc.text( //equipe
      `${intuTextos.segundaLinhaIntuTextos}`, 
      27, 
      57
    );

    doc.text( //ikigai
      `${intuTextos.terceiraLinhaIntuTextos}`, 
      27, 
      233
    );

    doc.text( //tecnico
      `${intuTecnico.primeiraLinhaIntuTecnico}`, 
      81, 
      120
    );

    doc.text( //tecnico
      `${intuTecnico.segundaLinhaIntuTecnico}`, 
      151, 
      120
    );

    doc.text( //resiliente
      `${intuResiliente.primeiraLinhaIntuResiliente}`, 
      81, 
      137
    );

    doc.text( //resiliente
      `${intuResiliente.segundaLinhaIntuResiliente}`, 
      153, 
      137
    );

    doc.text( //emocional
      `${intuEmocional.primeiraLinhaIntuEmocional}`, 
      81, 
      153
    );

    doc.text( //emocional
      `${intuEmocional.segundaLinhaIntuEmocional}`, 
      153, 
      154
    );

    doc.text( //mercadologia
      `${intuMercadologico.primeiraLinhaIntuMercadologico}`, 
      81, 
      171
    );

    doc.text( //mercadologia
      `${intuMercadologico.segundaLinhaIntuMercadologico}`, 
      153, 
      171
    );

    doc.text( //integrador
      `${intuIntegrador.primeiraLinhaIntuIntegrador}`, 
      81, 
      188
    );

    doc.text( //integrador
      `${intuIntegrador.segundaLinhaIntuIntegrador}`, 
      153, 
      188
    );

    doc.text( //p1
      `${intuQuatroP.primeiraLinhaIntuQuatroP}`, 
      270, 
      58
    );

    doc.text( //p2
      `${intuQuatroP.segundaLinhaIntuQuatroP}`, 
      341, 
      58
    );

    doc.text( //p3
      `${intuQuatroP.terceiraLinhaIntuQuatroP}`, 
      270, 
      93
    );

    doc.text( //p4
      `${intuQuatroP.quartaLinhaIntuQuatroP}`, 
      341, 
      93
    );

    doc.text( //potencialidade
      `${sintesePotencialidades.primeiraLinhaSintesePotencialidades}`, 
      259, 
      168
    );

    doc.text( //potencialidade
      `${sintesePotencialidades.segundaLinhaSintesePotencialidades}`, 
      259, 
      184
    );

    doc.text( //potencialidade
      `${sintesePotencialidades.terceiraLinhaSintesePotencialidades}`, 
      259, 
      200
    );

    doc.text( //resultados
      `${sinteseResultados.primeiraLinhaSinteseResultados}`, 
      328, 
      168
    );

    doc.text( //resultados
      `${sinteseResultados.segundaLinhaSinteseResultados}`, 
      328, 
      184
    );

    doc.text( //resultados
      `${sinteseResultados.terceiraLinhaSinteseResultados}`, 
      328, 
      200
    );


    doc.addPage(); //Obervação1
    
    doc.addImage(Observacao1, "PNG", 0, 0, 420, 297);
    //tabela1
    doc.text( //empresa
      `${empresa.primeiraLinhaEmpresa}`, 
      37, 
      53
    );

    doc.text( //empresa
      `${empresa.segundaLinhaEmpresa}`, 
      37, 
      70
    );

    doc.text( //empresa
      `${empresa.terceiraLinhaEmpresa}`, 
      37, 
      85
    );

    doc.text( //diferenca
      `${diferenca.primeiraLinhaDiferenca}`, 
      88, 
      53
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
      53
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
      53
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
      53
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
      53
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
      53
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
      `${parceiro.primeiraLinhaParceiro}`, 
      37, 
      135
    );

    doc.text( //Parceiro
      `${parceiro.segundaLinhaParceiro}`, 
      37, 
      150
    );

    doc.text( //Parceiro
      `${parceiro.terceiraLinhaParceiro}`, 
      37, 
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
      `${verticalizar.primeiraLinhaVerticalizar}`, 
      289, 
      135
    );

    doc.text( //verticalizar
      `${verticalizar.segundaLinhaVerticalizar}`, 
      289, 
      150
    );

    doc.text( //verticalizar
      `${verticalizar.terceiraLinhaVerticalizar}`, 
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
      92, 
      230
    );

    doc.text( //perfil1
      `${perfil1.segundaLinhaPerfil1}`, 
      92, 
      246
    );

    doc.text( //perfil1
      `${perfil1.terceiraLinhaPerfil1}`, 
      92, 
      262
    );

    doc.text( //perfil2
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
      31
    );

    doc.text( //ps
      `${psObser.segundoP}`, 
      102, 
      31
    );

    doc.text( //ps
      `${psObser.terceiroP}`, 
      30, 
      66
    );

    doc.text( //ps
      `${psObser.quartoP}`, 
      102, 
      66
    );

    doc.text( //alinhamentos
      `${aproximados.alinhadosObser2}`, 
      129, 
      148
    );

    doc.text( //proximos
      `${aproximados.concorrenteObser2}`, 
      341, 
      148
    );

    doc.text( //concorete
      `${aproximados.proximos}`, 
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
      256
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
      256
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
      256
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
      256
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
      256
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
      256
    );

    doc.addPage(); //Obervação3
    
    doc.addImage(Observacao3, "PNG", 0, 0, 420, 297);

    doc.text( //Ferramentas
      `${ferramentasObser3.primeiraLinhaFerramentaObser3}`, 
      40, 
      65
    );

    doc.text( //Ferramentas
      `${ferramentasObser3.segundaLinhaFerramentaObser3}`, 
      40, 
      87
    );

    doc.text( //indicado para
      `${indicadoPara.primeiraLinhaIndicadoPara}`, 
      112, 
      65
    );

    doc.text( //indicado para
      `${indicadoPara.segundaLinhaIndicadoPara}`, 
      112, 
      87
    );

    doc.text( //orientação uso
      `${orientacaoUso.primeiraLinhaOrientacaoUso}`, 
      184, 
      65
    );

    doc.text( //orientação uso
      `${orientacaoUso.segundaLinhaOrientacaoUso}`, 
      184, 
      87
    );

    doc.text( //resultado esperado
      `${resultadoEsperado.primeiraLinhaResultadoEsparado}`, 
      257, 
      65
    );

    doc.text( //resutado esperado
      `${resultadoEsperado.segundaLinhaResultadoEsparado}`, 
      257, 
      87
    );

    doc.text( //Ferramentas
      `${ferramentasObser3P.primeiraLinhaFerramentaObser3P}`, 
      100, 
      191
    );

    doc.text( //Ferramentas
      `${ferramentasObser3P.segundaLinhaFerramentaObser3P}`, 
      100, 
      215
    );

    doc.text( //indicado para
      `${indicadoParaP.primeiraLinhaIndicadoParaP}`, 
      173, 
      191
    );

    doc.text( //indicado para
      `${indicadoParaP.segundaLinhaIndicadoParaP}`, 
      172, 
      215
    );

    doc.text( //orientação uso
      `${orientacaoUsoP.primeiraLinhaOrientacaoUsoP}`, 
      245, 
      191
    );

    doc.text( //orientação uso
      `${orientacaoUsoP.segundaLinhaOrientacaoUsoP}`, 
      245, 
      215
    );

    doc.text( //resultado esperado
      `${resultadoEsperadoP.primeiraLinhaResultadoEsparadoP}`, 
      316, 
      191
    );

    doc.text( //resutado esperado
      `${resultadoEsperadoP.segundaLinhaResultadoEsparadoP}`, 
      316, 
      215
    );


    doc.addPage(); // Página Interação1

    doc.addImage(Interacao1, "PNG", 0, 0, 420, 297);

    doc.setFontSize(13) // Tamanho da Fonte

    doc.text( // Analise Custos Descricao
      `${descricao.primeiraLinhaDescricao}`, 
      34, 
      58
    );
    doc.text(
      `${descricao.segundaLinhaDescricao}`, 
      34, 
      76
    );
    doc.text(
      `${descricao.terceiraLinhaDescricao}`, 
      34, 
      94
    );

    doc.text( // Analise Custos Preco
      `${analisePreco.primeiraLinhaAnalisePreco}`,
      87,
      58
    );
    doc.text(
      `${analisePreco.segundaLinhaAnalisePreco}`,
      87,
      76
    );
    doc.text(
      `${analisePreco.terceiraLinhaAnalisePreco}`,
      87,
      94
    );

    doc.text( // Analise Custos Quantidade
      `${analiseQuantidade.primeiraLinhaAnaliseQuantidade}`,
      141,
      58
    );
    doc.text(
      `${analiseQuantidade.segundaLinhaAnaliseQuantidade}`,
      141,
      76
    );
    doc.text(
      `${analiseQuantidade.terceiraLinhaAnaliseQuantidade}`,
      141,
      94
    );
    
    doc.text( // Analise Custos Custo
      `${analiseCusto.primeiraLinhaAnaliseCusto}`,
      195,
      58
    );
    doc.text(
      `${analiseCusto.segundaLinhaAnaliseCusto}`,
      195,
      76
    );
    doc.text(
      `${analiseCusto.terceiraLinhaAnaliseCusto}`,
      195,
      94
    );
    doc.text(
      `${analiseCusto.quartaLinhaAnaliseCusto}`,
      195,
      112
    );

    doc.text( // Analise de Preços e Diferenciais Diferencial
      `${analiseDiferencial.primeiraLinhaAnaliseDiferencial}`,
      87,
      192
    );
    doc.text(
      `${analiseDiferencial.segundaLinhaAnaliseDiferencial}`,
      141,
      192
    );
    doc.text(
      `${analiseDiferencial.terceiraLinhaAnaliseDiferencial}`,
      195,
      192
    );
    doc.text(
      `${analiseDiferencial.quartaLinhaAnaliseDiferencial}`,
      249,
      192
    );
    doc.text(
      `${analiseDiferencial.quintaLinhaAnaliseDiferencial}`,
      303,
      192
    );

    doc.text( // Analise de Precos e Diferenciais Precos
      `${analisePreDif.primeiraLinhaAnalisePreDif}`,
      87,
      228
    );
    doc.text(
      `${analisePreDif.segundaLinhaAnalisePreDif}`,
      141,
      228
    );
    doc.text(
      `${analisePreDif.terceiraLinhaAnalisePreDif}`,
      195,
      228
    );
    doc.text(
      `${analisePreDif.quartaLinhaAnalisePreDif}`,
      249,
      228
    );
    doc.text(
      `${analisePreDif.quintaLinhaAnalisePreDif}`,
      303,
      228
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

    doc.text(`${mvpResultado.primeiraLinhaMvpResultado}`, 207,117); // MVP Resultado
    doc.text(`${mvpResultado.segundaLinhaMvpResultado}`, 251,117);
    doc.text(`${mvpResultado.terceiraLinhaMvpResultado}`, 295,117);
    doc.text(`${mvpResultado.quartaLinhaMvpResultado}`, 339,117);

    doc.text(`${formacaoDescricao.primeiraLinhaFormacaoDescricao}`, 33,194); // Formacao do Preco Descricao
    doc.text(`${formacaoDescricao.segundaLinhaFormacaoDescricao}`, 33,212);
    doc.text(`${formacaoDescricao.terceiraLinhaFormacaoDescricao}`, 33,230);
    doc.text(`${formacaoDescricao.quartaLinhaFormacaoDescricao}`, 33,248);

    doc.text(`${formacaoCusto.primeiraLinhaFormacaoCusto}`, 86,194); // Formacao do Preco Custo
    doc.text(`${formacaoCusto.segundaLinhaFormacaoCusto}`, 86,212);
    doc.text(`${formacaoCusto.terceiraLinhaFormacaoCusto}`, 86,230);
    doc.text(`${formacaoCusto.quartaLinhaFormacaoCusto}`, 86,248);

    doc.text(`${formacaoTaxa.primeiraLinhaFormacaoTaxa}`, 140,194); // Formacao do Preco Taxa Administrativa
    doc.text(`${formacaoTaxa.segundaLinhaFormacaoTaxa}`, 140,212);
    doc.text(`${formacaoTaxa.terceiraLinhaFormacaoTaxa}`, 140,230);
    doc.text(`${formacaoTaxa.quartaLinhaFormacaoTaxa}`, 140,248);
  
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

    doc.addPage(); // Maturidade
    doc.setFillColor('#fcdbc1'); // Seleciona a cor do Fundo #fcdbc1
    doc.rect(0, 0, 420, 297, 'F'); // Adiciona o Retângulo maior

    var porcent1 = +porcentagemAdm;
    var porcent2 = +porcentagemRh;
    var porcent3 = +porcentagemFin;
    var porcent4 = +porcentagemMkt;

    function nivelMaturidade(){

      var adm = porcent1;
      var rh = porcent2;
      var fin = porcent3;
      var mkt = porcent4;
  
      var soma = adm+rh+fin+mkt;
      var media = soma/4;
      var nivel = null;
  
      if (media <= 20) {
        nivel = 1;
      } else if (media > 20 && media <= 40) {
        nivel = 2;
      } else if (media > 40 && media <= 60) {
        nivel = 3;
      } else if (media > 60 && media <= 80) {
        nivel = 4;
      } else if (media > 80 && media <= 100) {
        nivel = 5;
      }
  
      return nivel;
    }
  
    var nivel = nivelMaturidade();
    var imgSituacao = null;
    var textSituacao = null;
    
    if (nivel === 1) {
      imgSituacao = Situacao1;
      textSituacao = Descricao1;
    } else if (nivel === 2) {
      imgSituacao = Situacao2;
      textSituacao = Descricao2;
    } else if (nivel === 3) {
      imgSituacao = Situacao3;
      textSituacao = Descricao3;
    } else if (nivel === 4) {
      imgSituacao = Situacao4;
      textSituacao = Descricao4;
    } else if (nivel === 5) {
      imgSituacao = Situacao5;
      textSituacao = Descricao5;
    }
    doc.addImage(imgSituacao, "png", 250, 42, 26, 26);
    doc.setFontSize(35);
    doc.text(`Maturidade Nível ${nivel}`, 140, 62);

    doc.setFontSize(20);

    // Funcao que separa o texto em linhas
    var tamanhoMaximo = 60;
    function dividirTextoEmLinhas(texto, tamanhoMaximo) {
      var linhas = [];
      var palavras = texto.split(' ');
      var linhaAtual = '';
    
      for (var i = 0; i < palavras.length; i++) {
        var palavra = palavras[i];
        
        if (linhaAtual.length + palavra.length <= tamanhoMaximo) {
          linhaAtual += palavra + ' ';
        } else {
          linhas.push(linhaAtual);
          linhaAtual = palavra + ' ';
        }
      }
    
      // Adiciona a última linha
      linhas.push(linhaAtual);
    
      return linhas;
    };
    var linhas = dividirTextoEmLinhas(textSituacao, tamanhoMaximo);
    // Printa o texto separado
    var j = 0
    for (var i = 0; i < linhas.length; i++) {
      doc.text(100, 80 + (i * 10), linhas[i]);
      j = i;
    }

    doc.text(`Área Administrativa: ${porcentagemAdm}%`, 100, (80 + (j * 10)) + 20);
    doc.text(`Área de Recursos Humanos: ${porcentagemRh}%`, 100, (80 + (j * 10))+30);
    doc.text(`Área Financeira: ${porcentagemFin}%`, 100, (80 + (j * 10))+40);
    doc.text(`Marketing: ${porcentagemMkt}%`, 100, (80 + (j * 10))+50);

    doc.save("Canvas.pdf"); // Salva o PDF
  }

  return (
    <div>
      <img
        src={checkIcon}
        alt="Confirma"
        className="confirma"
        onClick={gerarPDF}
      />
    </div>
  );
}

export default GeradorPDF;
