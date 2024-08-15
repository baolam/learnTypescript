function addTwo(num : number) : number
{
  return num + 2;
}

function getUpper(val : string)
{
  return val.toUpperCase();
}

function signUpUser(name : string, email : string, isPaid : boolean)
{}

let loginUser = (name : string, email : string, isPaid : boolean = false) => {}

let myValue = addTwo(5);
getUpper("Nguyễn Đức Bảo Lâm");
signUpUser("NDBL", "lam01662052827@gmail.com", false);
loginUser("j", "j@j.com");

// function getValue(myVal : number) :
// {
//   if (myVal > 5)
//     return true;
//   return "200 OK";
// }

const getHello = () : string => {
  return "";
}

const heros = ["thor", "spiderman", "ironman"];
heros.map(hero => {
  return `hero is ${hero}`;
});

function consoleError(errMsg : string) : void
{
  console.log(errMsg);
}

function handleError(errMsg : string) : never
{
  throw new Error(errMsg);
}

export {}