/*[1]Create a function called greet that logs the string "Hello, World!" to the console.*/
function greet () {
    console.log("Hello, World!")
}

/*[2] Write a function named favoriteNumber 
that logs your favorite number (e.g., 42) to the console.*/
function favoriteNumber () {
    console.log("My favorite number is 42");
}

/*[3]Create a function called magicEightBall that logs a random response from 
the following list: "Yes", "No", "Maybe", or "Ask again later".

function magicEightBall () { 
    const responses = ["Yes", "No", "Maybe", "Ask again later"];
    const randomIndex = Math.floor(Math.random() * responses.length);
    console.log(responses[randomIndex]);
}
magicEightBall();*/

/*[4] Write a function called getCurrentYear 
that logs the current year to the console using the Date object.*/
function getCurrentYear () {
    const d = new Date();
    const curretYear = d.getFullYear();
    console.log(curretYear);
}
getCurrentYear();

/*[5] Create a function called tellJoke that logs a 
random joke from a predefined list of jokes to the console.*/
function tellJoke () {
    const jokes = ["What do you call a pony with a cough?",
        "What did one hat say to the other?",
        "What do you call a magic dog?",
        "What’s orange and sounds like a carrot?"
    ];
const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
console.log(randomJoke);
}
tellJoke();

/*[6] Write a function named personalGreeting that takes a name as a
 parameter and logs a greeting string (e.g., "Hello, [name]!") to the console.*/
 function personalGreeting(name) {
console.log("Hello " + name + "!")
 }
 personalGreeting("Nilsson");

 /*[7] Create a function called add 
 that takes two numbers as parameters and logs their sum to the console.*/
 function add (num1, num2) {
const result = num1 + num2;
console.log(result)
 }
add(5, 10);

/*[8] Write a function named ageInMonths that takes a person's age 
in years as a parameter and logs their age in months (e.g., age * 12).*/
function ageInMonths(age) {
    const ageInMonths = age * 12;
    console.log("Your age in months is " + ageInMonths + "!");
}
ageInMonths(23);

/* [9] Create a function called celsiusToFahrenheit that takes a temperature in 
Celsius as a parameter and 
logs the equivalent temperature in Fahrenheit to the console.*/
function celsiusToFahrenheit(celsius) {
const celsiusToFahrenheit = celsius * 1.8000 + 32;
console.log(celsiusToFahrenheit);
}
celsiusToFahrenheit(5);

/*[10]Write a function named getFullName that takes two parameters, firstName and lastName, 
and logs the full name as a single string (e.g., "John Doe") to the console.*/
function getFullName(firstName, lastName) {
console.log(firstName, lastName)
}
getFullName("Måns", "Nilsson");

/*[11] Create a function called calculateArea that takes the 
length and width of a rectangle as parameters and logs the area to the console.*/
function calculateArea(length, width) {
const area = length * width;
return area;
}
console.log(calculateArea(2,5))

/*[12] Write a function named findMax that takes two numbers as parameters and logs the larger of the two.*/
function findMax(num1, num2) {
let largeNum = 0;
if (num1 > num2)
    largeNum = num1;
else {
    largeNum = num2;
}
return largeNum;
}
console.log(findMax(12,7));

/*[13] Create a function called countVowels that takes a 
string as a parameter and logs the number of vowels (a, e, i, o, u) in that string.*/
function countVowels(string) {
const nrOfVowels = string.length;
return nrOfVowels;
}
console.log(countVowels("Ola"));

/*[14] Write a function named calculateDiscount that takes the original price and the 
discount percentage as parameters and logs the price after discount to the console.*/
function calculateDiscount(price, discount) {
const afterDiscount = price * (1 - discount / 100);
return afterDiscount;
}
console.log(calculateDiscount(1250, 50));

