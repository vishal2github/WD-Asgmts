// QUESTION 7

let a = 15, b = 5;

function Multiply_two_numbers(x, y) {
    let res = x * y;
    console.log(res);
}

if((a >= 1) && (b <= 301)) {
    Multiply_two_numbers(a, b);
} else {
    console.log("Error: Constraints out of bound!");
}
