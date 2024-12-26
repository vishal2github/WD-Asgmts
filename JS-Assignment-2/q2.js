// QUESTION 2

let C = prompt("Enter your field-code");

function getValue(choice) {
    let field;

    if ((choice == 'P') || (choice == 'p')) {
        field = "PrepBytes";
    } else if ((choice == 'Z') || (choice == 'z')) {
        field = "Zenith";
    } else if ((choice == 'E') || (choice == 'e')) {
        field = "Expert Coder";
    } else if ((choice == 'D') || (choice == 'd')) {
        field = "Data Structure";
    } else {
        console.log("Select valid field-code");
        return null;
    }

    return field;
}

console.log(getValue(C));
