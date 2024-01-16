
  const userGroup = [
    userId: 1234,
    firstName: "Angel",
    lastName: "Cadiz",
    isActive: true,
  },
   const userTwo = {
    userId: 1235,
    firstName: "Copernicus",
    lastName: "Sees the Stars",
    isActive: false,
  };
   const userThree = {
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

//function invocation
printUser(userGroup[0]);

for (const user in userGroup) {
  printUser(user);
}

function isActiveUser(user) {
  if(user.status === true) {
    console.log(true);
    return true;
  } else {
    return false;
  }
}