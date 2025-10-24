// function Pokemon(name, type) {
//     this.name = name;
//     this.type = type;
// }

// const pikachu = new Pokemon('Pikachu', 'Electric');

class Pokemon {
    // Encapsulamento com #
    #hp = 100;

    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    attack(attackName) {
        console.log(`${this.nome} used ${attackName}`);
    }

    // Método privado (só pode ser acessado dentro da classe)
    receiveDamage() {
        this.#hp -= 10;
    }

    // Retorna o valor do hp privado
    showhp() {
        console.log(this.#hp);
    }
}

// Classe filha (herança)
class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Electric');
    }

    // Sobrescrita de método
    attack(attackName) {
        console.log(`${this.nome} used ${attackName} and did 10 damage`);
    }
}

// Instância da classe filha
const maxPikachu = new Pikachu();
maxPikachu.receiveDamage();

// Testando o encapsulamento
maxPikachu.hp = 5000; // cria um novo atributo público, não altera o #hp real
maxPikachu.showhp();

// Instância da classe base
const pikachu = new Pokemon('Pikachu', 'Electric');
pikachu.attack('Thunderbolt');

console.log(maxPikachu.hp);
console.log(pikachu);
console.log(maxPikachu);

console.log(pikachu instanceof Pokemon);
console.log(maxPikachu instanceof Pokemon);