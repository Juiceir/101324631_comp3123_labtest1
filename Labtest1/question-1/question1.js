//Question 1: ES6 Features
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
            const filteredArray = mixedArray
                .filter(item => typeof item === "string")
                .map(str => str.toLowerCase());
            resolve(filteredArray);
    });
}

lowerCaseWords(mixedArray)
    .then(result => console.log("The filtered array is", result));
