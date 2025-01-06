let x = 1, y = 50, z = 3;

function findSndSmallest(a, b, c) {
    if ((a < b && a > c) || (a > b && a < c)) {
        return a;
    } else if ((b < a && b > c) || (b > a && b < c)) {
        return b;
    } else {
        return c;
    }
}

if ((x >= 1 && x <= 500) && (y >= 1 && y <= 500) && (z >= 1 && z <= 500)) {
    if ((x != y && x != z) && (y != x && y != z) && (z != x && z != y)) {
        console.log("Second smallest number: " + findSndSmallest(x, y, z));
    } else {
        console.log("Numbers matching exception!");
    }
} else {
    console.log("Out of bound exception!");
}
