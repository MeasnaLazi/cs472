'use strict';

const max = function (a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

const maxOfThree = function (a, b, c) {
    let max = - Infinity;
    if (a > max) {
        max = a;
    }
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

const isVowel = function (character) {
    let characters = ["a", "e", "o", "u", "i"];
    return characters.indexOf(character) > -1;
}

const sum = function(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

const multiply = function(numbers) {
    let total = 1;
    for (let number of numbers) {
        total *= number;
    }
    return total;
}

const reverse = function(str) {
    let size = str.length;
    let reverseStr = "";
    for (let i = size; i > 0; i--) {
        reverseStr += str.charAt(i);
    }
    return reverseStr;
}

const findLongestWordLength = function(words) {
    let maxLenght = 0;
    for (let word of words) {
        let length = word.length;
        if (length > maxLenght) {
            maxLenght = length;
        }
    }
    return maxLenght;
}

const filterLongWords = function(words, minLength) {
    let minLengthWords = [];
    for (let word of words) {
        if (word.length > minLength) {
            minLengthWords.push(word);
        }
    }
    return minLengthWords;
}

const computeSumOfSquares = function sumOfSquares(numbers) {
    if (numbers.length <= 0) {
        return 0;
    }
    let number = numbers.pop();
    number *= number;
    return number + sumOfSquares(numbers);
}

const printOddNumbersOnly = function(numbers) {
    for (let number of numbers) {
        if (number % 2 == 1) {
            console.log(number)
        }
    }
}

const computeSumOfSquaresOfEvensOnly = function(numbers) {
    let total = 0;
    for (let number of numbers) {
        if (number % 2 == 0) {
            total += number * number
        }
    }
    return total;
}

const sumWithReduce = function(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

const multiplyWithReduce = function(numbers) {
    return numbers.reduce((a, b) => a * b, 1);l
}

const printFibo = function(n, a, b) {
    let fibos = [];
    let length = n;

    if (length > 0) {
        fibos.push(a);
    }
    if (length > 1) {
        fibos.push(b);
    }
    length -= 2;

    for (let i = length; i > 0; i--) {
        let next = a + b;
        fibos.push(next);
        
        a = b;
        b = next;
    }

    return fibos;
}

console.log("#1. max: " + max(1, 2));
console.log("#2. maxOfThree: " + maxOfThree(1, 2, 3));
console.log("#3. isVowel: " + isVowel("a"));
console.log("#4. sum: " + sum([1,2,3,4]) + " and multiple: " + multiply([1,2,3,4]));
console.log("#5. reverse: " + reverse("jag testar"));
console.log("#6. findLongestWordLength: " + findLongestWordLength(["apple", "orange", "egg", "ant", "alegato", "Hi", "Lazi"]));
console.log("#7. filterLongWords: " + filterLongWords(["apple", "orange", "egg", "ant", "alegato", "Hi", "Lazi"], 4));
console.log("#8. computeSumOfSquares: " + computeSumOfSquares([1, 2, 3]));
console.log("#9. printOddNumbersOnly: ");
printOddNumbersOnly([2, 3, 5, 99, 22, 77, 44]);
console.log("#10. computeSumOfSquaresOfEvensOnly: " + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));
console.log("#11. sumWithReduce: " + sumWithReduce([1,2,3,4]) + " and multiplyWithReduce: " + multiplyWithReduce([1,2,3,4]));
console.log("#12. printFibo: " + printFibo(10, 0, 1));