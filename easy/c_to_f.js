// Convert Celsius to Fahrenheit
/*
  Create a function called convertToF that takes in one parameter, named celsius.
  Which is a number.
  Formula for Celsius to Fahrenheit: Fahrenheit = (9/5 * C) + 32
  Return the degree amount in Fahrenheit.
*/

const convertToF = cel => {
    return (9/5 * cel) + 32
}

console.log(convertToF(35))