const score : Array<number> = [];
const names : Array<string> = [];

// function indentityOne(val : boolean | number) : boolean | number {
//   return val;
// }

function identityOne<Type>(val : Type) : Type {
  return val;
};

// const haha = identityOne<boolean | number>(7);
function identityFour<T>(val : T) : T {
  return val;
}

interface Bottle {
  brand : string;
  type : number;
}

// identityFour<Bottle>({ brand : "hehe", type : 3 });

function getSearchProducts<T>(products : T[]) : T 
{
  // do some database operations
  const myIndex = 0;
  return products[myIndex];
}

const getMoreSearchProducts = <T,>(products : T[]) : T => {
  const myIndex = 0;
  return products[myIndex];
} 

interface Database {
  connection : string;
  username : string;
  password : string
}

function anotherFunction<T, U extends Database>(valueOne : T, valueTwo : U) : object {
  return {
    valueOne,
    valueTwo
  }
}

// console.log(anotherFunction(3, { connection : "haha", username : "keke", password : "nono" }));
interface Quiz {
  name : string;
  type : string;
}

interface Course {
  name : string;
  author : string;
  subject : string;
}

class Sellable<T> {
  public cart : T[] = [];

  addToCart(product : T)
  {
    this.cart.push(product);
  }
}

// const sellCourse = new Sellable<Course>();
// sellCourse.addToCart({ name : "124", author : "NDBL", subject : "Unknown" });