// const User = {
//   name : "Nguyễn Đức Bảo Lâm",
//   email : "lam01662052827@gmail.com",
//   isActive : true
// };

// function createUser({ name : string, isPaid : boolean = true })
// {

// }

// createUser({ name : "NDBL", isPaid : false });

// function createCourse() : { name : string, price : number }
// {
//   return { name : "reactjs", price : 399 };
// }

type User = {
  name : string;
  email : string;
  isActive : boolean
}

function createUser(user : User) : User
{
  return user;
}

createUser({ name : "", email : "", isActive : true });

export {};