// Esercizio 1

const checkNum = function (num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    return true;
  } else {
    return false;
  }
};

console.log(checkNum(25, 10)); //false
console.log(checkNum(20, 30)); //true
console.log(checkNum(50, 40)); //true
console.log(checkNum(12, 50)); //true

// Esercizio 2

function removeChar(string, pos) {
  if (pos < 0 || pos >= string.length) {
    console.log("Posizione non valida");
    return string;
  }
  let arrayChar = string.split("");
  arrayChar.splice(pos, 1);
  let newString = arrayChar.join("");
  return newString;
}

let originalString = "Mamma jMia Pero'";
let removePos = 6;

let newString = removeChar(originalString, removePos);
console.log(newString);

// Esercizio 3

const checkIf = function (num3, num4) {
  if (num3 >= 40 && num3 <= 60 && num4 >= 40 && num4 <= 60) {
    return true;
  } else if (num3 >= 70 && num3 <= 100 && num4 >= 70 && num4 <= 100) {
    return true;
  } else {
    return false;
  }
};
console.log(checkIf(40, 50)); //true
console.log(checkIf(80, 90)); //true
console.log(checkIf(10, 110)); //false

// Esercizio 4

const checkCity = function (city) {
  const cityInsensitive = city.toLowerCase();

  if (cityInsensitive.startsWith("los") || cityInsensitive.startsWith("new")) {
    return city;
  } else {
    return false;
  }
};

console.log(checkCity("Milano")); //false
console.log(checkCity("New York")); //New York
console.log(checkCity("Los Angeles")); //Los Angeles
console.log(checkCity("Roma")); //false

// Esercizio 5

const arraySum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const arrayNums = [5, 7, 8, 10, 15];
const testSum = arraySum(arrayNums);
console.log(testSum); //45

// Esercizio 6

const verifyArray = function (array) {
  for (let x = 0; x < array.length; x++) {
    if (array[x] === 1 || array[x] === 3) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(verifyArray([2, 4, 5])); // true
console.log(verifyArray([1, 2, 3])); // false
console.log(verifyArray([10, 20, 30])); // true
console.log(verifyArray([4, 5, 6])); // true

// Esercizio 7

function angleKind(degrees) {
  if (degrees < 0 || degrees > 180) {
    return "Angolo non valido";
  }

  switch (true) {
    case degrees < 90:
      return "Acuto";
    case degrees === 90:
      return "Retto";
    case degrees > 90 && degrees < 180:
      return "Ottuso";
    case degrees === 180:
      return "Piatto";
    default:
      return "Angolo non valido";
  }
}

console.log(angleKind(45)); // Acuto
console.log(angleKind(90)); // Retto
console.log(angleKind(120)); // Ottuso
console.log(angleKind(180)); // Piatto
console.log(angleKind(200)); // Angolo non valido

// Esercizio 8

function createAcro(string) {
  const words = string.split(" ");
  const acro = words.map((word) => word.charAt(0).toUpperCase()).join("");
  return acro;
}

const startString = "New World Order";
const acro = createAcro(startString);

console.log(acro); // NWO

// Extra 1

function mostFrequentCharacter(inputString) {
  const charCount = {};

  for (let char of inputString) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let mostFrequentChar = "";
  let maxOccurrences = 0;

  for (let char in charCount) {
    if (charCount[char] > maxOccurrences) {
      mostFrequentChar = char;
      maxOccurrences = charCount[char];
    }
  }

  return mostFrequentChar;
}

const exampleString = "ramarro marrone";
const result = mostFrequentCharacter(exampleString);

console.log(result); // Output: 'r'

// Extra 2

function areAnagrams(str1, str2) {
  const cleanStr1 = str1.toLowerCase();
  const cleanStr2 = str2.toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

const word1 = "Lago";
const word2 = "Gola";

console.log(areAnagrams(word1, word2)); // true

// Extra 3

function findAnagrams(word, potentialAnagrams) {
  const cleanWord = word.toLowerCase();

  const correctAnagrams = potentialAnagrams.filter((anagram) => {
    const cleanAnagram = anagram.toLowerCase();

    return (
      cleanAnagram.split("").sort().join("") ===
      cleanWord.split("").sort().join("")
    );
  });

  return correctAnagrams;
}

const wordToCheck = "cartine";
const potentialAnagramsList = ["carenti", "incerta", "espatrio"];

const resultAnagrams = findAnagrams(wordToCheck, potentialAnagramsList);
console.log(resultAnagrams); // ["carenti", "incerta"]

// Extra 4

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}

const exString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(exString)); //true

// Extra 5

function reverseNumber(originalNumber) {
  const reversedNumber = parseInt(
    originalNumber.toString().split("").reverse().join("")
  );

  return reversedNumber;
}

const exampleNumber = 189;
const reversedResult = reverseNumber(exampleNumber);

console.log(reversedResult); // 981

// Extra 6

function printStaircase(X) {
  for (let i = 1; i <= X; i++) {
    const stair = "#".repeat(i);
    console.log(stair);
  }
}

const exampleX1 = 5;
const exampleX2 = 3;

console.log(`Staircase for X = ${exampleX1}`);
printStaircase(exampleX1);

console.log(`Staircase for X = ${exampleX2}`);
printStaircase(exampleX2);

// Extra 7

function reverseString(inputString) {
  const reversedString = inputString.split("").reverse().join("");
  return reversedString;
}

const exampleString2 = "Miao";
const reversedResult2 = reverseString(exampleString2);

console.log(reversedResult2); // oaiM

// Extra 8

function divideArray(array, Y) {
  const resultArray = [];
  for (let i = 0; i < array.length; i += Y) {
    resultArray.push(array.slice(i, i + Y));
  }

  return resultArray;
}

const exampleArray1 = [1, 2, 3, 4];
const Y1 = 2;

const exampleArray2 = [1, 2, 3, 4, 5];
const Y2 = 4;

console.log(divideArray(exampleArray1, Y1)); // [[1, 2], [3, 4]]
console.log(divideArray(exampleArray2, Y2)); // [[1, 2, 3, 4], [5]]

// Extra 9

function printPyramid(X) {
  for (let i = 1; i <= X; i++) {
    const spaces = " ".repeat(X - i);
    const blocks = "#".repeat(2 * i - 1);
    console.log(spaces + blocks + spaces);
  }
}

const exampleX = 5;
console.log(`Pyramid for X = ${exampleX}`);
printPyramid(exampleX);

// Extra 10

function generateSpiralMatrix(N) {
  const matrix = Array.from({ length: N }, () => Array(N).fill(0));

  let counter = 1;
  let startRow = 0,
    endRow = N - 1,
    startCol = 0,
    endCol = N - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter++;
    }
    endCol--;

    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        matrix[endRow][i] = counter++;
      }
      endRow--;
    }

    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startCol] = counter++;
      }
      startCol++;
    }
  }

  return matrix;
}

const exampleN1 = 2;
const exampleN2 = 3;
const exampleN3 = 4;

console.log(generateSpiralMatrix(exampleN1));
console.log(generateSpiralMatrix(exampleN2));
console.log(generateSpiralMatrix(exampleN3));
