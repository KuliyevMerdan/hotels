function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const secretNumber: number = getRandomNumber(1, 100);
console.log(`Компьютер 1 загадал число: ${secretNumber}`);

let low: number = 1;
let high: number = 100;
let attempts: number = 0;
let guess: number;

while (low <= high) {
    attempts++;

    guess = Math.floor((low + high) / 2);
    console.log(`Компьютер 2: Пробую число ${guess}.`);

    if (guess === secretNumber) {
        console.log(`Компьютер 1: Угадал! Число было ${secretNumber}.`);
        console.log(`Количество попыток: ${attempts}`);
        break;
    } else if (guess > secretNumber) {
        console.log(`Компьютер 1: Меньше.`);
        high = guess - 1; 
    } else {
        console.log(`Компьютер 1: Больше.`);
        low = guess + 1; 
    }
}
