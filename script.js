let array = ["abc", 23]
function some(array, fun) {
    for (let i = 0; i < array.length; i++) {
        if (fun(array[i], i)) {
            return true;
        }
    }
    return false;
}
function evenNumber(num) {
    return typeof num === "number" && num % 2 === 0;
}

let arr = ["abc", 2, 3, "vasya"];
console.log(`Using "some" function for even numbers in array: ${array}, function "evenNumber", result: ${some(array, evenNumber)} `);
console.log(`Using "some" function for even numbers in array: ${arr}, function "evenNumber", result: ${some(arr, evenNumber)} `);

function every(array, fun) {

    for (let i = 0; i < array.length; i++) {
        if (!fun(array2[i], i)) {
            return false;
        }
    }
    return true;
}

let array2 = [2, 3, 4];

function elmGreaterIndex(elem, index) {
    return elem > index
}

console.log(`using "every" function for elements greater than the index values, array: ${array2}, function ${elmGreaterIndex}, result: ${every(array2, elmGreaterIndex)}`)