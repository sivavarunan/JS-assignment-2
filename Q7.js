// Write a function that calculates the number of days between two given dates.
// (Hint: use Math function in JavaScrpt & Date object to write the function)

function dateDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    let differenceInMillis = d2 - d1;

    let differenceInDays = differenceInMillis / (1000 * 60 * 60 * 24);

    return Math.abs(differenceInDays);
}

console.log(dateDifference("2022-06-15", "2023-06-15"));
