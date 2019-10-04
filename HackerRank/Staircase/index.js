'use strict';

//Given Information
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

// Complete the staircase function below.  User input
function staircase(n) {
    const maxStairBlocks = n
    const maxFloors = n
    let stairLayers = []
    for(let i = 0; i < maxFloors; i++) {
        let skipBlock = maxStairBlocks - i - 1
        let stairBlocks = []
    
        for(let j = 0; j < maxStairBlocks; j++) {
            if(skipBlock > 0) 
                stairBlocks.push(' ')
            else
                stairBlocks.push('#')
                skipBlock--
    }
    stairLayers.push(stairBlocks)
  }
  
  for(let row of stairLayers) {
    console.log(row.join(''))
  }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}

staircase(2)