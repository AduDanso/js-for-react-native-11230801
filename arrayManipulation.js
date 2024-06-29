function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

console.log(processArray([1, 2, 3, 4, 5]));
