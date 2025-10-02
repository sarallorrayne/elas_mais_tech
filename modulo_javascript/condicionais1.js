const prompt = require('readline-sync');

const idade = Number(prompt.question('Qual eh a sua idade? '))

// const ehMaiorDeIdade = idade >= 18;

//Estrutura Condicional: if/else
if (idade >= 18) {
    //Faça alguma coisa...
    console.log('Voce eh maior de idade');
} else {
    console.log('Voce nao eh maior de idade');
}

const mediaDoAluno = 10;
if (mediaDoAluno >= 7) {
    //Faça alguma coisa...
    console.log('Voce foi aprovado! :D');
} else if (mediaDoAluno >= 5) {  // Não precisa comparar mediaDoAluno < 7 &&, para passar para essa condição, a média é automaticamente menor que 7
    console.log('Voce esta de recuperacao :/');
} else {
    console.log('Voce nao foi aprovado :(');
}