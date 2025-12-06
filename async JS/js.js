/// js single threaded
/// ek kam ek bar mein kar payegi
/// synchronous approach

/// asynchronous approach jo kam time lega usse side karta hai aur jo kam pehle ho sakta hai ho hone ke bad dusra kam karega

/// callback function jo turant nahi chalega jab apka koi kam complete hoga

// function setTimeOut

// setTimeout(() => {
//     console.log("callback function");
// }, 2000);

function abcd(fn) {
    fn();
}

abcd(function () {
    console.log('hello');
})

let num = prompt('enter a number');
num = parseInt(num);
console.log(num);