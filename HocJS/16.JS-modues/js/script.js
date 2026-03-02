// import
// --import default
// --import named

// import a from "./home.js";
// console.log(a);

// import something from "./home.js";
// something();

// import abc from "./home.js";
// const user = new abc();
// console.log(user);

// import c, { a, b as _b } from "./home.js";
// console.log(c);

// console.log(a, _b);

// import * as home from "./home.js";
// const { a, b, default: c } = home;
// console.log(a, b, c);

import { var1, var2, var3 } from "../users/index.js";
console.log(var1, var2, var3);
