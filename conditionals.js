const firstName = "Angel";
const lastName = "Cadiz";
let isActive = true;
let userId = 2123;
let userIdTwo = 2123;

if (isActive === true) {
  console.log("the user is active");
} else {
  console.log("the user is not active");
}

if (firstName === "Lindsey") {
  console.log(`First name is Lindsay`)
} else {
  console.log(`First name is ${firstName}`)
}

if (userId === userIdTwo) {
  userId = 1234;
  console.log(userId)
} else {
  return;
}

//incomplete