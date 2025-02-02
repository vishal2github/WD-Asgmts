let s = "HelloWorld";

function findLength(count) {
    count = [...s].reduce(acc => (acc + 1), 0);
    return count;
}

console.log(findLength(s));
