// Write a function that takes a date and a number of days as input and returns the new
// date after adding the specified number of days.
function addDays(date, days) {
    let resultDate = new Date(date);

    resultDate.setDate(resultDate.getDate() + days);
    
    let year = resultDate.getFullYear();
    let month = String(resultDate.getMonth() + 1).padStart(2, '0'); 
    let day = String(resultDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

console.log(addDays("2022-06-15", 10));
