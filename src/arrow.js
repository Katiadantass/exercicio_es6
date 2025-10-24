const minhaFuncao = () => "Diz olá"; 

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
});

console.log(minhaFuncao());
console.log(retornaUmCarro());

const carro = {
    velocidadeAtual: 40,

    // Função tradicional para que "this" aponte para o objeto
    acelerar: function() {
        console.log(this);
        this.velocidadeAtual += 10;
    },

    // Outra função tradicional
    frear: function() {
        console.log(this);
        this.velocidadeAtual -= 10;
    }
};