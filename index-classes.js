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