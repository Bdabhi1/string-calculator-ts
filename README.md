# string-calculator

A simple TypeScript implementation of the String Calculator. This project provides a `StringCalculator` class that can sum numbers in a string, supporting custom delimiters and error handling for negative numbers.

## Features
- Add numbers in a string separated by commas or newlines
- Support for custom delimiters
- Returns 0 for empty input
- Throws an error for negative numbers (lists all negatives in the error message)

## Installation

```bash
npm install
yarn install
```

## Build

```bash
npm run build
```

## Usage

```typescript
import { StringCalculator } from "./src/stringCalculator";

const calculator = new StringCalculator();

console.log(calculator.add("")); // 0
console.log(calculator.add("1")); // 1
console.log(calculator.add("1,2,3")); // 6
console.log(calculator.add("1\n2,3")); // 6
console.log(calculator.add("//;\n1;2")); // 3

// Throws error for negatives:
// calculator.add("1,-2,3"); // Error: negative numbers not allowed -2
```

## Testing

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests with coverage:

```bash
npm run test:coverage
```

## Author

Bhargav Dabhi