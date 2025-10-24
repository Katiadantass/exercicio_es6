"use strict";

var minhaFuncao = function minhaFuncao() {
  return "Diz olá";
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());
var carro = {
  velocidadeAtual: 40,
  // Função tradicional para que "this" aponte para o objeto
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  // Outra função tradicional
  frear: function frear() {
    console.log(this);
    this.velocidadeAtual -= 10;
  }
};