const userOne = {
  userId: 1234,
  firstName: "Angel",
  lastName: "Cadiz",
  isActive: true,
};
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
};

//const user = [userOne, userTwo, userThree];
//much better down below
const user = [
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
  }
];

console.log(user[1].firstName, user[2].lastName);
