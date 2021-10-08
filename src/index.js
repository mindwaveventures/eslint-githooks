const {
 yellAtName
} = require ('./funcs');

let foo = 'bar';
// This foo = 12;

foo = 'foo';

console.log ('Hello', yellAtName (foo));
