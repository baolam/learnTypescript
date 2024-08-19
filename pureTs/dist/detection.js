"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    // 
}
function provideId(id) {
    if (!id) {
        console.log("Please provide id");
        return;
    }
    id.toLowerCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account)
        return account.isAdmin;
    return false;
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        console.log("Làm cá chiên!");
    }
    else
        console.log("Không nên ăn!");
}
