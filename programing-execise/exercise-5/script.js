//FlowchartURL: https://www.figma.com/proto/h3iuRK1PwTOi5rfkAn9raV/SET-2024?page-id=697%3A2&node-id=920-281&node-type=frame&viewport=563%2C215%2C0.08&t=LPiWRYWbB2eSLrXm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=920%3A281&show-proto-sidebar=1 
let numbersArray = [5, 3, 8, 2, 1, 7, 9, 6, 4];

function sortArrayMinToMax(numbersArray) {
    for (let i = 0; i < numbersArray.length; i++) {
        for (let j = i + 1; j < numbersArray.length; j++) {
            if (numbersArray[i] > numbersArray[j]) {
                let temporaryValue = numbersArray[i];
                numbersArray[i] = numbersArray[j];
                numbersArray[j] = temporaryValue
            }
        }
    }
    return numbersArray
}

console.log(`
(5a) -----------------
Sorted array [${numbersArray}] from min to max is: 
=> [${sortArrayMinToMax(numbersArray)}]
`);