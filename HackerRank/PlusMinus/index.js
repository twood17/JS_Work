'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let length = arr.length
    let percPositive = arr.filter(number => number > 0).length / length;
    let percNegative = arr.filter(number => number < 0).length / length;
    let percZero = arr.filter(number => number == 0).length / length
    return console.log(percPositive + '\n' + percNegative + '\n' + percZero)
    
    
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

plusMinus([3, 0, -3, 5, 1, -11, 12])