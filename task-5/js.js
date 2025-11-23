// variable hoisting me variable do hisso mei toot jata hai or 
// let ke sath work nahi karti because its use TDZ (temporal dead )
var a; // declaration

// this is TDZ. variable not assignable out of this area

console.log(a);

a=12; // initialization

console.log(typeof "hello");
console.log(typeof NaN);
console.log(typeof 890);
console.log( typeof null);
console.log(typeof true);
console.log(.1+.2); 
console.log(.1+.4);
console.log(2=='2');
console.log([]+[]);
const name = "John";
console.log(`hi my name is ${name}`);
console.log(typeof 0/0);
console.log(typeof 1/0);
console.log(Number("hello"));
const word = "nature";
console.log(`i love ${word}`);