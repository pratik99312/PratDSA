// Find a no is palindrome or not 

let nx = -121;
let x = nx;

function isPalindrome(x) {
    if (x < 0) {
        return "Number is not Palindrome"
    }
    let rev = 0;

    while (x > 0) {
        let rem = x % 10;
        rev = rev * 10 + rem;
        x = Math.floor(x / 10);
    }

    if (rev === nx) {
        return "Number is Palindrome"
    } else {
        return "Number is not Palindrome"
    }
}

console.log(isPalindrome(nx))