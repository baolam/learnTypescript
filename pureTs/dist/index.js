"use strict";
// class User {
//   email : string;
//   name : string;
//   readonly city : string = "DaLat";
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(email : string, name : string)
//   {
//     this.email = email;
//     this.name = name;
//   }
// };
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "DaLat";
    }
    deleteToken() {
        console.log('====================================');
        console.log("Token deleted");
        console.log('====================================');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1)
            throw new Error("Course count should be more than 1");
        this._courseCount = courseNum;
    }
}
;
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const ndbl = new User("lam01662052827@gmail.com", "ndbl");
