let s1 = "Hello", s2 = "World!";

function joinStrings(x, y) {
    let s3 = x.concat(y);
    return s3;
}

if (((s1.length >= 1) && (s1.length <= 100)) && ((s2.length >= 1) && (s2.length <= 100))) {
    console.log(joinStrings(s1, s2));
}
else {
    console.log("Error: String length limit!")
}