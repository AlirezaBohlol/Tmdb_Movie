let user = [
  {
    name: 'Alireza',
    family: 'Bohlol',
  },
];

user.map((user, index) => {
  console.log({
    user_counter: index,
    First_name: user.name,
    Last_name: user.family,
  });
});
