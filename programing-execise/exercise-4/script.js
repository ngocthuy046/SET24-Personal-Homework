// flowchartURL: https://www.figma.com/proto/h3iuRK1PwTOi5rfkAn9raV/SET-2024?page-id=697%3A2&node-id=924-625&node-type=frame&viewport=563%2C215%2C0.08&t=LPiWRYWbB2eSLrXm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=924%3A625&show-proto-sidebar=1
let inputString = "Madam I'm Adam";

// (4a) Reverse the string.
function reverseString(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    return reversedString;
}

// (4b) Remove the spaces in the string.
function removeSpace(inputString) {
    let newString = "";
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== " ") {
            newString += inputString[i];
        }
    }
    return newString;
}

// (4c) Check if the string is a palindrome.
function checkPalindrome(inputString) {
    let reversedString = reverseString(inputString);
    if (inputString === reversedString) {
        return true
    } else {
        return false
    }
}

// (4d) Find the longest palindromic substring.
function findLongestPalindrome(inputString) {
    let longestPalindrome = "";

    function expandAroundCenter(left, right) {
        while (
            left >= 0 &&
            right < inputString.length &&
            inputString[left].toLowerCase() === inputString[right].toLowerCase()
        ) {
            left--;
            right++;
        }
        return inputString.slice(left + 1, right);
    }

    for (let i = 0; i < inputString.length; i++) {
        let oddPalindrome = expandAroundCenter(i, i);
        if (oddPalindrome.length > longestPalindrome.length) {
            longestPalindrome = oddPalindrome;
        }

        let evenPalindrome = expandAroundCenter(i, i + 1);
        if (evenPalindrome.length > longestPalindrome.length) {
            longestPalindrome = evenPalindrome;
        }
    }

    return longestPalindrome;
}


console.log(`
(4a) -----------------
Reversed string from "${inputString}" is: 
=> "${reverseString(inputString)}"

(4b) -----------------
String "${inputString}" without space is: 
=> "${removeSpace(inputString)}"

(4c) -----------------
Is "${inputString}" a palindrome? 
=> ${checkPalindrome(inputString)}

(4d) -----------------
Longest palindrome in "${inputString}" is: 
=> "${findLongestPalindrome(inputString)}"
`);