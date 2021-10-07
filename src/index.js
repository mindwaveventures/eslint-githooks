const {
 yellAtName
} = require ('./funcs');

var foo = 'bar';
// This foo = 12;

foo = 'foo';

console.log ('Hello', yellAtName (foo));
