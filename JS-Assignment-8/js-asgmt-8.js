// ASSIGNMENT 8

let m1 = 70, m2 = 70, m3 = 70;
let sum = 0, avg;

function sumAndAvg(x, y, z) {
    sum = x + y + z;
    console.log(sum);

    avg = sum / 3;
    console.log(avg);
}

if((m1 >= 0 && m1 <= 100) && (m2 >= 0 && m2 <= 100) && (m3 >= 0 && m3 <= 100)) {
    sumAndAvg(m1, m2, m3);
} else {
    console.log("Error: Constraints out of bound!");
}
