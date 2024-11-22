//flowchartURL: https://www.figma.com/proto/h3iuRK1PwTOi5rfkAn9raV/SET-2024?page-id=697%3A2&node-id=1093-11645&node-type=frame&viewport=-1811%2C105%2C0.09&t=58h0jkGRXgM8lSSl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1093%3A11645&show-proto-sidebar=1

let sequence = 5123567239865;

// (9a) Find the longest increasing/decreasing subsequence.
function findLongestSubsequence(sequence, isIncreasing) {
    if (typeof sequence === 'number') {
        sequence = sequence.toString();
    }
    let longestSubsequence = [];
    let currentSubsequence = [];
    for (let i = 0; i < sequence.length; i++) {
            let lastElement = currentSubsequence[currentSubsequence.length - 1];
            if ((isIncreasing && sequence[i] > lastElement) ||
                (!isIncreasing && sequence[i] < lastElement)
            ) {
                currentSubsequence.push(sequence[i]);
            } else {
                if (currentSubsequence.length > longestSubsequence.length) {
                    longestSubsequence = [...currentSubsequence];
                }
                currentSubsequence = [sequence[i]];
            }
    }
    return longestSubsequence.length;
}

// (9b) Sort the characters in ascending/descending order and print them.
function sortCharacters(sequence, sortingType) {
    let sequenceArray = sequence.toString().split('');
    if (sortingType === 'ascending') {
        sequenceArray.sort();
    } else if (sortingType === 'descending') {
        sequenceArray.sort().reverse();
    }
    return sequenceArray.join('');
}


console.log(`
(9a) -----------------
Length of longest increasing subsequence in ${sequence}:
=> ${findLongestSubsequence(sequence, true)}

Length of longest decreasing subsequence in ${sequence}:
=> ${findLongestSubsequence(sequence, false)}

(9b) -----------------
Sorted sequence in ${sequence}:
=> ${sortCharacters(sequence, 'ascending')}
=> ${sortCharacters(sequence, 'descending')}
`);
