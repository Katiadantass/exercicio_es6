"use strict";

// Array de objetos com nome e nota dos alunos
var alunos = [{
  nome: 'Ana',
  nota: 10
}, {
  nome: 'Bruno',
  nota: 5
}, {
  nome: 'Carlos',
  nota: 8
}, {
  nome: 'Diana',
  nota: 4
}, {
  nome: 'Eduardo',
  nota: 7
}, {
  nome: 'Fernanda',
  nota: 9
}, {
  nome: 'Gabriel',
  nota: 6
}, {
  nome: 'Hugo',
  nota: 3
}, {
  nome: 'Isabela',
  nota: 2
}, {
  nome: 'João',
  nota: 1
}];

// Função que retorna alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Testando a função
var alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);