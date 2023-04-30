//define a recursive function isEven that accepts a single parameter and returns a boolean indicating if it is even.

function isEven( number ) {
 // If the number is negative, convert it to a positive number
 number = Math.abs(number);

 // Base case: If num is 0, it's even
 if (number === 0) {
   return true;
 }

 // Base case: If num is 1, it's odd
 if (number === 1) {
   return false;
 }

 // Recursive case: Subtract 2 from num and call isEven() again
 return isEven(number - 2);
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
