//flowchartURL: https://www.figma.com/proto/h3iuRK1PwTOi5rfkAn9raV/SET-2024?page-id=697%3A2&node-id=996-5894&node-type=frame&viewport=-604%2C196%2C0.1&t=ldTFalZe3Jxdpo86-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=996%3A5894&show-proto-sidebar=1
let inputString = "abracadabra";
let character = "b";

// (8a) Count the number of vowels.
function countVowels(inputString) {
    let count = 0;
    let arrayOfVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let i = 0; i < inputString.length; i++) {
        for (let j = 0; j < arrayOfVowels.length; j++) {
            if (inputString[i] === arrayOfVowels[j]) {
                count++;
            }
        }
    }
    return count
}

// (8b) Count the occurrences of a specific character.
function countOccurrences(inputString, character) {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === character) {
            count++;
        }
    }
    return count
}

// (8c) Find the most frequent character.
function findMostFrequentCharacter(inputString) {
    let characterFrequency = {};
    for (let i = 0; i < inputString.length; i++) {
        if (characterFrequency[inputString[i]]) {
            characterFrequency[inputString[i]]++;
        } else {
            characterFrequency[inputString[i]] = 1;
        }
    }
    let highestFrequency = 0;
    let mostFrequentCharacter = "";
    for (let character in characterFrequency) {
        if (characterFrequency[character] > highestFrequency) {
            highestFrequency = characterFrequency[character];
            mostFrequentCharacter = character;
        }
    }
    return mostFrequentCharacter
}

console.log(`
(8a) -----------------
The number of vowels in "${inputString}" is: 
=> ${countVowels(inputString)}

(8b) -----------------
In "${inputString}": 
"${character}" appears
=> ${countOccurrences(inputString, character)} times 

(8c) -----------------
The most frequent character in "${inputString}" is: 
=> ${findMostFrequentCharacter(inputString)}
`);