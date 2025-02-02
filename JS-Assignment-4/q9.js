let str = "MANUAL";
let reversedStr = Reverse_String(str);

function Reverse_String(st) {
    return st.split("").reverse().join("");
}

if((str.length >= 1) && (str.length <= 100)) {
    console.log(reversedStr);
}
else {
    console.log("Error: String length limit!")
}


// let str = "MANUAL";
// let reversedStr = Reverse_String(str);

// function Reverse_String(st) {
//     let reversed = "";

//     for(const c of str) {
//         reversed = c + reversed;
//     }

//     return reversed;
// }

// if((str.length >= 1) && (str.length <= 100)) {
//     console.log(reversedStr);
// }
// else {
//     console.log("Error: String length limit!")
// }
