// QUESTION 5

let x = Number.parseInt(prompt("Enter first angle"));
let y = Number.parseInt(prompt("Enter second angle"));
let z = Number.parseInt(prompt("Enter third angle"));

function Triangle_Check(a, b, c) {
    let type;

    if ((a <= 90) && (b <= 90) && (c <= 90)) {
        type = "Acute Triangle";
    } else if (((a >= 90) && (b <= 90) && (c <= 90)) || ((a <= 90) && (b >= 90) && (c <= 90)) || ((a <= 90) && (b <= 90) && (c >= 90))) {
        type = "Obtuse Triangle";
    } else {
        console.log("Enter optimum angle-combination!");
        return null;
    }

    return type;
}

if(((x >= 0) && (x <=180)) && ((y >=0 ) && (y <=180)) && ((z >= 0) && (z <=180))) {
    console.log(Triangle_Check(x, y, z));
} else {
    console.log("Angle constraints out of bounds!")
}
