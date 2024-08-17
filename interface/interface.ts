interface User {
  readonly dbId : number
  email : string;
  userId : number;
  googleId? : number;
  startTrail : () => string,
  getCoupon(couponname : string, value : number) : number
};

interface User {
  githubToken : string
};

interface Admin extends User {
  role : "admin" | "ta" | "learner" 
}

function startTrail() : string {
  return "hello";
}

function getCoupon(couponname : string, value : number) : number {
  return 1;
}

const ndbl : Admin = { dbId : 22, role : "admin", email : "lam01662052827@gmail.com", userId : 2211, githubToken : "2lgjl", startTrail, getCoupon };
ndbl.email = "haha@gmail.com";

export {};