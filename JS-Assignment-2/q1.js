// QUESTION 1

let M = Number.parseInt(prompt("Enter the marks obtained"));

function findGrades(marks) {
    let grade;

    switch(true) {
        case ((marks >= 0) && (marks <= 10)):
            grade = "E";
            break;
        
        case ((marks >= 11) && (marks <= 20)):
            grade = "D";
            break;
        
        case ((marks >= 21) && (marks <= 30)):
            grade = "C";
            break;
        
        case ((marks >= 31) && (marks <= 40)):
            grade = "B";
            break;
        
        case ((marks >= 41) && (marks <= 50)):
            grade = "A";
            break;

        default:
            console.log("Marks out of bounds!");
            return null;
    }

    return grade;
}

console.log(findGrades(M));
