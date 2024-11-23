//flowchartURL: https://www.figma.com/proto/h3iuRK1PwTOi5rfkAn9raV/SET-2024?page-id=697%3A2&node-id=1075-8332&node-type=frame&viewport=-1811%2C105%2C0.09&t=58h0jkGRXgM8lSSl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1075%3A8332&show-proto-sidebar=1
let inputArray = [
    [11, 7, 5],
    [3, 19, 2],
    [8, 12, 15]
];

let inputNumber = 1;

// (12a) Find the largest number in the array
function findLargestNumber(inputArray) {
    let largestNumber = inputArray[0][0];
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray[i].length; j++) {
            if (inputArray[i][j] > largestNumber) {
                largestNumber = inputArray[i][j];
            }
        }
    }
    return largestNumber;
}

// (12b) Find the smallest number in the array
function findSmallestNumber(inputArray) {
    let smallestNumber = inputArray[0][0];
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray[i].length; j++) {
            if (inputArray[i][j] < smallestNumber) {
                smallestNumber = inputArray[i][j];
            }
        }
    }
    return smallestNumber;
}

// (12c) Calculate the sum of the elements in row or column k
function sumOfRowOrColumn(inputArray, inputNumber, type = "row") {
    let sum = 0;
    if (type === "row") {
        if (inputNumber < inputArray.length) {
            for (let i = 0; i < inputArray[inputNumber].length; i++) {
                sum += inputArray[inputNumber][i];
            }
        } else {
            return "Invalid row number";
        }
    } else if (type === "column") {
        if (inputArray.length > 0 && inputNumber < inputArray[0].length) {
            for (let i = 0; i < inputArray.length; i++) {
                sum += inputArray[i][inputNumber];
            }
        } else {
            return "Invalid column number";
        }
    }
    return sum;
}

// (12d) Find and print all prime numbers in the array
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findAndPrintAllPrimeNumbers(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray[i].length; j++) {
            if (isPrime(inputArray[i][j])) {
                result.push(inputArray[i][j]);
            }
        }
    }
    return result;
}

console.log(`
(12a) -----------------
The largest number in the array is: 
=> ${findLargestNumber(inputArray)}

(12b) -----------------
The smallest number in the array is: 
=> ${findSmallestNumber(inputArray)}

(12c) -----------------
The sum of the elements in row ${inputNumber} is: 
=> ${sumOfRowOrColumn(inputArray, inputNumber, "row")}

(12c) -----------------
The sum of the elements in column ${inputNumber} is: 
=> ${sumOfRowOrColumn(inputArray, inputNumber, "column")}

(12d) -----------------
The prime numbers in the array are: 
=> ${findAndPrintAllPrimeNumbers(inputArray)}
`);
