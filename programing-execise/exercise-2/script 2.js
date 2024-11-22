//flowchartURL: https://www.figma.com/proto/h3iuRK1PwTOi5rfkAn9raV/SET-2024?page-id=697%3A2&node-id=855-4048&node-type=frame&viewport=1434%2C44%2C0.14&t=vUtFrNYA9C5PuIVp-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=855%3A4048&show-proto-sidebar=1

let number = 7657499;
// (2a) Find and print the largest number.
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

// (2b) Find and print the second largest number.
function findSecondLargestDigitOfNumber(number) {
    let secondLargestNumber = 0;
    let largestNumber = number % 10;
    number = Math.floor(number / 10);
    while (number > 0) {
        let current = number % 10;
        if (current === largestNumber) {
            largestNumber = current;
            secondLargestNumber = 0;
        }
        if (current > largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = current;
        } 
        if (current < largestNumber) {
            if (current > secondLargestNumber) {
                secondLargestNumber = current;
            }
        }
        
        number = Math.floor(number / 10);
    }
    return secondLargestNumber
}

// (2c) Find and print the smallest number.
function findSmallestDigitOfNumber(number) {
    let smallestNumber = number % 10;
    number = Math.floor(number / 10);
    while (number > 0) {
        let current = number % 10;
        if (current < smallestNumber) {
            smallestNumber = current;
        }
        number = Math.floor(number / 10);
    }
    return smallestNumber;
}

// (2d) Find and print all prime numbers in the sequence.
function isPrime(number) {
    if (number < 2) {
        return false
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
    
}
function findPrimeNumber(number) {
    let result = []
    while (number > 0) {
        let current = number % 10
        if (isPrime(current)) {
            result.push(current)
        }
        number = Math.floor(number / 10)
    }
    return result
}

console.log(
    `
(2a) ----------------
=> Largest digit of ${number} is: ${findLargestDigitOfNumber(number)}

(2b) -----------------
=> Second largest digit of ${number} is: ${findSecondLargestDigitOfNumber(number)}

(2c) -----------------
=> Smallest digit of ${number} is: ${findSmallestDigitOfNumber(number)}

(2d) -----------------
Prime digits of ${number} are: ${findPrimeNumber(number)}

`
);