import {
  emptyArrayMessage,
  nullArrayMessage,
  nullTargetMessage,
} from "./constants";

const validateArray = (numbers: number[]): undefined | string => {
  if (!numbers) {
    return nullArrayMessage;
  }

  if (!numbers.length) {
    return emptyArrayMessage;
  }
};
// Problem 1
// The conmplexity is O(n) as we need to iterate one time the array and validate all the positions.
export function findMissingNumbers(numbers: number[]): Number[] | String {
  // First validate data to avoid edge-cases
  const message = validateArray(numbers);
  if (message) {
    return message;
  }

  // as I need to find the mising value I create a Set of the numbers to have a better performance finding a value
  // in the array and remove duplicate values as they are not needed
  const uniqueNumbers: Set<number> = new Set(numbers);
  const missing: number[] = [];

  // I start the iteration to vlaidate if uniqueNumbers have the value in the range of 1 to n, if one of the value
  // is not founded I save in the array that save all the indexes
  for (let i = 1; i <= numbers.length; i++) {
    if (!uniqueNumbers.has(i)) {
      missing.push(i);
    }
  }

  return missing;
}

// Problem 2
// The conmplexity is O(n) as we need to iterate one time the array and validate all the positions.
export function getIndexesOfTargetInArray(
  numbers: number[],
  target: number
): Number[] | String {
  // First validate data to avoid edge-cases
  const message = validateArray(numbers);
  if (message) {
    return message;
  }

  if (!target) {
    return nullTargetMessage;
  }

  // I create a object to save the values and the indexex of numbers that was previous checked in the iteration
  const numberViewed: { [key: number]: number } = {};
  // In each iteration I substract the number at position of i form the target to find
  // the complement that could be in a previous position
  for (let i = 0; i < numbers.length; i++) {
    const valueToFind = target - numbers[i];
    // as I know the value at position i exist in the array
    // I validate if the complement of the rest has been previous saved
    // if exist return the indexes of both values
    if (numberViewed.hasOwnProperty(valueToFind)) {
      return [numberViewed[valueToFind], i];
    }
    // using the numberViewed I save all the previous numbers for the next iteration
    numberViewed[numbers[i]] = i;
  }
  return [];
}
