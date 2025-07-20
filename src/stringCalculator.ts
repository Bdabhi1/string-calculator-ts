import {
  EMPTY_STRING,
  DEFAULT_DELIMITER,
  CUSTOM_DELIMITER_PREFIX,
  NEWLINE,
  ERROR_NEGATIVE_NUMBERS,
} from "./constants";

export class StringCalculator {
  add(numbers: string): number {
    if (numbers === EMPTY_STRING) return 0;

    const { delimiter, numbersToAdd } = this.parseDelimiterAndNumbers(numbers);
    const nums = numbersToAdd.split(delimiter).map((num) => parseInt(num));

    this.validateNoNegatives(nums);

    return nums.reduce((sum, num) => sum + num, 0);
  }

  private parseDelimiterAndNumbers(input: string): {
    delimiter: RegExp;
    numbersToAdd: string;
  } {
    if (input.startsWith(CUSTOM_DELIMITER_PREFIX)) {
      const delimiterEndIndex = input.indexOf(NEWLINE);
      const customDelimiter = input.substring(
        CUSTOM_DELIMITER_PREFIX.length,
        delimiterEndIndex
      );
      return {
        delimiter: new RegExp(customDelimiter),
        numbersToAdd: input.substring(delimiterEndIndex + 1),
      };
    }

    return {
      delimiter: DEFAULT_DELIMITER,
      numbersToAdd: input,
    };
  }

  private validateNoNegatives(numbers: number[]): void {
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`${ERROR_NEGATIVE_NUMBERS} ${negatives.join(",")}`);
    }
  }
}
