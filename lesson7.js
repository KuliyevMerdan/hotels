function getSumOfNumericFields(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
}

function getSortedNumericFieldNames(obj) {
    const numericFields = [];

    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            numericFields.push([key, obj[key]]);
        }
    }

    numericFields.sort((a, b) => b[1] - a[1]);

    return numericFields.map(field => field[0]);
}

const exampleObj = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };

console.log(getSumOfNumericFields(exampleObj)); // 31
console.log(getSortedNumericFieldNames(exampleObj)); // [ 'likes', 'projects', 'friends' ]
