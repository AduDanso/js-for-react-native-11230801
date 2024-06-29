function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}



function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}


// Example arrays
let numbersArray = [1, 2, 3, 4, 5];
let stringsArray = ["apple", "banana", "cherry", "lemon", "orange"];

// Calling the functions and logging the results
console.log(processArray(numbersArray));
console.log(formatArrayStrings(stringsArray, numbersArray));
