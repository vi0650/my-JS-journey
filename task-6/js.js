let msg = "jai shree ram";  
console.log(msg.includes("ram"));

let skills = ["JS","CSS"];
console.log(typeof skills);

let d;
console.log(document);

// for string is first priority for JS to make it string
let name = 12 + "hello";
console.log(name);
console.log(NaN);
let x=5;
let y=x;
y=10;
console.log(x,y);

console.log(2+3,2/3,2%3,2*2,2-3,2**3);

// operators

let a=10;
a += 5;
console.log(a);
a-=5;
console.log(a);
a*=5;
console.log(a);
a/=5;
console.log(a);
a%=5;
console.log(a);
a**=5;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);
// == not strict equality
// === strict equality
// != not strict inequality
// !== strict inequality
console.log(a == "10"); true
console.log(a === "10"); false
console.log(a != "10"); false
console.log(a !== "10"); true
console.log(12>19);
console.log(12<19);
console.log(12>=19);
console.log(12<=19);
console.log(12!=19);
console.log(12!==19);

// logical operator
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(!true);
console.log(!false);

const isEdit = false;
const editform = false;
let action = isEdit==editform ? "add" : "save";
console.log(action);

let arr1 = [];
console.log(arr instanceof Array)

let arr = [1,2,3,4,5];
let arr2 = [...arr];

// spread / rest operator
function xyz(x,y,z,...rest){}
xyz(1,2,3,4,5);
console.log(xyz);

//nullish coelescing operator
10>15?? console.log("sorry");
null ?? console.log("sorry");

useExist ?? console.log("user does not exist");

//optional chaining
let obj = {}

obj.hello.value;

let p;
prompt(p);
let b = p >= 18 ? "not eligible for vote" : "eligible for vote";
console.log(b);