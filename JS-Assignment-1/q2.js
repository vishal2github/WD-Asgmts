// QUESTION 2

let a = 73, b = 42;

function Is_Valid(x, y) {
    if((x >= 1) && (y <= 5001)) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}

if((a >= 1) && (b <= 5001)) {
    Is_Valid(a, b);
} else {
    console.log("Error: Constraints out of bound!");
}
