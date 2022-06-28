let a = 1<<6;
let b = 1<<2;
let c = 1<<4;

let roles = a|b
let admin = roles&c
console.log(admin)
