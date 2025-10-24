"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu estou na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu estou na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['João', 'Maria', 'José', 'Pedro', 'Brenda'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'JavaScript'
  };
});
console.log(alunos2);

// every
alunos2.push({
  nome: 'Ana',
  curso: 'Backend'
});
var todosAlunosSaoDeJavaScript = alunos2.every(function (item) {
  return item.curso === 'JavaScript';
});
console.log(todosAlunosSaoDeJavaScript);
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'JavaScript';
});
console.log(existeAlgumAlunoDeBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  return acumulador += itemAtual;
}, 0);
console.log(soma);
var pedro = alunos2.find(function (item) {
  return item.nome == 'Pedro';
});
console.log(pedro);
var indiceDoPedro = alunos2.findIndex(function (item) {
  return item.nome == 'Pedro';
});
console.log(indiceDoPedro);
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  numeroAtual = numeroAtual;
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);