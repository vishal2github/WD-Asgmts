// QUESTION 1

let a = 5, b = 500;

function AddTwoNumbers(x, y) {
    let sum = x + y;
    return sum;
}

if((a >= 1) && (b <= 5001)) {
    console.log(AddTwoNumbers(a, b));
} else {
    console.log("Error: Constraints out of bound!");
}
