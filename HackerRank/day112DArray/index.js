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



function main() {
    let arr = Array(6);
    let maxTotal;

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    for (let row = 0; row <= 3; row++) {
        for (let col = 0; col <= 3; col++) {
            let total = 0

            total += arr[row][col];
            total += arr[row][col + 1];
            total += arr[row][col + 2];
            total += arr[row + 1][col + 1];
            total += arr[row + 2][col];
            total += arr[row + 2][col + 1]
            total += arr[row + 2][col + 2]
            
            if(!maxTotal && maxTotal != 0){
                maxTotal = total
            }

            if(total > maxTotal) {
                maxTotal = total
            }
        }        
    }
    console.log(maxTotal)
}
