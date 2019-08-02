// Find the Longest Word in a string
/*
  Create a function called findLongestWordLength that takes in one parameter, named str.
  That is a string.
  Return the length of the longest word in a sentence.
  Example: findLongestWordLength("The quick brown fox jumped over the lazy dog");
    Should return: 6
    Because jumped is the longest word in the sentence.
*/

string_to_array = function (str) {
    return str.trim().split(" ");
};

const findLongestWordLength = sentence => {
    const word_length = [];
    for (let word of string_to_array(sentence)) {
        word_length.push(word.length)
    }
    return Math.max(...word_length)
}

sentence = "The quick brown fox jumped over the lazy dog";


console.log(findLongestWordLength(sentence));