// ASSIGNMENT 5

let n = 8423;

function Last_Digit(x) {
    x = (x % 10);
    console.log(x);
}

if((n >= 1000) && (n <= 9999)) {
    Last_Digit(n);
} else {
    console.log("Error: Constraints out of bound!");
}
