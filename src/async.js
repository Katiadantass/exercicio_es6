// single thread
function funcaoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

console.log("inicio");
console.log(funcaoPesada());
console.log("fim");

// multi thread
const funcaoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch (e) {
        reject(e);
    }
});

console.log("inicio");
funcaoPesadaPromise.then(resultado => console.log(resultado));
console.log("fim");

// multi thread com erro proposital
const funcaoPesadaPromiseErro = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch (e) {
        reject('Deu erro confira a interação do código');
    }
});

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuario: ${login}`);
        }, 3000);
    });
};

// async await
async function mainExecution() {
    console.log("inicio");

    //await funcaoPesadaPromiseErro.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    promiseComParametros('ana', 123).then((resultado) => {
        console.log(resultado);
    });
    
    try {
        const resultado = await funcaoPesadaPromise;
        console.log(resultado);
    } catch (e) {
        console.log(e);
    }
    console.log("fim");
}

mainExecution();