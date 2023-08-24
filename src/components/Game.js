import React, { useState } from "react";
import "./Game.css";

/**Nessas linhas, estamos importando os módulos necessários do React.
 * useState é um hook do React que permite que componentes funcionais
 * mantenham um estado interno. Além disso, estamos importando o arquivo
 * Game.css que contém os estilos CSS específicos para este componente. */

/**Aqui abaixo, estamos definindo um array chamado scenarios que contém diferentes cenários do jogo.
 * Cada cenário é um objeto com id, text (texto do cenário) e options (opções que o jogador pode escolher). */

const scenarios = [
  {
    id: 1,
    text: "Você acorda em uma clareira misteriosa, cercado por árvores altas e exuberantes. O ar está carregado de magia. À sua frente, há um caminho estreito que desaparece na floresta. O que você decide fazer?",
    options: [
      { text: "Seguir o caminho.", nextScenario: 2, icon: "fa-arrow-right" },
      {
        text: "Explorar os arredores.",
        nextScenario: 3,
        icon: "fa-binoculars",
      },
    ],
  },
  {
    id: 2,
    text: "Enquanto segue o caminho, você se depara com um riacho cintilante. À margem oposta, há uma ponte de pedra antiga. A ponte parece frágil, mas é a única passagem. O que você faz?",
    options: [
      {
        text: "Cruzar a ponte com cuidado.",
        nextScenario: 4,
        icon: "fa-bridge",
      },
      {
        text: "Procurar por outra maneira de atravessar.",
        nextScenario: 5,
        icon: "fa-search",
      },
    ],
  },
  {
    id: 3,
    text: "Enquanto explora os arredores, você encontra uma clareira mágica com criaturas luminosas dançando. Eles parecem convidá-lo a se juntar a eles. O que você escolhe fazer?",
    options: [
      {
        text: "Se juntar à dança mágica.",
        nextScenario: 6,
        icon: "fa-hat-wizard",
      },
      { text: "Observar em silêncio.", nextScenario: 7, icon: "fa-eye" },
    ],
  },
  {
    id: 4,
    text: "Você cruza a ponte com cuidado e chega a uma encruzilhada. Três caminhos se estendem diante de você, cada um levando a um destino desconhecido. Qual caminho você escolhe?",
    options: [
      {
        text: "Seguir o caminho da esquerda.",
        nextScenario: 8,
        icon: "fa-arrow-left",
      },
      {
        text: "Seguir o caminho do meio.",
        nextScenario: 9,
        icon: "fa-arrow-up",
      },
      {
        text: "Seguir o caminho da direita.",
        nextScenario: 10,
        icon: "fa-arrow-right",
      },
    ],
  },
  {
    id: 5,
    text: "Você procura por outra maneira de atravessar o riacho e encontra uma trilha que o leva a uma passagem subterrânea. A passagem é escura e úmida. O que você decide fazer?",
    options: [
      {
        text: "Entrar na passagem subterrânea.",
        nextScenario: 11,
        icon: "fa-dungeon",
      },
      {
        text: "Voltar e cruzar a ponte.",
        nextScenario: 4,
        icon: "fa-arrow-left",
      },
    ],
  },
  {
    id: 6,
    text: "Você se junta à dança mágica e sente uma energia incrível fluindo através de você. As criaturas luminosas o conduzem por um caminho escondido na floresta. Fim.",
    options: [],
  },
  {
    id: 7,
    text: "Você observa em silêncio a dança das criaturas luminosas e sente uma profunda paz interior. Depois de algum tempo, você decide continuar sua jornada. Fim.",
    options: [],
  },
  {
    id: 8,
    text: "O caminho da esquerda o leva a uma caverna misteriosa com paredes cobertas de cristais brilhantes. Você encontra uma fonte de água pura. O que você faz?",
    options: [
      { text: "Beber a água da fonte.", nextScenario: 12, icon: "fa-tint" },
      { text: "Explorar mais a caverna.", nextScenario: 13, icon: "fa-cave" },
    ],
  },
  {
    id: 9,
    text: "O caminho do meio leva a uma clareira encantada com árvores que cantam melodias suaves. Você sente uma sensação de tranquilidade. O que você deseja fazer?",
    options: [
      {
        text: "Deitar sob as árvores e ouvir as melodias.",
        nextScenario: 14,
        icon: "fa-tree",
      },
      {
        text: "Investigar a origem das melodias.",
        nextScenario: 15,
        icon: "fa-music",
      },
    ],
  },
  {
    id: 10,
    text: "O caminho da direita o leva a uma vila de gnomos amigáveis. Eles o convidam para um festim e compartilham histórias mágicas. Você decide...",
    options: [
      {
        text: "Ficar na vila e se juntar à festa.",
        nextScenario: 16,
        icon: "fa-beer",
      },
      {
        text: "Agradecer e continuar sua jornada.",
        nextScenario: 17,
        icon: "fa-walking",
      },
    ],
  },
  {
    id: 11,
    text: "Você entra na passagem subterrânea e segue seu caminho. Ela o leva a uma câmara iluminada por cogumelos luminosos. Você encontra um livro antigo. O que você faz?",
    options: [
      {
        text: "Ler o livro e aprender novos conhecimentos.",
        nextScenario: 18,
        icon: "fa-book-open",
      },
      {
        text: "Ignorar o livro e continuar explorando.",
        nextScenario: 19,
        icon: "fa-question",
      },
    ],
  },
  {
    id: 12,
    text: "Você bebe a água da fonte e sente uma energia revitalizante percorrendo seu corpo. Você continua sua jornada com força renovada. Fim.",
    options: [],
  },
  {
    id: 13,
    text: "Enquanto explora mais a caverna, você encontra uma porta mágica que o transporta para um templo esquecido. O templo guarda segredos ancestrais que você desvenda. Fim.",
    options: [],
  },
  {
    id: 14,
    text: "Você deita sob as árvores e se perde nas melodias suaves. Parece que o tempo fica suspenso enquanto você aprecia a paz do momento. Fim.",
    options: [],
  },
  {
    id: 15,
    text: "Você segue o som das melodias até encontrar uma fada tocando uma harpa dourada. Ela revela que as melodias são uma antiga magia que conecta o reino mágico. Fim.",
    options: [],
  },
  {
    id: 16,
    text: "Você se junta à festa dos gnomos, compartilha risadas e histórias. No final, eles lhe presenteiam com um medalhão de boa sorte. Fim.",
    options: [],
  },
  {
    id: 17,
    text: "Agradecendo aos gnomos pela hospitalidade, você segue em frente com o medalhão de boa sorte. Seu coração está cheio de gratidão e determinação. Fim.",
    options: [],
  },
  {
    id: 18,
    text: "Ao ler o livro, você adquire conhecimentos sobre a magia das estrelas e constelações. Isso abre possibilidades para você manipular a magia celeste. Fim.",
    options: [],
  },
  {
    id: 19,
    text: "Você decide ignorar o livro e continuar explorando a passagem subterrânea. A jornada revela segredos profundos sobre as antigas civilizações que habitaram essa terra. Fim.",
    options: [],
  },
  // ...cenários restantes...
];

