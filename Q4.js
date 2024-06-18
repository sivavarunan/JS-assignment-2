// Write a function to get the current date and time in the format YYYY-MM-DD HH:MM:SS.
// (Hint: Use Date object in JavaScript)

function getCurrentDateTime() {
    let now = new Date();

    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, '0'); 
    let day = String(now.getDate()).padStart(2, '0');

    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

console.log(getCurrentDateTime());
