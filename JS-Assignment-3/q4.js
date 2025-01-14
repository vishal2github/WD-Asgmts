let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

let len1 = arr_1.length;
let len2 = arr_2.length;
let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < len1; i++) {
    sum1 = sum1 + arr_1[i];
}

for (let j = 0; j < len2; j++) {
    sum2 = sum2 + arr_2[j];
}

console.log(sum1 + sum2);
