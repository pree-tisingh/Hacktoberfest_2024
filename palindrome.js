function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

const inputString = prompt("Enter a string to check for palindrome:");
if (isPalindrome(inputString)) {
    console.log(`${inputString} is a palindrome.`);
} else {
    console.log(`${inputString} is not a palindrome.`);
}
