// 🧠 Problem 1 — Frequency Analyzer (Core Logic + Objects)
// Task

// Write a function that analyzes a string and returns how many times each character appears.

// Requirements

// Ignore spaces

// Treat uppercase and lowercase letters as the same

// Return the result as an object

// Do not use Map (use plain objects only)

// Expected Output
// {
//   h: 1,
//   e: 1,
//   l: 3,
//   o: 2,
//   w: 1,
//   r: 1,
//   d: 1
// }

// Constraints (important)

// You must loop manually (no regex replace shortcuts)

// Think about time complexity

// Handle edge cases like:

// empty string

// string with only spaces

//code:

function charFrequency(str) {
  let newStr = str.replace(" ", "").toLowerCase();
  let length = newStr.length;

  if (str === "") {
    return {};
  }

  const freq = {};

  for (let i = 0; i < length; i++) {
    if (freq.hasOwnProperty(newStr[i])) {
      freq[newStr[i]]++;
    } else {
      freq[newStr[i]] = 1;
    }
  }
  return freq;
}


//version 2 -> improved code

function charFrequencyV2(str){
    const freq = {}

    for(let i=0; i<str.length; i++){
        let char = str[i].toLowerCase();

        if(char === ' ') continue;

        freq[char] = (freq[char] || 0) + 1;
    }

    return freq;
}

const freq = charFrequency("Hello World");
console.log(freq);
