var hello;

// undefined area throw error
hello();

hello = function () {
    console.log("hello");
} // hello have function

hello(); //get value

// let and const are hoist

console.log(a);
let a = 10;
