function calculateTotal(numbersArray: number[]): number {
    let total = 0;
    numbersArray.forEach((number: number) => {
      total += number;
    });
    return total;
}

let bestPurchases: number[] = [10000, 20000, 30000];
console.log(calculateTotal(bestPurchases)); // 60000