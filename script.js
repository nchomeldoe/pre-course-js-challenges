// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const isNumberPositive = (number) => {
  if (number >= 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));

// 2. Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = (numberOfDays) => {
  return Math.floor(numberOfDays / 365);
};

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));

// 3. Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (x, y, z) => {
  const arrayOfNumbers = [x, y, z];
  arrayOfNumbers.sort((a, b) => b - a);
  return arrayOfNumbers[0];
};

console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6, 2, 3));

// 4. Write a function that takes an array of names and returns the last name from the array of names.

const getLastName = (arrayOfNames) => {
  const indexOfLastname = arrayOfNames.length - 1;
  return arrayOfNames[indexOfLastname];
};

console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash", "Stu"]));

// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

const allNumbersPositive = (arrayOfNumbers) => {
  return arrayOfNumbers.every((number) => number >= 0);
};

console.log(allNumbersPositive([2, 4, 5]));
console.log(allNumbersPositive([-5, 4, 6]));
