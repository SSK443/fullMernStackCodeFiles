//Reverse a String

// Write a function to reverse a given string without using the .reverse() method.



function reverse(str) {
  let result = "";
  for (i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
    //  console.log(result,'inside');

    // console.log(i);
  }
  // console.log(result,'outer');
  // console.log(i);

  return result;
}
console.log(reverse("suraj s kumar"));




///Count Vowels in a String

// Write a function that counts the number of vowels (a, e, i, o, u) in a string.



function vowelCounter(string) {
  let vowels = "aeiou";
  let count = 0;
  for (let stri of string) {
    if (vowels.includes(stri.toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(vowelCounter("hello word"));

/// preferred method


const reverseString = (string) => {
  let vowels = "aeiou";
  let count = {};
  string = string.toLowerCase(); // Convert string to lowercase
  for (let str of string) {
    // Loop through the string and count vowels
    if (vowels.includes(str)) {
      if (!count[str]) {
        count[str] = 1; // Initialize count
      } else {
        count[str]++; // Increment count
      }
    }
  }
  return count;
};

console.log(reverseString("hello world of love"));



// Check for Palindrome

// Write a function to check if a given string is a palindrome.

//A palindrome is a word, phrase, or sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).



function isPalindrome(string) {
  // Step 1: Convert to lowercase and remove non-alphanumeric characters
  let cleanedStr = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  // console.log(cleanedStr);

  // Step 2: Reverse the cleaned string
  let reverseStr = cleanedStr.split("").reverse().join("");
  // console.log(reverseStr);

  return cleanedStr === reverseStr;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));

console.log(isPalindrome("racecar"));

console.log(isPalindrome("hello"));




// Compress a String

// Implement basic string compression using counts of repeated characters.

// Example: "aabcccccaaa" → "a2b1c5a3"
function compressString(string) {
  let compressedStr = "";
  let count = 1;
  for (i = 0; i <= string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      compressedStr = compressedStr + string[i] + count;
      count++;
    }
  }
  return compressedStr.length ? compressedStr : string;
}
console.log(compressString("aabcccccaaa")); // Output: "a2b1c5a3"
console.log(compressString("abc")); // Output: "abc"
console.log(compressString("aabbcc")); // Output: "a2b2c2"
console.log(compressString("a")); // Output: "a"