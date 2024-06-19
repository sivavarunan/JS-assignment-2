// 16. Write a function that takes an array of student names representing attendance on a
// particular day and a Set representing the overall attendance. Update the Set with the
// new attendance and return the updated Set.

function updateAttendance(newAttendance, overallAttendance) {
    newAttendance.forEach(student => {
        overallAttendance.add(student);
    });
    return overallAttendance;
}

let overallAttendance = new Set(["Alice", "Bob"]);
let todayAttendance = ["Charlie", "Alice"];
overallAttendance = updateAttendance(todayAttendance, overallAttendance);
console.log([...overallAttendance]); // Output: ["Alice", "Bob", "Charlie"]
