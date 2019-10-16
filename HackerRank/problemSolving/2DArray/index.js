'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
	inputString += inputStdin;
});

process.stdin.on('end', (_) => {
	inputString = inputString.replace(/\s*$/, '').split('\n').map((str) => str.replace(/\s*$/, ''));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
	let hourglasses = [];

	if (typeof arr === 'object' && arr.length === 6 && arr.map((i) => i.length).reduce((p, n) => p + n) === 36) {
        for (let row = 0; row <= 3; row++){
            for(let col = 0; col <= 3; col++){
                let total = 0;

                total += arr[row][col];
                total += arr[row][col + 1];
                total += arr[row][col + 2];
                total += arr[row + 1][col + 1];
                total += arr[row + 2][col];
                total += arr[row + 2][col + 1]
                total += arr[row + 2][col + 2]

                hourglasses.push(total)
            }
        }
    }    
    return (hourglasses.length > 0) ? Math.max(...hourglasses) : 0;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	let arr = Array(6);

	for (let i = 0; i < 6; i++) {
		arr[i] = readLine().split(' ').map((arrTemp) => parseInt(arrTemp, 10));
	}

	let result = hourglassSum(arr);

	ws.write(result + '\n');

	ws.end();
}
