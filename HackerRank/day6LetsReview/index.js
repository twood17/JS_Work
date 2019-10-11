function processData(input) {
    //Enter your code here
    let message = input.split("\n"); // console.log(message) === [2, 'Hacker', 'Rank']
    let oddChar = ""
    let evenChar = ""

    for (let i = 1; i < message.length; i++) {
        for(let j = 0; j < message[i].length; j++){
            if(j % 2 == 0) {
                evenChar += message[i][j];
            } else {
                oddChar += message[i][j];
            }
        }
        console.log(evenChar + " " + oddChar);
        evenChar = '';
        oddChar = '';
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
