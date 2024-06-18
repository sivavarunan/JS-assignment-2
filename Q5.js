// Write a function that takes a birthdate as input and calculates the person's age.
function calculateAge(birthdate) {

    let birthDate = new Date(birthdate);
    let today = new Date();

  
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
    let dayDifference = today.getDate() - birthDate.getDate();

   
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}

console.log(calculateAge("1990-06-15"));
