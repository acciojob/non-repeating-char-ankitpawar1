function firstNonRepeatedChar(str) {
    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

function findAndDisplayFirstNonRepeatedChar() {
    const str = document.getElementById('stringInput').value;
    const result = firstNonRepeatedChar(str);
    document.getElementById('result').innerText = result === null ? 'null' : result;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input "aabbcdd", uncomment the following line
// console.log(firstNonRepeatedChar('aabbcdd'));

// do not edit below this line
module.exports = firstNonRepeatedChar;
