let str = "ROTOR";
let reversedStr = Reverse_String(str);

function Reverse_String(st) {
    return st.split("").reverse().join("");
}

if((str.length >= 1) && (str.length <= 100)) {
    if(reversedStr === str) {
        console.log(true);
    }
    else {
        console.log(false);
    }    
}
else {
    console.log("Error: String length limit!")
}
