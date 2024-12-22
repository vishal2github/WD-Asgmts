// ASSIGNMENT 6

let a = 2, b = 15;

function Find_the_remainder(x, y) {
    let rem = y % x;
    console.log(rem);
}

if((a >= 1) && (b <= 10001)) {
    Find_the_remainder(a, b);
} else {
    console.log("Error: Constraints out of bound!");
}
