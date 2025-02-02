let string = "I am a ghost!";
let arr = string.split(" ");

function Split(xrr) {
    let c = "";

    for(let i = 0; i < xrr.length; i++) {
        c += (xrr[i] + "\n");
    }

    return c;
}

let s = Split(arr);
console.log(s);



// let string = "I am a ghost!";

// function Split(xrr) {
//     return xrr.join("\n");
// }

// let s = Split(string.split(" "));
// console.log(s);
