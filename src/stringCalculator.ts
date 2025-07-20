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
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
  }
}
