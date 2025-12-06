/// loops and conditionals in javascript
///conditionals

///if else
/// let a= 12;
/// if (a>10){ 
///     console.log('hello');
/// }else{
///     console.log('bye bye');
/// }

///truthy and falsy
/// 0 ""  false NaN null undefined document.all --> this is convert into false
/// exclude it all are converts in true
/// if(true > false){
//     /// agar condition true hui to ye run hoga
///     console.log('true');   
/// }

// for (start; end; change) {

// }


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(i % 2 + i++);
    console.log(i % 2 + i++ + 1);
}/// this is easy in one line, i know this is jugad but that way we
/// learn how to perform but this is not professional ignore this code

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + 1); /// odd -
        console.log(i); /// even -
    }
}/// this is with condition

for (let i = 20; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(i + 1); /// odd -
        console.log(i); /// even -
    }
}/// this is with condition

for (let i = 1; i < 5; i++) {
    console.log('yes');
}

for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) console.log(`${i} - even`);
    else console.log(`${i} - odd`);
}
