function mySlice(array, start = 0, end = array.length) {
    const result = [];
    const length = array.length;
  
    start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
    end = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);
  
    for (let i = start; i < end; i++) {
      result.push(array[i]);
    }
    return result;
}


function myIndexOf(array, item, from = 0) {
    const len = array.length;
    from = from < 0 ? Math.max(len + from, 0) : from;

    for (let i = from; i < len; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
}

function myIncludes(array, item, from = 0) {
    const len = array.length;
    from = from < 0 ? Math.max(len + from, 0) : from;

    for (let i = from; i < len; i++) {
        if (array[i] === item) {
            return true;
        }
    }
    return false;
}

const numbers = [1, 2, 3, 4, 5];
console.log(mySlice(numbers, 1, 4)); // [2, 3, 4]
console.log(mySlice(numbers, -3, -1)); // [3, 4]

console.log(myIndexOf(numbers, 3)); // 2
console.log(myIndexOf(numbers, 6)); // -1

console.log(myIncludes(numbers, 3)); // true
console.log(myIncludes(numbers, 6)); // false
