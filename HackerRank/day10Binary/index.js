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
    let n = parseInt(readLine(), 10);
    let consecutive = 0;
    let maxConsecutive = 0;
    let binary = 0;

    while (n > 0) {
        let remainder = (n % 2)

        if (remainder === 1){
            consecutive++
            if(consecutive > maxConsecutive){
                maxConsecutive = consecutive 
            }
        } else {
            consecutive = 0
        }
        binary =  remainder + binary;
        n = Math.floor(n/2);
    }
    console.log(maxConsecutive)
}
