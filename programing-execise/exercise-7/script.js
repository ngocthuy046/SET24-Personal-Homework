//flowchartURL: https://www.figma.com/proto/h3iuRK1PwTOi5rfkAn9raV/SET-2024?page-id=697%3A2&node-id=952-3462&node-type=frame&viewport=-604%2C196%2C0.1&t=ldTFalZe3Jxdpo86-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=952%3A3462&show-proto-sidebar=1
// Enter a positive integer {n}, print the first {n} numbers of Fibonacci sequence
let number = 2;

function findFibonacciNumber(number) {
    if (number === 0) {
        return []
    }
    if (number === 1) {
        return 0
    }
    let result = [0, 1]
    for (let i = 2; i < number; i++) {
        result[i] = result[i - 1] + result[i - 2]
    }
    return result
}

console.log(`
7. Fibonacci number ${number} is: 
=> ${findFibonacciNumber(number)}
`)