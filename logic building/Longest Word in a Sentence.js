// Task: Longest Word in a Sentence

// Write a function that returns the longest word in a sentence.

// Rules
// Ignore punctuation (.,!?)

// If multiple words have same length → return the first one

// Case-insensitive comparison, but return the word as-is

// Example
// longestWord("I am learning JavaScript, and it is awesome!");

// Output
// "JavaScript"

function longestWord(str) {
  let longest = "";
  let current = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (
      char &&
      ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"))
    ) {
      current += char;
    } else {
      if (current.length > longest.length) {
        longest = current;
      }
      current = "";
    }
  }
  return longest;
}

console.log(longestWord("I am learning JavaScript, and it is awesome!"));
