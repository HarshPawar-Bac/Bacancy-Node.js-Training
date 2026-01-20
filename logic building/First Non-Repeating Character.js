// Write a function that returns the first character in a string that appears only once.

// Rules
// Ignore spaces
// Case-insensitive
// If none found, return null

// Example
// firstUniqueChar("aabbcdd");

// Output
// "c"

function firstUniqueChar(str){

    let freq = {};

    for(let i=0; i<str.length; i++){
        let char = str[i].toLowerCase();
        if(char === ' ') continue;
        freq[char] = (freq[char] || 0) + 1;
    }

    for(let i=0; i<str.length; i++){
        let char = str[i].toLowerCase();
        if(char === ' ') continue;
        if(freq[char] === 1)
            return char
    }
    return null;
}

console.log(firstUniqueChar("aabbcdd"))