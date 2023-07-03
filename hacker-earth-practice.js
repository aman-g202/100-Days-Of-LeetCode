// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
let currentLine = 0;

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    input = input.trim().split("\n").map((string) => {
      return string.trim();
    });
    let [t, ...lines] = input;
    for (let i = 0; i < parseInt(t); i++) {
        let inputLine = (lines[currentLine++]).split(" ").map(Number);
        process.stdout.write((inputLine[0] + inputLine[1]).toString() + '\n');
    }
    // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
// console.log(stdin_input)

// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
let currentLine = 0;

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    input = input.trim().split("\n").map((string) => {
      return string.trim();
    });
    let [t, ...lines] = input;
    lines = lines[0].split(" ").map(Number);
    for (let k = 0; k < parseInt(t); k++) {
        computeFizBuzz(lines[k]);
    }
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
function computeFizBuzz(n) {
    for(let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            process.stdout.write('FizzBuzz' + '\n');
            } else if (i % 5 === 0) {
                process.stdout.write('Buzz' + '\n');
            } else if (i % 3 === 0) {
                process.stdout.write('Fizz' + '\n');
            } else {
                process.stdout.write(i + '\n');
            }
    }
}