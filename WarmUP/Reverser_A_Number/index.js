// Write a function that takes an integer as input and returns the integer with the digits reversed.

// Example:
// Given an integer, return an integer that is the reverse ordering of numbers.

// Note: The input integer may be either positive or negative

let x = -1234;
le
let xcopy = x;
function reverseInteger(x) {
  let rev = "0";

  while (x > 0) {
    let last = x % 10;

    rev = 10 * rev + last;
    x = Math.floor(x / 10);
  }

 let limit = Math.pow(2, 31);

    // let limit = 2**31;

  if (rev > limit || rev < -limit) {
    return 0;
  } 

  return xcopy < 0 ? -rev : rev;
}

const result = reverseInteger(1234);

console.log("Reverse of Integer is::", result);
