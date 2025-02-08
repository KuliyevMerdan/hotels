function createLogger() {
    let logs = [];
    
    return {
        log(message) {
            logs.push(message);
        },
        getLogs() {
            return [...logs]; 
        }
    };
}

function createRandomGenerator(min, max) {
    return function() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}

const logger = createLogger();
logger.log("Первое сообщение");
logger.log("Второе сообщение");
console.log(logger.getLogs()); // ["Первое сообщение", "Второе сообщение"]

const randomGenerator = createRandomGenerator(1, 10);
console.log(randomGenerator()); // случайное число от 1 до 10
console.log(randomGenerator());
