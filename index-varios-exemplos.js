
// 19/04/2020 - 21:12h

// julio Cesar Duarte

// ESTE É O ÚLTIMO DESAFIO DE CÓDIGO DO CURSO.
// PROCUREI UTILIZAR A MAIORIA DOS CONCEITOS APRENDIDOS SEPARANDO CADA PROGRAMA
// EX: PROGRAMA UTILIZANDO SOMENTE VARIÁVEIS, SOMENTE FUNÇÕES, SOMENTE ARRAYS, ETC...

//PROGRAMA UTILIZANDO APENAS VARIÁVEIS SIMPLES

let nome = "Aragorn";
let idade = 35;
let tipo = "guerreiro";

let ataque;
switch (tipo) {
  case 'mago':
    ataque = 'usou magia';
    break;
  case 'guerreiro':
    ataque = 'usou espada';
    break;
  case 'monge':
    ataque = 'usou artes marciais';
    break;
  case 'ninja':
    ataque = 'usou shuriken';
    break;
  default:
    ataque = 'usou um ataque indefinido';
}

console.log(`O ${tipo} atacou usando ${ataque}`);


// PROGRAMA UTILIZANDO OPERADOR LÓGICO

const nome = "Aragorn";
const idade = 35;
const tipo = "guerreiro";

let ataque;

if (tipo === 'mago') {
  ataque = 'usou magia';
} else if (tipo === 'guerreiro') {
  ataque = 'usou espada';
} else if (tipo === 'monge') {
  ataque = 'usou artes marciais';
} else if (tipo === 'ninja') {
  ataque = 'usou shuriken';
} else {
  ataque = 'usou um ataque indefinido';
}

console.log(`O ${tipo} atacou usando ${ataque}`);


//PROGRAMA UTILIZANDO ARRAYS

const tiposAtaque = {
    mago: 'usou magia',
    guerreiro: 'usou espada',
    monge: 'usou artes marciais',
    ninja: 'usou shuriken'
  };
  
  const nome = heroi[0];
  const idade = heroi[1];
  const tipo = heroi[2];
  
  const ataque = tiposAtaque[tipo] || 'usou um ataque indefinido';
  
  console.log(`O ${tipo} atacou usando ${ataque}`);
//  

// UTILIZANDO O FOR
const tiposHerois = ['mago', 'guerreiro', 'monge', 'ninja'];

for (let i = 0; i < tiposHerois.length; i++) {
  const tipo = tiposHerois[i];
  let ataque;

  switch (tipo) {
    case 'mago':
      ataque = 'usou magia';
      break;
    case 'guerreiro':
      ataque = 'usou espada';
      break;
    case 'monge':
      ataque = 'usou artes marciais';
      break;
    case 'ninja':
      ataque = 'usou shuriken';
      break;
    default:
      ataque = 'usou um ataque indefinido';
  }

  console.log(`O ${tipo} atacou usando ${ataque}`);
}


// UTILIZANDO O DO-WHILE

const tiposHerois = ['mago', 'guerreiro', 'monge', 'ninja'];
let i = 0;

do {
  const tipo = tiposHerois[i];
  let ataque;

  switch (tipo) {
    case 'mago':
      ataque = 'usou magia';
      break;
    case 'guerreiro':
      ataque = 'usou espada';
      break;
    case 'monge':
      ataque = 'usou artes marciais';
      break;
    case 'ninja':
      ataque = 'usou shuriken';
      break;
    default:
      ataque = 'usou um ataque indefinido';
  }

  console.log(`O ${tipo} atacou usando ${ataque}`);
  i++;
} while (i < tiposHerois.length);


//PROGRAMA UTILIZANDO FUNÇÕES

function determinarAtaque(tipo) {
    switch (tipo) {
      case 'mago':
        return 'usou magia';
      case 'guerreiro':
        return 'usou espada';
      case 'monge':
        return 'usou artes marciais';
      case 'ninja':
        return 'usou shuriken';
      default:
        return 'usou um ataque indefinido';
    }
  }
  
  function atacar(nome, idade, tipo) {
    const ataque = determinarAtaque(tipo);
    console.log(`O ${tipo} atacou usando ${ataque}`);
  }
  
  const nome = "Aragorn";
  const idade = 35;
  const tipo = "guerreiro";
  
  atacar(nome, idade, tipo);
  

//PROGRAMA UTILIZANDO CLASSES - VERSÃO 1

   class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe - Heroi

const heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
const heroi2 = new Heroi('Gandalf', 1000, 'mago');
const heroi3 = new Heroi('Bruce Lee', 32, 'monge');
const heroi4 = new Heroi('Hattori Hanzo', 25, 'ninja');

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();


// PROGRAMA UTILIZANDO CLASSES - VERSÃO 2

class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi('Aragorn', 35, 'guerreiro');
  heroi1.atacar(); 
  // Saída: O guerreiro atacou usando espada
  
  const heroi2 = new Heroi('Gandalf', 150, 'mago');
  heroi2.atacar(); 
// Saída: O mago atacou usando magia
// Essa classe Heroi possui um construtor que inicializa as propriedades nome, 
// idade e tipo. Além disso, possui o método atacar(), que exibe uma mensagem com 
// base no tipo do herói e no tipo de ataque correspondente, conforme especificado
// nas instruções. No final do código, há exemplos de como criar instâncias da 
// classe Heroi e chamar o método atacar().


// O  PROGRAMA MAIS SIMPLES QUE CONSEGUI.

const tipo = "guerreiro";

let ataque;
if (tipo === 'mago') {
  ataque = 'usou magia';
} else if (tipo === 'guerreiro') {
  ataque = 'usou espada';
} else if (tipo === 'monge') {
  ataque = 'usou artes marciais';
} else if (tipo === 'ninja') {
  ataque = 'usou shuriken';
} else {
  ataque = 'usou um ataque indefinido';
}

console.log(`O ${tipo} atacou usando ${ataque}`);

  
  
  
  
  