  const users = [
   {
    userId: 1234,
    firstName: "Angel",
    lastName: "Cadiz",
    isActive: true,
   },
   {
    userId: 1235,
    firstName: "Copernicus",
    lastName: "Sees the Stars",
    isActive: false,
   },
   {
    userId: 1236,
    firstName: "Sally",
    lastName: "Fields",
    isActive: true,
  },
];

//funciton declaration
function printUser(user) {
  console.log(user);
}

function getFullName(user) {
  return user.fullName = "AT SAIT " + user.firstName + " " + user.lastName;
}

function isUserStatusActive(user) {
  if (user.status === true) {
    return true;
  } else {
    return false;
  }
}
let activeUser = isUserStatusActive(users[0]);

console.log(activeUser);

//function invocation
isUserStatusActive(users[0]);
isUserStatusActive(users[1]);
isUserStatusActive(users[2]);

//invoke and assign the result to a variable
const userTwoName = getFullName(users[2]);
const userOneName = getFullName(users[1]);
const userName = getFullName(users[0]);

//log the variable
console.log(userName);
console.log(userOneName);
console.log(userTwoName);
