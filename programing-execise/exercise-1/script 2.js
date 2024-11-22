// flowchartURL: 
https://www.figma.com/proto/h3iuRK1PwTOi5rfkAn9raV/SET-2024?node-id=826-3150&node-type=frame&t=UerS4NG3KKo12MBE-1&scaling=scale-down-width&content-scaling=fixed&page-id=697%3A2

let number = 1407;
// (1a) Calculate and print the sum from 1 to n.
function sumFromOneToNumber(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        sum += i;
    }
    return sum;
}

// (1b) Calculate the sum of the divisors of n.
function sumDivisorOfNumber(number) {
    let sum = 0;
    for (let i = 0; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum;
}

// (1c) Calculate the sum of the digits of n.
function sumDigitsOfNumber(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

// (1d) Find the largest digit of n.
function findLargestDigitOfNumber(number) {
    let largestNumber = 0;
    while (number > 0) {
        if (number % 10 > largestNumber) {
            largestNumber = number % 10;
        }
        number = Math.floor(number / 10);
    }
    return largestNumber;
}

console.log(`
(1a) -----------------
=> Sum from 1 to ${number} is: ${sumFromOneToNumber(number)}

(1b) -----------------
=> Sum of divisor of ${number} is: ${sumDivisorOfNumber(number)}

(1c) -----------------
=> Sum of digits of ${number} is: ${sumDigitsOfNumber(number)}

(1d) -----------------
=> Max digit of ${number} is: ${findLargestDigitOfNumber(number)}

`);