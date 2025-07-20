export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    let numbersToAdd = numbers;

    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      const customDelimiter = numbers.substring(2, delimiterEndIndex);
      delimiter = new RegExp(customDelimiter);
      numbersToAdd = numbers.substring(delimiterEndIndex + 1);
    }

    const nums = numbersToAdd.split(delimiter);

    const negatives = nums.filter((num) => parseInt(num) < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return nums.reduce((sum, num) => sum + parseInt(num), 0);
  }
}
