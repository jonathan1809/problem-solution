import {
  emptyArrayMessage,
  nullArrayMessage,
  nullTargetMessage,
} from "../constants";
import { findMissingNumbers, getIndexesOfTargetInArray } from "../index";

describe("Main", function () {
  describe("Problem 1", () => {
    it("Should return an array with values [5,6]", () => {
      const scenario = [4, 3, 2, 7, 8, 2, 3, 1];
      const missingNumbers = findMissingNumbers(scenario);
      expect(missingNumbers).toEqual([5, 6]);
    });

    it("Should return an array with values [2]", () => {
      const scenario = [1, 1];
      const missingNumbers = findMissingNumbers(scenario);
      expect(missingNumbers).toEqual([2]);
    });

    it("Should return an empty array if not found a missing number", () => {
      const scenario = [1, 2];
      const missingNumbers = findMissingNumbers(scenario);
      expect(missingNumbers).toEqual([]);
    });

    it("Should return the message for empty arrays", () => {
      const scenario = [];
      const missingNumbers = findMissingNumbers(scenario);
      expect(missingNumbers).toEqual(emptyArrayMessage);
    });

    it("Should return the message for null array", () => {
      const scenario = null;
      const missingNumbers = findMissingNumbers(scenario);
      expect(missingNumbers).toEqual(nullArrayMessage);
    });
  });

  describe("Problem 2", () => {
    it("Should return an array with values  [0,1]", () => {
      const scenario = [2, 7, 11, 15];
      const target = 9;
      const indexesOfSum = getIndexesOfTargetInArray(scenario, target);
      expect(indexesOfSum).toEqual([0, 1]);
    });

    it("Should return an array with values  [1,2]", () => {
      const scenario = [3, 2, 4];
      const target = 6;
      const indexesOfSum = getIndexesOfTargetInArray(scenario, target);
      expect(indexesOfSum).toEqual([1, 2]);
    });

    it("Should return an array with values  [0,1]", () => {
      const scenario = [3, 3];
      const target = 6;
      const indexesOfSum = getIndexesOfTargetInArray(scenario, target);
      expect(indexesOfSum).toEqual([0, 1]);
    });

    it("Should return an empty array if no values founded for target", () => {
      const scenario = [3, 1];
      const target = 6;
      const indexesOfSum = getIndexesOfTargetInArray(scenario, target);
      expect(indexesOfSum).toEqual([]);
    });

    it("Should return the message for empty array", () => {
      const scenario = [];
      const target = 1;
      const indexesOfSum = getIndexesOfTargetInArray(scenario, target);
      expect(indexesOfSum).toEqual(emptyArrayMessage);
    });

    it("Should return the message for null array", () => {
      const scenario = null;
      const target = 1;
      const indexesOfSum = getIndexesOfTargetInArray(scenario, target);
      expect(indexesOfSum).toEqual(nullArrayMessage);
    });

    it("Should return the message for null values when target is null", () => {
      const scenario = [1, 2];
      const target = null;
      const indexesOfSum = getIndexesOfTargetInArray(scenario, target);
      expect(indexesOfSum).toEqual(nullTargetMessage);
    });

    it("Should return the message for null value when target is NaN", () => {
      const scenario = [1, 2];
      const target = NaN;
      const indexesOfSum = getIndexesOfTargetInArray(scenario, target);
      expect(indexesOfSum).toEqual(nullTargetMessage);
    });
  });
});
