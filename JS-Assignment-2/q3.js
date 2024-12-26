// QUESTION 2

let n1 = Number.parseInt(prompt("Enter first number"));
let n2 = Number.parseInt(prompt("Enter second number"));
let n3 = Number.parseInt(prompt("Enter third number"));

function Max_out_of_three(a, b, c) {
    let maximum;

    if ((a > b) && (a > c)) {
        maximum = a;
    } else if ((b > a) && (b > c)) {
        maximum = b;
    } else if ((c > a) && (c > b)) {
        maximum = c;
    } else if (a = b = c) {
        return ("1-1");
    }

    return maximum;
}

if(((n1 >= 1) && (n1 <=10000)) && ((n2 >= 1) && (n2 <=10000)) && ((n3 >= 1) && (n3 <=10000))) {
    console.log(Max_out_of_three(n1, n2, n3));
} else {
    console.log("Constraints out of bounds!")
}
