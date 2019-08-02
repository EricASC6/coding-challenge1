//===============================================
/*
	Title: Find Nearest square number
	Your task is to find the nearest square number, nearest_sq(n), of a positive integer n. */




const nearest_sq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
console.log(nearest_sq(2)); // 121
console.log(nearest_sq(900)); // 900
console.log(nearest_sq(15)); // 16


/*
	Title: Sentence Smash
	Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
	Example:
		const words = ['hello', 'world', 'this', 'is', 'great'];
		smash(words); // returns "hello world this is great"
		Assumptions
		You can assume that you are only given words.
		You cannot assume the size of the array.
		You can assume that you will always get an array.
	What We're Testing:
		We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.
*/
const words = ['hello', 'world', 'this', 'is', 'great'];
const sentence = words.slice(0, words.length - 1).join(' ') + " " + words.slice(-1);

console.log(sentence);




/*
	Title: Grasshopper - Terminal game combat function
	Create a combat function that takes the player's current health and the amount
	of damage received, and returns the player's new health. Health can't be less than 0.
*/

function combat(){
let health = 100;
let death = 0;
let damage= 10;

for(health === 100){
    health= health - damage
}
}
console.log(health);
// Convert Celsius to Fahrenheit
/*
  Create a function called convertToF that takes in one parameter, named celsius.
  Which is a number.
  Formula for Celsius to Fahrenheit: Fahrenheit = (9/5 * C) + 32
  Return the degree amount in Fahrenheit.
*/