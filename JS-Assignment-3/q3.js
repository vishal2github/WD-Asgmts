var numbersArray = [1, 13, 22, 123, 49];
let len = numbersArray.length;
let sum = 0;
for (let i = 0; i < len; i++) {
    sum = sum + numbersArray[i];
}
console.log("Sum of elements of array: " + sum);
