
//! IMPORTANT:
//! Create a repositary named coding-challenge1, then clone it in your
//! Documents folder. Create 3 folders inside the newly created folder,
//! Name them easy, medium and hard.
//! Create ONE .js file PER coding challenge inside the relevant folder, named after the challenge.
//! Copy the challlenge prompt and start your code after.

//===============================================
/*
	Title: Hex to Decimal
	Create a function which converts a hexadecimal number (given as a string) to a decimal number.
	Hint: Documentation is your friend.
	Definition of Hexadecimal Number:
		A Hexadecimal or base 16 is a numeral system that uses 16 symbols
		(0 to 9, after 9 count from A to F).
		1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
		0 1 2 3 4 5 6 7 8 9  A  B  C  D  E  F
		A six-digit combination of these 16 numbers and letters is a hexadecimal. Most
		commonly we use it represent color in place of rgb().
		More Info: https://whatis.techtarget.com/definition/hexadecimal
		For Example:
		 color: #fff (being white --> equivalent --> rgb(255, 255, 255))
	Binary is base-2 meaning 0 or 1. Each hexadecimal has an equivalent sequence of
	1s and 0s.
*/

/*
	Title: I love you, a little , a lot, passionately ... not at all
	A hero is on his way to the castle to complete his mission. However, he's been told
	that the castle is surrounded with a couple of powerful dragons! each dragon takes
	2 bullets to be defeated, our hero has no idea how many bullets he should carry.
	Assuming he's gonna grab a specific given number of bullets and move forward to
	fight another specific given number of dragons, will he survive?
	Return True if yes, False otherwise :)
*/

//===============================================

// Find the Longest Word in a string
/*
  Create a function called findLongestWordLength that takes in one parameter, named str.
  That is a string.
  Return the length of the longest word in a sentence.
  Example: findLongestWordLength("The quick brown fox jumped over the lazy dog");
    Should return: 6
    Because jumped is the longest word in the sentence.
*/

//===============================================
// Truncate a String
/*
  Create a function named truncateString that takes in two parameters, one named
  str (expect this to be a string) and another named num (expect this to be a number).
  Truncate (shorten) a string (first argument) if it is longer than the given maximum string
  length (second argument).Return the new string.
  Example: truncateString("Peter Piper", 5);
    Should return: 'Peter'
*/

//===============================================
// Milk and Cookies

/*
Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
Examples
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
Notes
Dates are zero zero based (see resources).
All test cases contain valid dates.
*/

//===============================================
// LEtters to Binary

/*
Write a function that transforms all letters from [a,m] to 0 and letters from [n,z] to 1 in a string.
Examples
convertBinary("house") ➞ "01110"
convertBinary("excLAIM") ➞ "0100000"
convertBinary("moon") ➞ "0111"
Notes
Conversion should be case insensitive (see example #2).
*/