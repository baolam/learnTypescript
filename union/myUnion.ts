let score : number | string = 33;

type User = {
  name : string;
  id : number;
};

type Admin = {
  username : string;
  id : number;
};

let ndbl : User | Admin = {
  name : "NDBL",
  id : 334
};

ndbl = {
  username : "NDBL",
  id : 334
};

// function getDbId(id : number | string)
// {
//   // Making some API calls
//   console.log('====================================');
//   console.log(`Db id is ${id}`);
//   console.log('====================================');
// }

// getDbId("3");

function getDbId(id : number | string)
{
  if (typeof(id) === "string")
    id = id.toLowerCase();
}

// getDbId("3");
// Array
const data : (number | string)[] = [1, "2", 3, "4"];


export {};