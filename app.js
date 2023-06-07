//1

const maxOfTwoNumbers = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};

console.log(maxOfTwoNumbers(8, 6));

//2

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num2 > num3) {
    return num1;
  } else if (num1 < num2 && num2 < num3) {
    return num3;
  } else {
    return num2;
  }
}

console.log(maxOfThree(5, 9, 2));

//3.

const isCharAVowel = (char) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let charx = char.toLowerCase();
  if (vowels.includes(charx)) {
    return true;
  } else {
    return false;
  }
};

console.log(isCharAVowel("e"));

//4.

function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(sumArray([2, 4, 5]));

//5.

const multiplyArray = (arr) => {
  return arr.reduce((acc, val) => acc * val, 1);
};

console.log(multiplyArray([2, 4, 5]));

//6.

function numArgs(arg) {
  return arguments.length;
}

console.log(numArgs(2, 3, 5, 6, 7));

//7.

const reverseString = (str) => {
  let strArr = str.split("");
  strArr.reverse();
  let result = strArr.join("");
  return result;
};

console.log(reverseString("Damola"));

//8.

function longestStingInArray(arr) {
  let itemLength = 0;
  let arrayItem = "d";
  arr.forEach((item) => {
    if (item.length > itemLength) {
      itemLength = item.length;
      arrayItem = item;
    }
  });
  return arrayItem;
}

console.log(longestStingInArray(["mouse", "eagle", "dog", "elephant"]));

//9.

const stringsLongerThan = (arr, num) => {
  let result = [];
  arr.forEach((item) => {
    item.length > num && result.push(item);
  });
  return result;
};

console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));
