let meuMap = new Map();
meuMap.set('nome', 'Ana');
meuMap.set('stack', "html, css, js");

console.log(meuMap);

const nome = meuMap.get('nome');

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has('sobrenome'));

//meuMap.clear()

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete('stack');

console.log(meuMap);

const cpfs = new Set();

cpfs.add('123.456.789-10');
cpfs.add('987.654.321-10');
cpfs.add('456.789.123-10');

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

// arrow function
cpfs.forEach((valor) => {
    console.log(valor);
});

// removendo duplicados, em uma array e transformando set em array
const array = ['Ana', 'Natalia', 'Luiz', 'Luiz', 'Pedro', 'Paulo', 'Pedro'];

const arrayComoSet = new Set([...array]);

const arraySemItensRepetidos = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraySemItensRepetidos);