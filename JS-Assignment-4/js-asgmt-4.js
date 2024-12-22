// ASSIGNMENT 4

let n = 7458;

function First_Digit(x) {
    x = (x / 1000);
    console.log(Math.floor(x));
}

if((n >= 1000) && (n <= 9999)) {
    First_Digit(n);
} else {
    console.log("Error: Constraints out of bound!");
}
