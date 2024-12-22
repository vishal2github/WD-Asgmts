// ASSIGNMENT 3

let a = 10010, b = 4201;

function Check(x, y) {
    if((x % 10 == 0) && (y % 10 == 0)) {
        console.log("true");
    } else if((x % 10 != 0) && (y % 10 != 0)) {
        console.log("false");
    } else if(((x % 10 == 0) && (y % 10 != 0)) || ((x % 10 != 0) && (y % 10 == 0))) {
        console.log("true");
    }
}

if((a >= 1) && (b <= 5001)) {
    Check(a, b);
} else {
    console.log("Error: Constraints out of bound!");
}