/**Esta é uma estrutura de mapeamento que relaciona os IDs dos cenários com ícones Font Awesome.
 * Isso será usado posteriormente para exibir ícones correspondentes às opções do jogador. */

const iconMapping = {
  1: "fa-tree",
  2: "fa-arrow-right",
  3: "fa-binoculars",
  4: "fa-bridge",
  5: "fa-search",
  6: "fa-hat-wizard",
  7: "fa-eye",
  8: "fa-arrow-left",
  9: "fa-arrow-up",
  10: "fa-arrow-right",
  11: "fa-dungeon",
  12: "fa-tint",
  13: "fa-cave",
  14: "fa-tree",
  15: "fa-music",
  16: "fa-beer",
  17: "fa-walking",
  18: "fa-book-open",
  19: "fa-question",
  // ...mais ícones para os cenários restantes...
};

/**Aqui estamos definindo o componente funcional Game.
 * Utilizamos o hook useState para criar o estado currentScenario,
 * que armazenará o cenário atual. Inicialmente, estamos definindo
 * o primeiro cenário do array scenarios como cenário atual. */

const Game = () => {
  const [currentScenario, setCurrentScenario] = useState(scenarios[0]);
  const [gameEnded, setGameEnded] = useState(false);

  /**Esta função handleOptionClick é chamada quando o jogador clica em uma opção.
   * Ela recebe o nextScenarioId como argumento e busca o cenário correspondente no array scenarios.
   *  Se o cenário for encontrado, atualizamos o estado currentScenario com o novo cenário. */

  const handleOptionClick = (nextScenarioId) => {
    const nextScenario = scenarios.find(
      (scenario) => scenario.id === nextScenarioId
    );
    if (nextScenario) {
      setCurrentScenario(nextScenario);
      if (!nextScenario.options.length) {
        setGameEnded(true); // Define o estado de jogo terminado quando não há mais opções
      }
    }
  };

  const handleRestartGame = () => {
    setCurrentScenario(scenarios[0]); // Define o primeiro cenário
    setGameEnded(false); // Define o estado de jogo não terminado
  };

  return (
    <div className="Game">
      <div className="card">
        {/* <h2>
          Você está prestes a embarcar em uma jornada mágica e cheia de
          aventuras. Que a jornada comece!
        </h2> */}
        <p>{currentScenario.text}</p>
        <div className="options">
          {currentScenario.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.nextScenario)}
            >
              <i className={`fas ${option.icon}`}></i> {option.text}
            </button>
          ))}
          {gameEnded && (
            <div className="result">
              <button onClick={handleRestartGame}>Jogar Novamente</button>
            </div>
          )}
        </div>
      </div>
    </div>

    /**O retorno deste componente inclui um elemento div com a classe Game, que é definida no CSS. Dentro dessa div,
     * exibimos o texto do cenário atual com {currentScenario.text}. Abaixo do texto, mapeamos as opções do cenário
     * atual usando o método map e geramos botões para cada opção. Cada botão inclui um ícone Font Awesome, que é
     * definido com a classe option.icon, e o texto da opção (option.text). Quando um botão é clicado,
     *  a função handleOptionClick é chamada para atualizar o cenário atual com base na próxima opção escolhida pelo jogador. */
  );
};

export default Game;
