//flowchartURL: https://www.figma.com/proto/h3iuRK1PwTOi5rfkAn9raV/SET-2024?page-id=697%3A2&node-id=1055-2314&node-type=frame&viewport=-1811%2C105%2C0.09&t=58h0jkGRXgM8lSSl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1055%3A2314&show-proto-sidebar=1

let numbersArray = [5, 3, 8, 2, 1, 7, 9, 6, 4];

// (11a) Find the position of the largest number
function findPositionOfLargestNumber(numbersArray) {
    let largestNumber = numbersArray[0];
    let position = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > largestNumber) {
            largestNumber = numbersArray[i];
            position = i
        }
    }
    return position
}


// (11b) Find the position of the smallest number
function findPositionOfSmallestNumber(numbersArray) {
    let smallestNumber = numbersArray[0];
    let position = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] < smallestNumber) {
            smallestNumber = numbersArray[i];
            position = i
        }
    }
    return position
}


// (11c) Find and print the sum of all elements in the array
function findSumOfAllElementsInArray(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i]
    }
    return sum
}

console.log(`
(11a) -----------------
Position of largest number is: 
=> ${findPositionOfLargestNumber(numbersArray)}

(11b) -----------------
Position of smallest number is: 
=> ${findPositionOfSmallestNumber(numbersArray)}

(11c) -----------------
Sum of all elements in array is: 
=> ${findSumOfAllElementsInArray(numbersArray)}
`);