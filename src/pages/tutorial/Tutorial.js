import React from "react";
import "./tutorial.css";
import logo from "../../images/logo_canvlight.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Tutorial() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - window.innerHeight / 2;
        window.scrollTo(0, middle);
      }
    }
  }, []);

  return (
    <div className="tut_body">
      <div className="navbar">
        <div className="logo">
          <Link to="/2023.1-CanvLight-Canvas-Inteligente">
            <img src={logo} alt="Logo" className="logo_navbar" />
            <p className="name_navbar">CanvLight</p>
          </Link>
        </div>

        <nav className="desktop">
          <ul>
            <Link to="/2023.1-CanvLight-Canvas-Inteligente/tutorial">
              <li>Como usar?</li>
            </Link>
            <Link to="/2023.1-CanvLight-Canvas-Inteligente/canvas">
              <li>Gerar canvas</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div id="tut_introducao" className="introducao">
        <h2>
          • Gerador de Canvas de Negócio: Crie, Visualize e Baixe seu Canvas com
          Facilidade!
        </h2>
        <p>
          Bem-vindo ao nosso tutorial sobre o Gerador de Canvas de Negócio! Com
          esta ferramenta, você poderá criar o seu próprio Canvas de forma fácil
          e eficiente. Para começar, é necessário responder a cada módulo
          individualmente.
          <br />
          Na página inicial, você encontrará um botão chamado "Gerar Canvas". Ao
          clicar neste botão, você será redirecionado para uma nova aba, onde
          poderá preencher as informações necessárias. Nessa página, você
          encontrará quatro botões: Intuição, Observação, Interação e Confirmar.
          <br />
          <br />
          • Módulo de Intuição: Neste módulo, concentre-se em suas ideias
          iniciais, insights e intuições sobre o seu negócio. Pense nos seus
          valores, propósito, missão e no problema que seu produto ou serviço
          resolve. Explore suas ideias com criatividade e não tenha medo de
          pensar fora da caixa.
          <br />
          • Módulo de Observação: Aqui, é importante analisar o mercado, os
          concorrentes e os clientes. Observe o que está acontecendo no seu
          segmento, identifique tendências e analise o comportamento dos
          consumidores. Isso ajudará você a entender melhor o contexto em que o
          seu negócio está inserido e a identificar oportunidades.
          <br />
          • Módulo de Interação: Neste módulo, pense nas principais interações
          que ocorrem no seu negócio. Considere como você se relaciona com os
          clientes, parceiros e fornecedores. Analise os canais de comunicação,
          as estratégias de marketing e as formas de entrega do seu produto ou
          serviço. <br />
          • Módulo de Confirmar: No último módulo, é hora de revisar todas as
          informações fornecidas anteriormente e confirmar a consistência e
          coerência do seu Canvas. Verifique se as seções estão alinhadas e se
          você abordou todos os aspectos importantes do seu negócio.
          Certifique-se de que sua proposta de valor esteja clara e de que os
          diferentes módulos se complementem.
          <br />
          <br id="breakpoint_introducao" />
          Ao clicar no botão "Intuição", você terá acesso a um formulário para
          preenchimento. Após responder todas as perguntas, você poderá
          finalizar clicando no ícone de verificação localizado no canto
          inferior direito da página. Em seguida, você passará para a próxima
          parte do Canvas. Repita o mesmo processo para os módulos de Observação
          e Interação, preenchendo os formulários e clicando no ícone de
          verificação.
          <br />
          Após preencher os três módulos, clique novamente no ícone de
          verificação na página que exibe os quatro botões. Isso permitirá que
          você acesse a pré-visualização do seu Canvas. A pré-visualização
          mostrará uma representação visual do seu Canvas de Negócio completo,
          com todos os módulos preenchidos.
          <br />
          Por fim, você poderá baixar o seu Canvas de Negócio, Assim, você terá
          em mãos uma poderosa ferramenta para planejar e visualizar a estrutura
          e os elementos-chave do seu negócio.
          <br />
          Não hesite em explorar todas as funcionalidades do nosso Gerador de
          Canvas de Negócio para obter insights valiosos e organizar suas ideias
          de maneira eficaz. Boa sorte na criação do seu Canvas!
          <br />
          Para ajudar você a preencher cada campo do questionário, abaixo seguem
          algumas dicas úteis:
          <br />
        </p>
      </div>
      <div id="tut_dna" className="tut_dna">
        <h2>• DNA do Negócio</h2>
        <p>
          Passo 1: Identifique as áreas-chave do seu negócio. Pense nas
          diferentes áreas que compõem a sua empresa, como produtos/serviços,
          clientes, concorrentes, marketing, operações, recursos humanos, entre
          outras. Liste essas áreas na primeira coluna da tabela. <br />
          Passo 2: Identifique os atributos de cada área Para cada área listada,
          pense nos atributos ou características específicas que são importantes
          para o seu negócio. Por exemplo, se a área for "produtos/serviços", os
          atributos podem incluir qualidade, inovação, preço, entre outros.
          Liste esses atributos na segunda coluna da tabela, ao lado da área
          correspondente.
          <br /> Passo 3: Avalie o nível de importância Agora, você precisa
          avaliar o nível de importância de cada atributo para o seu negócio.
          Você pode usar uma escala de 1 a 5, por exemplo, onde 1 representa
          baixa importância e 5 representa alta importância. Preencha a terceira
          coluna da tabela com essas avaliações.
        </p>
      </div>
      <div id="tut_ikigai" className="tut_ikigai">
        <h2>• Ikigai</h2>
        <p>
          O "ikigai" é um conceito japonês que se refere ao propósito ou razão
          de ser de uma pessoa ou organização. No contexto de um negócio, o
          "ikigai" é a combinação entre quatro elementos essenciais: paixão,
          missão, profissão e vocação. Vamos seguir alguns passos para preencher
          sobre o "ikigai" do negócio: <br />
          <br />
          Passo 1: Identifique a paixão do negócio, o que o motiva e inspira.{" "}
          <br />
          Passo 2: Defina a missão do negócio, seu propósito central. <br />
          Passo 3: Identifique a profissão, as habilidades e competências em que
          o negócio é bom. <br />
          Passo 4: Descubra a vocação, as necessidades e desejos do mercado.{" "}
          <br />
          Passo 5: Encontre a interseção entre a paixão, missão, profissão e
          vocação.
          <br />
          Passo 6: Refine o "ikigai" e garanta o alinhamento de toda a equipe.
        </p>
      </div>
      <div id="tut_fourps" className="tut_fourps">
        <h2>• 4 Ps do Negócio</h2>
        <p>
          A tabela dos 4 P's do negócio é uma ferramenta de marketing usada para
          analisar e planejar estratégias relacionadas aos principais elementos
          de marketing de um produto ou serviço. Os 4 P's são: Produto, Preço,
          Praça (ou Distribuição) e Promoção. Vamos seguir alguns passos para
          preencher a tabela: <br />
          <br />
          Passo 1: Liste os 4 P's: Produto, Preço, Praça e Promoção.
          <br />
          Passo 2: Descreva o Produto: suas características, funcionalidades e
          benefícios. <br />
          Passo 3: Defina o Preço considerando custos, concorrência e valor
          percebido pelo cliente.
          <br />
          Passo 4: Identifique a Praça (Distribuição): os canais pelos quais o
          produto chegará aos clientes.
          <br />
          Passo 5: Planeje a Promoção: estratégias de marketing para promover o
          produto.
          <br />
          Passo 6: Avalie e ajuste a consistência e coerência entre os 4 P's,
          fazendo alterações conforme necessário.
        </p>
      </div>
      <div id="tut_sintese" className="tut_sintese">
        <h2>• Síntese</h2>
        <p>
          Uma síntese de valor é uma ferramenta usada para identificar as
          potencialidades e os resultados esperados de um projeto, produto ou
          serviço. Vamos seguir alguns passos para preencher essa síntese:{" "}
          <br />
          <br />
          Passo 1: Liste as potencialidades, ou seja, os pontos fortes e
          vantagens do projeto, produto ou serviço. Descreva os resultados
          esperados, ou seja, os objetivos e benefícios que você deseja
          alcançar.
          <br />
          Passo 2: Verifique se as potencialidades estão alinhadas com os
          resultados esperados.
          <br />
          Passo 3: Faça ajustes, se necessário, para garantir a relevância e
          conexão entre potencialidades e resultados.
          <br />
          Passo 4: Compartilhe a síntese de valor para comunicar o valor e
          benefícios do projeto, produto ou serviço.
          <br />
          Passo 5: Revise periodicamente a síntese de valor para mantê-la
          atualizada e alinhada com os objetivos em curso.
        </p>
      </div>
      <div id="tut_benchmaking" className="tut_benchmaking">
        <h2>• Benchmarking</h2>
        <p>
          Uma tabela de benchmark é uma ferramenta usada para comparar o
          desempenho de um negócio em relação aos concorrentes ou referências do
          setor. Isso ajuda a identificar pontos fortes, fraquezas e
          oportunidades de melhoria. Vamos seguir alguns passos para preencher
          essa tabela: <br />
          <br />
          Passo 1: Liste as métricas de desempenho que deseja comparar.
          <br />
          Passo 2: Selecione empresas de referência relevantes. Colete os dados
          de benchmark para cada métrica e empresa.
          <br />
          Passo 3: Compare os dados coletados e analise o desempenho do seu
          negócio em relação aos concorrentes ou referências.
          <br />
          Passo 4: Identifique oportunidades de melhoria com base na comparação.
          <br />
          Passo 5: Monitore e atualize regularmente a tabela com novos dados.
        </p>
      </div>
      <div id="tut_perfis_cliente" className="tut_perfis_cliente">
        <h2>• Perfis dos Clientes</h2>
        <p>
          Uma tabela de perfis dos clientes é uma ferramenta útil para entender
          melhor quem são seus clientes, seus interesses, necessidades e
          características. Vamos seguir alguns passos para preencher essa
          tabela:
          <br />
          <br />
          Passo 1: Liste as categorias de informações relevantes sobre os
          clientes.
          <br />
          Passo 2: Colete as informações dos clientes em cada categoria
          identificada.
          <br />
          Passo 3: Identifique padrões e características comuns entre os
          clientes.
          <br />
          Passo 4: Analise e segmente os clientes com base nos perfis
          identificados.
          <br />
          Passo 5: Utilize os perfis dos clientes para direcionar suas ações de
          marketing.
          <br />
          Passo 6: Atualize e revise a tabela periodicamente para acompanhar as
          mudanças no público-alvo.
        </p>
      </div>
      <div id="tut_proposta_valor" className="tut_proposta_valor">
        <h2>• Proposta de Valor</h2>
        <p>
          Uma tabela de proposta de valor é uma ferramenta útil para definir e
          comunicar os benefíciose valor que um produto ou serviço oferece aos
          clientes. Vamos seguir alguns passos para preencher essa tabela:
          <br />
          <br />
          Passo 1: Liste os elementos-chave da proposta de valor.
          <br />
          Passo 2: Descreva cada elemento detalhadamente, destacando os
          benefícios para o cliente.
          <br />
          Passo 3: Destaque os diferenciais competitivos que tornam sua oferta
          única.
          <br />
          Passo 4: Concentre-se nos benefícios tangíveis e intangíveis que os
          clientes obterão.
          <br />
          Passo 5: Revise e refine a proposta de valor para garantir clareza e
          consistência.
          <br />
          Passo 6: Utilize a tabela para comunicar a proposta de valor aos
          stakeholders.
        </p>
      </div>
      <div id="tut_conceito" className="tut_conceito">
        <h2>• Conceito</h2>
        <p>
          Uma tabela de conceito é uma ferramenta útil para organizar e
          descrever as características e informações importantes sobre um
          determinado conceito, projeto ou ideia. Vamos seguir alguns passos
          para preencher essa tabela:
          <br />
          <br />
          Passo 1: Identifique as colunas da tabela: ferramentas, requisitos,
          oportunidades, indicado para, orientações de uso e resultado esperado.
          <br />
          Passo 2: Preencha a coluna "ferramentas" com as ferramentas ou
          recursos necessários.
          <br />
          Passo 3: Preencha a coluna "requisitos" com os requisitos técnicos,
          legais, financeiros ou de tempo.
          <br />
          Passo 4: Preencha a coluna "oportunidades" destacando as vantagens e
          oportunidades oferecidas pelo conceito.
          <br />
          Passo 5: Preencha a coluna "indicado para" identificando o
          público-alvo ou segmento de mercado.
          <br />
          Passo 6: Preencha a coluna "orientações de uso" com instruções ou
          diretrizes para implementar o conceito.
          <br />
          Passo 7: reencha a coluna "resultado esperado" descrevendo os
          resultados ou benefícios esperados.
        </p>
      </div>
      <div id="tut_modelo" className="tut_modelo">
        <h2>• Modelo</h2>
        <p>
          Uma tabela de modelo é uma ferramenta útil para descrever e organizar
          informações sobre diferentes modelos, estruturas ou abordagens. Vamos
          seguir alguns passos para preencher essa tabela: <br />
          <br />
          Passo 1: Identifique as colunas da tabela: ferramentas, indicado para,
          orientações de uso e resultado esperado.
          <br />
          Passo 2: Preencha a coluna "ferramentas" com as ferramentas, recursos
          ou metodologias necessárias para usar o modelo.
          <br />
          Passo 3: Preencha a coluna "indicado para" identificando o contexto,
          setor ou objetivo no qual o modelo é mais adequado.
          <br />
          Passo 4: Preencha a coluna "orientações de uso" com instruções ou
          diretrizes para utilizar o modelo de forma eficaz.
          <br />
          Passo 5: Preencha a coluna "resultado esperado" descrevendo os
          resultados ou benefícios esperados ao utilizar o modelo.
        </p>
      </div>
      <div id="tut_prototipo" className="tut_prototipo">
        <h2>• Protótipo</h2>
        <p>
          Uma tabela de protótipo é uma ferramenta útil para descrever e
          organizar informações sobre diferentes protótipos ou versões iniciais
          de um produto ou projeto. Vamos seguir alguns passos para preencher
          essa tabela:
          <br />
          <br />
          Passo 1: Identifique as colunas da tabela: ferramentas, indicado para,
          orientações de uso e resultado esperado.
          <br />
          Passo 2: Preencha a coluna "ferramentas" com as ferramentas, recursos
          ou materiais necessários para construir o protótipo.
          <br />
          Passo 3: Preencha a coluna "indicado para" identificando o propósito
          ou objetivo para o qual o protótipo é mais adequado.
          <br />
          Passo 4: Preencha a coluna "orientações de uso" com instruções ou
          diretrizes sobre como usar o protótipo de forma eficaz.
          <br />
          Passo 5: Preencha a coluna "resultado esperado" descrevendo o objetivo
          ou resultado esperado ao utilizar o protótipo.
        </p>
      </div>
      <div id="tut_analise_custo" className="tut_analise_custo">
        <h2>• Análise de Custo</h2>
        <p>
          Uma tabela de análise de custo é uma ferramenta útil para calcular e
          comparar os custos de diferentes itens ou componentes em um projeto,
          produto ou atividade. Vamos seguir alguns passos para preencher essa
          tabela: <br />
          <br />
          Passo 1: Identifique as colunas da tabela: descrição, preço,
          quantidade e custo.
          <br />
          Passo 2: CPreencha a coluna "descrição" com os itens ou componentes
          que serão analisados.
          <br />
          Passo 3: Preencha a coluna "preço" com o preço unitário de cada item.
          <br />
          Passo 4: Preencha a coluna "quantidade" com a quantidade necessária de
          cada item.
          <br />
          Passo 5: Calcule o custo de cada item multiplicando o preço unitário
          pela quantidade e preencha a coluna "custo" com esses valores.
          <br />
          Passo 6: Some os valores da coluna "custo" para obter o custo total do
          projeto, produto ou atividade.
        </p>
      </div>
      <div
        id="tut_analise_preco_diferenciais"
        className="tut_analise_preco_diferenciais"
      >
        <h2>• Análise de Preços e diferenciais</h2>
        <p>
          Uma tabela de análise de preços e diferenciais é uma ferramenta útil
          para calcular e comparar os custos de diferentes itens ou componentes
          em um projeto, produto ou atividade. Vamos seguir alguns passos para
          preencher essa tabela:
          <br />
          <br />
          Passo 1: Identifique as colunas da tabela: diferencial e preço.
          <br />
          Passo 2: Preencha a coluna "diferencial" com as características
          exclusivas de cada produto ou serviço.
          <br />
          Passo 3: Preencha a coluna "preço" com o valor correspondente a cada
          item.
          <br />
          Passo 4: Compare os diferenciais e preços para avaliar qual item
          oferece os melhores benefícios em relação ao custo.
          <br />
          Passo 5: Tome uma decisão informada com base na análise dos
          diferenciais e preços, considerando suas necessidades e prioridades.
        </p>
      </div>
      <div id="tut_melhorias" className="tut_melhorias">
        <h2>• Checklist de Melhorias</h2>
        <p>
          Para preencher o checklist de melhorias para o negócio, siga estes
          passos:
          <br />
          <br />
          Passo 1: Inserir as possíveis melhorias do negócio.
          <br />
          Passo 2: Preencher o tempo necessário para realizar a melhoria.
          <br />
          Passo 3: Preencher grau de importância da melhoria.
          <br />
          Passo 4: Preencher custo da melhoria.
        </p>
      </div>
      <div id="tut_mvp" className="tut_mvp">
        <h2>• MVP</h2>
        <p>
          Uma tabela de MVP é uma ferramenta útil para descrever e planejar um
          produto mínimo viável, que é uma versão simplificada do produto que
          pode ser lançada para validar uma ideia de negócio. Siga estes passos
          para preencher a tabela:
          <br />
          <br />
          Passo 1: Identifique as colunas da tabela: produto, indicado para,
          orientações de uso e resultado.
          <br />
          Passo 2: Preencha a coluna "produto" descrevendo o produto mínimo
          viável e o problema que ele pretende resolver.
          <br />
          Passo 3: Na coluna "indicado para", liste o público-alvo ou segmento
          de mercado para o qual o produto é direcionado.
          <br />
          Passo 4: Preencha a coluna "orientações de uso" fornecendo instruções
          sobre como utilizar o produto mínimo viável.
          <br />
          Passo 5: Na coluna "resultado", descreva o objetivo ou resultado
          esperado ao utilizar o produto mínimo viável.
        </p>
      </div>
      <div id="tut_fomacao" className="tut_formacao_preco">
        <h2>• Formação do Preço</h2>
        <p>
          Uma tabela de formação do preço é uma ferramenta útil para calcular e
          estabelecer o preço de venda de um produto ou serviço. Siga estes
          passos para preencher a tabela:
          <br />
          <br />
          Passo 1: Identifique as colunas da tabela: descrição, custo, taxa
          administrativa, impostos, margem de lucro e preço.
          <br />
          Passo 2: Preencha a coluna "descrição" com os itens ou componentes
          relacionados ao produto ou serviço.
          <br />
          Passo 3: Na coluna "custo", insira o valor monetário correspondente ao
          custo de cada item listado na coluna "descrição" e calcule o custo
          total.
          <br />
          Passo 4: Preencha a coluna "taxa administrativa" com uma porcentagem
          que represente as despesas administrativas e calcule o valor da taxa
          aplicada ao custo total.
          <br />
          Passo 5: Na coluna "impostos", insira uma porcentagem que represente
          os impostos aplicáveis e calcule o valor dos impostos aplicados ao
          custo total.
          <br />
          Passo 6: Preencha a coluna "margem de lucro" com uma porcentagem que
          represente o lucro desejado e calcule o valor da margem de lucro
          aplicada ao custo total.
          <br />
          Passo 7: Calcule o preço de venda somando o custo total, a taxa
          administrativa, os impostos e a margem de lucro na coluna "preço".
        </p>
      </div>
      <div id="tut_digitalizacao" className="tut_digitalizacao">
        <h2>• Digitalização do negócio</h2>
        <p>
          Um checklist de digitalização do negócio é uma ferramenta útil para
          acompanhar e registrar o progresso da digitalização de diferentes
          aspectos do seu negócio. Siga estes passos para preencher o checklist:
          <br />
          <br />
          Passo 1: Marque na tabela as redes em que seu negócio se faz presente.
          <br />
          Passo 2: Avalie essa presença em cada rede.
        </p>
      </div>
      <div id="tut_canais_venda" className="tut_canais_venda">
        <h2>• Canais de Vendas</h2>
        <p>
          Os canais de venda são uma parte fundamental de um modelo de negócio e
          desempenham um papel crucial no processo de levar um produto ou
          serviço até os clientes. Eles representam os diferentes caminhos pelos
          quais uma empresa se conecta com seu mercado-alvo e entrega valor.
          Siga estes passos para preencher a tabela:
          <br />
          <br />
          Passo 1: Identifique as colunas da tabela: canal, objetivo e métrica.
          <br />
          Passo 2: Preencha a coluna "canal" com os diferentes canais de venda
          que você está considerando, como loja física, loja online,
          marketplaces, vendas diretas, redes sociais, entre outros.
          <br />
          Passo 3: Na coluna "objetivo", descreva o propósito ou objetivo de
          cada canal de venda, como aumentar a visibilidade da marca, alcançar
          novos clientes, aumentar as vendas, expandir para novos mercados,
          entre outros.
          <br />
          Passo 4: Na coluna "métrica", defina a métrica ou indicador que você
          utilizará para avaliar o desempenho de cada canal de venda, como
          número de vendas, taxa de conversão, retorno sobre o investimento
          (ROI), número de visitantes, entre outros.
          <br />
          Passo 5: Acompanhe e avalie os resultados com base nas métricas
          definidas, registrando o desempenho de cada canal de venda.
          <br />
          Passo 6: Faça ajustes conforme necessário, com base nos resultados e
          nas análises obtidas. Isso permitirá otimizar seus canais de venda e
          direcionar seus esforços para aqueles que trazem os melhores
          resultados.
        </p>
      </div>
      <div id="tut_maturidade" className="tut_maturidade">
        <h2>• Maturidade</h2>
        <p>
          A maturidade de um negócio é alcançada quando a empresa possui um
          modelo sólido, clientes satisfeitos e estabilidade financeira. Nessa
          fase, a organização tem processos eficientes, estrutura organizacional
          definida e capacidade de se adaptar às mudanças do mercado. Ela busca
          constantemente inovação e crescimento sustentável, mantendo sua
          relevância e competitividade.
          <br />
          <br />
          Passo 1: Leia as perguntas atentamente.
          <br />
          Passo 2: Selecione uma resposta que corresponda ao nível de sua
          empresa.
          <br />
          Passo 3: Selecione a importância da questão em sua empresa.
          <br />
          Passo 4: Repita o processo para todas as áreas.
          <br />
          Ao final do processo, haverá uma descrição do grau de maturidade de seu negócio
          e uma representação da porcentagem de maturidade de cada área.
        </p>
      </div>
      <div id="tut_CalcMaturidade" className="tut_CalcMaturidade">
        <h2>• Cálculo da Maturidade</h2>
        <p>
          O cálculo do nível de maturidade de cada área é bem simples, sendo ele a
          média do produto entre cada resposta(R) e importância(I), dividido por
          quantidade de perguntas(QP).
          <br />
          Ou seja:
          <br />
          <p className="tut_CalcMaturidadeCalc">((R1*I1)+(R2+I2)+...)/QP</p>
          <br />
          <br />
          O cálculo do grau de maturidade do negócio se dá basicamente pela média das
          áreas(A), com um porém: se alguma área tiver com 50% de maturidade ou mais,
          o grau de maturidade será no mínimo nível 2.
          <br />
          O cálculo:
          <br />
          <p className="tut_CalcMaturidadeCalc">(A1+A2+A3+A4)/4</p>
        </p>
      </div>
    </div>
  );
}

export default Tutorial;
