const firstName = "Angel";
const lastName = "Cadiz";
let isActive = true;
const userId = 2123;

//single log at a time
console.log(firstName);
console.log(lastName);

//log multiple values
console.log(userId, isActive);

//log with mixed values
console.log("User: " + firstName + " is " + userId);

//template literals
console.log(`User ${userId} ${firstName} ${lastName} ${isActive}. lllllll`);