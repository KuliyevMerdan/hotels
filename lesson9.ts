const operations: Record<string, (a: number, b: number) => number> = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

const calculate = (a: number, b: number, operation: (a: number, b: number) => number): number => operation(a, b);

const selectedOperation: string = "multiply";
console.log(calculate(6, 3, operations[selectedOperation])); // 18