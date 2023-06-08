import React from "react";
import "./tutorial.css";
import logo from "../../images/logo_canvlight.png";
import { Link } from "react-router-dom";

function Tutorial() {
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
            <Link to="/tutorial">
              <li>Como usar?</li>
            </Link>
            <Link to="/canvas">
              <li>Gerar canvas</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="sol-bg-tut">
        <div className="sol-inv-tut"></div>
      </div>
      <div className="tut_dna">
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
      <div className="tut_ikigai">
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
      <div className="tut_fourps">
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
      <div className="tut_sintese">
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
      <div className="tut_benchmaking">
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
      <div className="tut_perfis_cliente">
        <h2>• Perfis dos Clientes</h2>
        <p>
        Uma tabela de perfis dos clientes é uma ferramenta útil para entender melhor 
        quem são seus clientes, seus interesses, necessidades e características. Vamos
        seguir alguns passos para preencher essa tabela:<br />
        <br />
        Passo 1: Liste as categorias de informações relevantes sobre os clientes.
        <br />
        Passo 2: Colete as informações dos clientes em cada categoria identificada.
        <br />
        Passo 3: Identifique padrões e características comuns entre os clientes.
        <br />
        Passo 4: Analise e segmente os clientes com base nos perfis identificados.
        <br />
        Passo 5: Utilize os perfis dos clientes para direcionar suas ações de marketing.
        <br />
        Passo 6: Atualize e revise a tabela periodicamente para acompanhar as mudanças
        no público-alvo.
        </p>
      </div>
      <div className="tut_proposta_valor">
        <h2>• Proposta de Valor</h2>
        <p>
        Uma tabela de proposta de valor é uma ferramenta útil para definir e comunicar
        os benefíciose valor que um produto ou serviço oferece aos clientes. Vamos seguir 
        alguns passos para preencher essa tabela:<br />
        <br />
        Passo 1: Liste os elementos-chave da proposta de valor.
        <br />
        Passo 2: Descreva cada elemento detalhadamente, destacando os benefícios para o cliente.
        <br />
        Passo 3: Destaque os diferenciais competitivos que tornam sua oferta única.
        <br />
        Passo 4: Concentre-se nos benefícios tangíveis e intangíveis que os clientes obterão.
        <br />
        Passo 5: Revise e refine a proposta de valor para garantir clareza e consistência.
        <br />
        Passo 6: Utilize a tabela para comunicar a proposta de valor aos stakeholders.
        </p>
      </div>
      <div className="tut_conceito">
        <h2>• Conceito</h2>
        <p>
        Uma tabela de proposta de valor é uma ferramenta útil para definir e comunicar
        os benefíciose valor que um produto ou serviço oferece aos clientes. Vamos seguir 
        alguns passos para preencher essa tabela:<br />
        <br />
        Passo 1: Liste os elementos-chave da proposta de valor.
        <br />
        Passo 2: Descreva cada elemento detalhadamente, destacando os benefícios para o cliente.
        <br />
        Passo 3: Destaque os diferenciais competitivos que tornam sua oferta única.
        <br />
        Passo 4: Concentre-se nos benefícios tangíveis e intangíveis que os clientes obterão.
        <br />
        Passo 5: Revise e refine a proposta de valor para garantir clareza e consistência.
        <br />
        Passo 6: Utilize a tabela para comunicar a proposta de valor aos stakeholders.
        </p>
      </div>
    </div>
  );
}

export default Tutorial;
