'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    let roundedGrades = [];
    for (let i = 0; i < grades.length; i ++)
    if(grades[i] < 38){
        roundedGrades.push(grades[i])
    } else if (grades[i] % 5 === 3) {
        roundedGrades.push(grades[i]+2)
    } else if (grades[i] % 5 === 4) {
        roundedGrades.push(grades[i]+1)
    } else {
        roundedGrades.push(grades[i])
    }
    return roundedGrades

    //Using es6 and map method
    // return grades.map(grade => {
    //     return (grade >= 38 && grade % 5 >= 3) ? grade + 5 - (grade % 5) : grade;
    // })
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
