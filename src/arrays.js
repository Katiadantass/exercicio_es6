const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu estou na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu estou na rede social: ${nomeDaRedeSocial}`);
});

const alunos = ['João', 'Maria', 'José', 'Pedro', 'Brenda'];

const alunos2 = alunos.map(function(itemAtual) {
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

const todosAlunosSaoDeJavaScript = alunos2.every(function(item) {
    return item.curso === 'JavaScript';
});

console.log(todosAlunosSaoDeJavaScript);

const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'JavaScript';
});

console.log(existeAlgumAlunoDeBackend);

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend';
}

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);

console.log(alunosDeBackend);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual) {
    return acumulador += itemAtual;
}, 0);

console.log(soma);

const pedro = alunos2.find(function(item) {
    return item.nome == 'Pedro';
});

console.log(pedro);

const indiceDoPedro = alunos2.findIndex(function(item) {
    return item.nome == 'Pedro';
});

console.log(indiceDoPedro);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    numeroAtual = numeroAtual;
    return numeroAtual * 2;
});

console.log(dobroDosNumeros);

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '');

console.log(nomesDosAlunos);