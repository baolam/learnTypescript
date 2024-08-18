class User {
  email : string;
  name : string;
  readonly city : string = "DaLat";

  constructor(email : string, name : string)
  {
    this.email = email;
    this.name = name;
  }
};

const ndbl = new User("lam01662052827@gmail.com", "ndbl");

export {};