/*[15] Create a function called reverseString that takes a 
string as a parameter and logs the string reversed to the console.*/
function reverseString(exampleString) {
    let stringAfterReversal = "";
    for (let index = exampleString.length - 1; index >= 0; index--) {
      stringAfterReversal += exampleString.charAt(index);
    }
    return stringAfterReversal;
  }

  /*[1] Write a function called isPalindrome that takes a string as a parameter and returns 
  true if the string is a 
  palindrome (reads the same forwards and backwards) and false otherwise.*/
  function isPalindrome(exampleString) {
    let palindrome = true;
    if (reverseString(exampleString) != exampleString) {
      palindrome = false;
    }
    return palindrome;
  }
  console.log(isPalindrome("civic"));

  /*[2]Create a function named fizzBuzz that takes a number as a parameter and returns:
"Fizz" if the number is divisible by 3,
"Buzz" if it is divisible by 5,
"FizzBuzz" if it is divisible by both, and
the number itself if none of these conditions are met.*/
function fizzBuzz(exampleNumber) {
    let outputString = "";
    if (exampleNumber % 3 == 0) {
      outputString += "Fizz";
    }
    if (exampleNumber % 5 == 0) {
      outputString += "Buzz";
    }
    return outputString;
  }
  console.log(fizzBuzz(15));

  /*[3] Write a function called factorial that takes a positive integer as 
  a parameter and returns the factorial of that number (e.g., 5! = 5 × 4 × 3 × 2 × 1).*/
  function factorial(posNumber) {
    let factorialOfNum = posNumber;
    for (let index = posNumber - 1; index > 0; index--) {
      factorialOfNum *= index;
    }
    return factorialOfNum;
  }
  console.log(factorial(7));

  /* [4]Create a function named findLongestWord that takes a string 
  (a sentence) as a parameter and returns the longest word in that sentence.*/
  function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord;
}
let sentence = "this is a text for my code examlple";
console.log(findLongestWord(sentence)); 

/*[5] Write a function called calculateAverage that 
takes an array of numbers as a parameter and returns the average of those numbers.*/
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = numbers.reduce((total, num) => total + num, 0);
    let average = sum / numbers.length;
    return average;
}
let numbers = [10, 20, 20, 35, 50];
console.log(calculateAverage(numbers)); 

/*[6] Create a function named removeDuplicates that takes an array as a parameter and 
returns a new array with duplicate values removed.*/
function removeDuplicates(array) {
    let uniqueArray = [...new Set(array)];
    return uniqueArray;
}
let numberss = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numberss));

/*[7] Write a function called capitalizeFirstLetter that takes a string as 
a parameter and returns the string with the first letter capitalized.*/
function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
let sentencee = "hello world";
console.log(capitalizeFirstLetter(sentencee));

/*[8] Create a function named countOccurrences that takes a string and a character as parameters 
and returns the number of times the character appears in the string.*/
function countOccurrences(exampleString, exampleChar) {
    return exampleString.split(exampleChar).length - 1;
  }
  console.log(countOccurrences("hello", "l"));

  /*[9] Write a function called mergeArrays that takes two arrays as parameters and returns a new array 
  that contains all the elements from both arrays, ensuring no duplicates.*/
  function mergeArrays(array1, array2) {
    let mergedArray = [...new Set([...array1, ...array2])];
    return mergedArray;
}
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
console.log(mergeArrays(array1, array2)); 

/*[10] Write a function called generatePassword that takes a length as a parameter and returns a 
randomly generated password of 
that length, using uppercase letters, lowercase letters, and numbers.*/
function generatePassword(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö0123456789";
    const result = [];
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result.push(characters.charAt(randomIndex));
    }
    return result.join("");
  }
  console.log(generatePassword(12));

  /*[11]Create a function named charFrequency that takes a string as a parameter and returns 
  an object with each character 
  as a key and the number of times it appears in the string as the value.*/
  function charFrequency(str) {
    let frequency = {};
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}
let inputString = "hello world";
console.log(charFrequency(inputString));

/*[12] Write a function called arrayIntersection that takes two arrays as parameters and returns a 
new array containing only the elements that are present in both arrays.*/
function arrayIntersection(exampleArray1, exampleArray2) {
    const newArray = exampleArray1.concat(exampleArray2);
    return newArray.filter(
      (item, index) =>
        newArray.indexOf(item) !== index && newArray.lastIndexOf(item) === index
    );
  }
 console.log(arrayIntersection([1, 2, 3], [2, 3, 4]));

 /*[13] Create a function named reverseWords that takes a string as a parameter and returns the string 
 with the order of the words reversed (e.g., "Hello World" becomes "World Hello").*/
 function reverseWords(sentence) {
    let reversed = sentence.split(' ').reverse().join(' ');
    return reversed;
}
let inputSentence = "Hello World";
console.log(reverseWords(inputSentence));

/*[14] Write a function called findMin that takes an array of 
numbers as a parameter and returns the smallest number in the array.*/
function findMin(numbers) {
    return Math.min(...numbers);
}
let numArray = [5, 3, 9, 1, 7];
console.log(findMin(numArray));