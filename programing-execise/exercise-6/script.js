//flowchartURL: https://www.figma.com/proto/h3iuRK1PwTOi5rfkAn9raV/SET-2024?page-id=697%3A2&node-id=942-1571&node-type=frame&viewport=563%2C215%2C0.08&t=LPiWRYWbB2eSLrXm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=942%3A1571&show-proto-sidebar=1
let number = 18;

// (6a)
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1
    } 
    return number * calculateFactorial(number - 1)
}
// (6b)
function sumOfDigits(number) {
    let sum = 0
    while (number > 0) {
        sum += number % 10
        number = Math.floor(number / 10)
    }
    return sum
}

console.log(`
(6a) -----------------
Factorial of ${number} is: 
=> ${calculateFactorial(number)}

(6b) -----------------
Sum of digits of ${number} is: 
=> ${sumOfDigits(number)}
`);