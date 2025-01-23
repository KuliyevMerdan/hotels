function calculateTotal(numbersArray) {
  let total = 0;
  numbersArray.forEach(number => {
    total += number;
  });
  return total;
}
  
let bestPurchases = [10000, 20000, 30000];
console.log(calculateTotal(bestPurchases)); // 60000