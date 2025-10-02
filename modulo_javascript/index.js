let prompt = require('prompt-sync')();

// No JS se usa Camel Case
// Não se usa mais VAR no JS, apenas LET
// VAR: variavel global, existe mesmo antes de no fluxo do codigo ela ser declarada - HOISTING
// ^ o LET não permite isso! O LET só existe naquele escopo.

// Consultar a DOCUMENTAÇÃO! Ex.: biblioteca math

/* window.*/ let idade = prompt('Qual é a sua idade? ');
console.log(`O usuário tem ${idade} anos.`);

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);


// Coerção Explícita (Conversão Manual)
console.log(Number('X')); // NaN: Not a Number

console.log(String(10), typeof String(10));

console.log(Boolean(-1));

// Coerção Implícita
// Se não for SOMA, ele transforma o texto em número!
console.log(1 + '1', typeof (1 + '1'));
console.log('10' + 5, typeof ('10' + 5));
console.log(10 - '5', typeof (10 - '5'));
console.log(10 * '5', typeof (10 * '5'));
console.log(10 / '5', typeof (10 / '5'));