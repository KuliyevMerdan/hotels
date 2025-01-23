function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const secretNumber = getRandomNumber(1, 100);
console.log(`Компьютер 1 загадал число: ${secretNumber}`);

let low = 1;
let high = 100;
let attempts = 0;
let guess;

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
