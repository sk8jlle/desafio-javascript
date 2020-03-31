/*
 Esse arquivo pode ser utilizado para você testar as funções criadas nos desafios.
 Por exemplo:

  const desafio3 = require('./desafio3.js')
  desafio3.showNumbers(5)
  
*/

const desafio1 = require('./desafio1.js');
console.log('desafio-1');
console.log(desafio1);

console.log('');
console.log('desafio-2');
const desafio2 = require('./desafio2.js');
console.log(desafio2.sum(1, 2));
console.log(desafio2.fullname('carlos', 'pecher'));
console.log(desafio2.calculate());
console.log(desafio2.calculate(1, 2, 3));
console.log(desafio2.calculatev2());
console.log(desafio2.calculatev2(3));
console.log(desafio2.calculatev2(3, 2));
console.log(desafio2.calculatev2(1, 2, 3));
console.log(desafio2.isPair(1));

console.log('');
console.log('desafio-3');
const desafio3 = require('./desafio3.js');
desafio3.showNumbers(6);
desafio3.showPairNumbers(6);
console.log(desafio3.filterPairNumbers([1, 2, 3, 4, 5, 6]));

console.log('');
console.log('desafio-4');
const desafio4 = require('./desafio4.js');
console.log(desafio4.invertWord('hello world'));
console.log(desafio4.isPalindrome('ana'));
console.log(desafio4.fruits(['maça', 'banana']));

console.log('');
console.log('desafio-5');
const desafio5 = require('./desafio5.js');
console.log(desafio5.ingredientsFilter('limao'));
