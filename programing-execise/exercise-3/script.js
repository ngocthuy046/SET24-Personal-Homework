// flowchartURL: https://www.figma.com/proto/h3iuRK1PwTOi5rfkAn9raV/SET-2024?page-id=697%3A2&node-id=869-7634&node-type=frame&viewport=1434%2C44%2C0.14&t=vUtFrNYA9C5PuIVp-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=869%3A7634&show-proto-sidebar=1

let number = 11

// (3a) Check if n is a prime number.
function isPrime(number) {
  if (number <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

// (3b) Check if n is a perfect number.
function isPerfectNumber(number) {
  let sumOfDivisor = 0
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sumOfDivisor += i
    }
  }
  if (sumOfDivisor === number) {
    return true
  }
  return false
}

// (3c) Check if n is a perfect square.
function isPerfectSquare(number) {
  for (let i = 0; i <= number; i++) {
    if (i * i === number) {
      return true
    }
  }
  return false
}

// (3d) Print all prime numbers less than or equal to n.
function findPrimeNumber(number) {
  let result = []
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      result.push(i)
    }
  }
  return result
}

console.log(`
(3a) -----------------
Number ${number} is prime? 
=> ${isPrime(number)}

(3b) -----------------
Number ${number} is a perfect number? 
=> ${isPerfectNumber(number)}

(3c) -----------------
Number ${number} is a perfect square? 
=> ${isPerfectSquare(number)}

(3d) -----------------
All prime number from 1 to ${number} are:
=> ${findPrimeNumber(number)}
`);