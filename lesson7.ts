function getSumOfNumericFields(obj: Record<string, unknown>): number {
    let sum = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key] as number;
        }
    }
    return sum;
}

function getSortedNumericFieldNames(obj: Record<string, unknown>): string[] {
    const numericFields: [string, number][] = [];

    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            numericFields.push([key, obj[key] as number]);
        }
    }

    numericFields.sort((a, b) => b[1] - a[1]);

    return numericFields.map(field => field[0]);
}

const exampleObj: Record<string, unknown> = {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7
};

console.log(getSumOfNumericFields(exampleObj)); // 31
console.log(getSortedNumericFieldNames(exampleObj)); // [ 'likes', 'projects', 'friends' ]
  