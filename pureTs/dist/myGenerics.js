"use strict";
const score = [];
const names = [];
// function indentityOne(val : boolean | number) : boolean | number {
//   return val;
// }
function identityOne(val) {
    return val;
}
;
// const haha = identityOne<boolean | number>(7);
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({ brand : "hehe", type : 3 });
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 0;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 0;
    return products[myIndex];
};
