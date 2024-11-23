//flowchartURL: https://www.figma.com/proto/h3iuRK1PwTOi5rfkAn9raV/SET-2024?page-id=697%3A2&node-id=1052-1018&node-type=frame&viewport=-1811%2C105%2C0.09&t=58h0jkGRXgM8lSSl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1052%3A1018&show-proto-sidebar=1
let a = 12;
let b = 15;

// (10a) Find the greatest comon divisor
function findGreatestCommonDivisor(a, b) {
    let greatestCommonDivisor = 1;
    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            greatestCommonDivisor = i
        }
    }
    return greatestCommonDivisor
}

// (10b) Find the least common multiple
function findLeastCommonMultiple(a, b) {
    return (a * b) / findGreatestCommonDivisor(a, b)
}

console.log(`
(10a) -----------------
The greatest common divisor of ${a} and ${b} is: 
=> ${findGreatestCommonDivisor(a, b)}

(10b) -----------------
The least common multiple of ${a} and ${b} is: 
=> ${findLeastCommonMultiple(a, b)}
`)