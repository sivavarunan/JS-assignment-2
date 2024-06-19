// Write a function that takes two arrays and returns a new array containing only the
// elements that are present in both arrays.
// (use Set object)

function intersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    let result = arr1.filter(item => set2.has(item));

    return result;
}

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
console.log(intersection(array1, array2)); // Output: [3, 4]
